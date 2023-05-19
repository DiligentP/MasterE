# MasterE 개발환경

# 베이스 이미지 설정
FROM python:3.10

# 작업 디렉토리 설정
WORKDIR /app

# 호스트 시스템의 현재 디렉토리의 모든 파일을 컨테이너의 작업 디렉토리로 복사
COPY . ~/MasterE

# 필요한 패키지 설치
# RUN pip install --no-cache-dir -r requirements.txt
RUN pip install django

# 컨테이너에서 실행할 명령 설정
CMD ["python", "manage.py", "runserver", "8000"]
