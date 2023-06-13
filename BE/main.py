from fastapi import FastAPI
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from databases import Database

app = FastAPI()

DATABASE_URL = "mysql+pymysql://park:qkrwjdgus@localhost/mastere"

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


@app.get("/vocas/{word}")
async def read_voca(word: str):
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
