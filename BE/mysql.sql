-- Mysql root 접속
mysql -u root -p

-- create user
create user '사용자 이름'@'ip주소' identified by '비밀번호';
create user 'park'@'%' identified by 'password';

-- 원격 접속 허용
grant all privileges on *.* to 'park'@'%';

-- msatere 스키마 생성 및 권한부여
CREATE SCHEMA IF NOT EXISTS mastere;
GRANT ALL PRIVILEGES ON mastere.* TO 'park'@'%';


-- Mysql park 접속
mysql -u park -p

-- 테이블 생성
CREATE TABLE vocas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(255),
    mean VARCHAR(255),
    source VARCHAR(255)
);





