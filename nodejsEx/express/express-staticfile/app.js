const express = require('express'); // nodejs에서 다른 패키지를 불러올 때  
const nunjucks = require('nunjucks'); //nunjucks
const logger = require('morgan');//morgan
const bodyParser = require('body-parser')//express의 내장모듈이다 패키지를 설치할 필요x

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express(); //express함수의 변환값 저장
const port = 3000; // 포트넘버

nunjucks.configure('template', { 
    autoescape : true ,
    express : app
});// 위치 세팅, 오토스케이프 javascript 그대로 노출 오류공격 태그가 작동이 되지 않게끔 함; 보안 
// express 객체 설정

// 미들웨어 세팅
app.use(logger('dev')); //logging을 하는 것도 미들웨어!
app.use(bodyParser.json()); // 미들웨어로 bodyparser설정 > request의 body변수를 사용가능 /라우팅 전에 해야함
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/uploads', express.static('uploads')); //정적폴더를 사용해서 폴더안의 파일을 하나의 url로 접근가능하다
//css js 정적폴더에 올려두고 써밍을 한다.


app.get('/', (req,res) => {
    res.send('express start');
}); //함수의 인자를 함수로 받음, arrow function

function vipMiddleware(req,res,next){
    console.log('최우선 미들웨어');
    next();
}

// app.use도 미들웨어이다
app.use('/admin', vipMiddleware, admin) // admin이후는 앞에 선언된 admin을 참조하여라
app.use('/contacts', contacts)

app.listen( port, () => {
    console.log('Express listening on port', port); // 웹서버가동시 현재 사용중이 포트
});