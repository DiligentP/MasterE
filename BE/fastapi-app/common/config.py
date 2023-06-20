import os

# 프로젝트 디렉토리의 절대 경로
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# database.py 파일의 절대 경로
DATABASE_PATH = os.path.join(BASE_DIR, 'database.py')