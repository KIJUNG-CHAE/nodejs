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

app.use((req, res, next) => {
    app.locals.isLogin = false;
    app.locals.req_path = req.path;
    next();
}); //글로벌 변수 사용, 템플릿에서 isLogin변수만 사용해주면 매번 변수를 넘겨줄 필요가 없음.
// app.locals.req_path : express에서 현재 url을 나타내는 변수

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

app.use((req, res, _) => {
    res.status(400).render('common/404.html');
}); //http 상태코드가 400인경우 404error를 html으로 보여줌.
    //사용하지 않는 변수 _ 처리, req도 안쓰면 _처리 가능

app.use((req, res, _) => {
        res.status(500).render('common/500.html');
    }); //서버에서의 에러, 변수처리, 타이핑, 파일업로드시 클 경우

app.listen( port, () => {
    console.log('Express listening on port', port); // 웹서버가동시 현재 사용중이 포트
});