from ... import database
from sqlalchemy import Column, Integer, String


class Voca(database.Base):
    __tablename__ = 'vocas'

    id = Column(Integer, primary_key=True)
    word = Column(String)
    mean = Column(String)
    source = Column(String)
