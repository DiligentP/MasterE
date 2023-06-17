from ... import database
from sqlalchemy import Column, String, DateTime


class User(database.Base):
    __tablename__ = 'users'

    user_id = Column(String(50), primary_key=True)
    username = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    password = Column(String(100), nullable=False)
    create_date = Column(DateTime, nullable=False)
