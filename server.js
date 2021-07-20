const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./models')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false,}))

db.sequelize.sync() // 결과값이 프로미스객체
.then(()=>{
    console.log('DB접속 성공')
})
.catch((error)=>{
    console.log(`DB접속 실패 : ${error}`)
})

app.use('/api',routes)


// app.post('/',async(req,res)=>{
//     console.log('postman으로 실행함!')
//     res.json(req.body)
//     await User.create({
//         userid:req.body.userid,
//         username:req.body.username,
//         userpw:req.doby.userpw
//     })
// })


app.listen(3001,()=>{
    console.log(`server start port 3001`)
})

//3.128.199.228

//회원가입 url 만든다면
// app.post ('user/join',(req,res)=>{

// })

// //회원 정보 url
// app.get('/user',(req,res)=>{

// })

// //회원 수정
// app.patch('/user/modify',(req,res)=>{ //리퀘스트 메소드만 바꿔주면 됨~ patch로

// })

// //회원탈퇴 url
// app.delete('/user/delete',(req,res)=>{

// })