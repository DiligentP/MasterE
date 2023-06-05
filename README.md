# MasterE

# 프로젝트 디렉터리 구조
MasterE           
├───Document        # MasterE 프로젝트의 문서를 모아놓은 디렉터리입니다.
├───Extensions      # MasterE 프로젝트의 Chrome-Extension 디렉터리입니다.
│   ├───images
│   ├───page
│   └───scripts
├───Backend         # FastAPI 백엔드 파일들을 모아놓은 디렉토리입니다.
├───Frontend        # React 프론트엔드 파일들을 모아놓은 디렉토리입니다.
└───MySQL           # MySQL 디렉터리입니다.
# FastAPI 구동
```
uvicorn main:app --reload
uvicorn main:app --reload --host 192.168.0.34 --port 8000
```

# Word 정책
각 단어는 10개의 카운팅이 존재하며, 카운팅이 다 채워지면 외운 단어로 간주합니다.
카운팅은 그 단어에 해당하는 문제를 맞추었을때 하나씩 증가하며, 반대로 틀렸을 시 하나씩 차감됩니다.

# Point 정책
MasterE 서비스를 이용중에 일정한 확률로. 문제 팝업이 뜹니다. 
맞추게 되면 1~10 포인트를 랜덤으로 지급받습니다.

포인트는 1:1 비율의 현금의 가치를 가집니다.

# 게임
1. 카드 매칭하기
2. 