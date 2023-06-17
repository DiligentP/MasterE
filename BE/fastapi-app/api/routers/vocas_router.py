from fastapi import APIRouter


router = APIRouter(
    prefix="/vocas",
)


@router.post("/")
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


@router.get("/")
async def get_all_of_count():
    query = select(func.count()).select_from(Voca.__table__)
    result = await database.fetch_val(query)
    return {"count": result}


@router.get("/vocas/{id}")
async def get_voca_by_id(id: int):
    query = Voca.__table__.select().where(Voca.id == id)
    result = await database.fetch_one(query)

    if result is None:
        return {"message": "Voca not found"}

    voca = dict(result)
    return voca

@router.get("/vocas/{word}")
async def get_voca(word: str):
    query = Voca.__table__.select().where(Voca.word == word)
    result = await database.fetch_one(query)

    if result is None:
        return {"message": "Voca not found"}

    voca = dict(result)
    return voca

@router.put("/vocas/{word}")
async def update_voca(word: str, mean: str, source: str):
    query = Voca.__table__.update().where(Voca.word == word).values(mean=mean, source=source)
    await database.execute(query)

    return {"message": "Voca updated successfully"}


@router.delete("/vocas/{word}")
async def delete_voca(word: str):
    query = Voca.__table__.delete().where(Voca.word == word)
    await database.execute(query)

    return {"message": "Voca deleted successfully"}