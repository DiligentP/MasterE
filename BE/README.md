## 프로젝트 경로 이동
cd [프로젝트 경로]/MasterE/MySQL

## 도커 컴포즈 빌드 및 백그라운드실행
docker-compose up -d

## MySQL 컨테이너 접근
docker exec -it mysql-container bash

## FastAPI 구동
```
uvicorn main:app --reload
uvicorn main:app --reload --host 192.168.0.35 --port 8000
```

## 참고
https://velog.io/@jkjan/Docker-MySQL-%EC%9B%90%EA%B2%A9-%EC%A0%91%EC%86%8D