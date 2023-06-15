from fastapi import FastAPI
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import select, func
from databases import Database
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 도메인 허용
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

DATABASE_URL = "mysql+pymysql://park:qkrwjdgus@192.168.0.32/mastere"

database = Database(DATABASE_URL)
Base = declarative_base()

class Voca(Base):
    __tablename__ = 'vocas'

    id = Column(Integer, primary_key=True)
    word = Column(String)
    mean = Column(String)
    source = Column(String)


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.post("/vocas")
async def create_voca(word: str, mean: str, source: str):
    engine = create_engine(DATABASE_URL)
    Base.metadata.create_all(bind=engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    voca = Voca(word=word, mean=mean, source=source)
    session.add(voca)
    session.commit()
    session.close()

    return {"message": "Voca created successfully"}

@app.get("/vocas/allofcount")
async def get_all_of_count():
    query = select(func.count()).select_from(Voca.__table__)
    result = await database.fetch_val(query)
    return {"count": result}


@app.get("/vocas/{id}")
async def get_voca_by_id(id: int):
    query = Voca.__table__.select().where(Voca.id == id)
    result = await database.fetch_one(query)

    if result is None:
        return {"message": "Voca not found"}

    voca = dict(result)
    return voca

@app.get("/vocas/{word}")
async def get_voca(word: str):
    query = Voca.__table__.select().where(Voca.word == word)
    result = await database.fetch_one(query)

    if result is None:
        return {"message": "Voca not found"}

    voca = dict(result)
    return voca

@app.put("/vocas/{word}")
async def update_voca(word: str, mean: str, source: str):
    query = Voca.__table__.update().where(Voca.word == word).values(mean=mean, source=source)
    await database.execute(query)

    return {"message": "Voca updated successfully"}


@app.delete("/vocas/{word}")
async def delete_voca(word: str):
    query = Voca.__table__.delete().where(Voca.word == word)
    await database.execute(query)

    return {"message": "Voca deleted successfully"}
