-- Mysql 접속
mysql -u root -p

-- 원격 접속 허용
grant all privileges on *.* to 'root'@'%';

-- create user
create user '사용자 이름'@'ip주소' identified by '비밀번호';
create user 'park'@'*' identified by 'qkrwjdgus';