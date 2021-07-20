# Restful API

request method type

1. GET : 데이터를 가져올때 (R) select문
2. POST : 데이터를 입력할때 (C) insert문
3. PUT : 데이터를 수정할떄 (U) update문
4. DELETE : 데이터를 삭제할떄 (D) delete문 
5. PATCH : 데이터를 일부수정 (U) update문 
6. OPTIONS : 요청을 체크
7. HEAD : 데이터를 request message header만 받아올때 

// Restful 너무 너무 세밀하게 많지만 
// 실제로 개발할땐 정말 쓰는것만 쓴다 .
// post 로만 써도 구동은되잖아
// 코드를 직관적으로만 볼수있게 

# Restful api 만들어볼거에요.

1. React로 만든 Comment 댓글을 DB와 연결하는걸 할겁니다.
2. front server 와 back server 필요한대 back은 실서버 구동
3. front 구동하지않고있음x 
4. 로컬에서 작업을할거고 DB연결하는것을 완료가되면 
5. restful api 만들기인데 

# step 
1. npm install sequelize
2. npm install sequelize-cli
3. npm install mysql2
4. npx sequelize init (sequelize 폴더생성)
5. config / models / seeders 폴더가 생성됬는지 확인.
6. config 폴더에서 config.json 을 수정 (해당 정보에 맞게.)
7. models 폴더안에 comment.js 파일 생성 (DB모델을 만들기 위해서.)
8. models 폴더안에 index.js파일을 수정하기
9. server.js 파일에서 sequelize sync 하기.