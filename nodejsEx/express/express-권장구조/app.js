const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');


class App {

    constructor () {
        this.app = express();
        
        // 뷰엔진 셋팅
        this.setViewEngine();

        // 미들웨어 셋팅
        this.setMiddleWare();

        // 정적 디렉토리 추가
        this.setStatic();

        // 로컬 변수
        this.setLocals();

        // 라우팅
        this.getRouting();

        // 404 페이지를 찾을수가 없음
        this.status404();

        // 에러처리
        this.errorHandler();


    }


    setMiddleWare (){
        
        // 미들웨어 셋팅
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }

    setViewEngine (){

        nunjucks.configure('template', {
            autoescape: true,
            express: this.app
        });

    }


    setStatic (){
        this.app.use('/uploads', express.static('uploads'));
    }

    setLocals(){

        // 템플릿 변수
        this.app.use( (req, res, next) => {
            app.locals.isLogin = true;
            this.app.locals.req_path = req.path;
            next();
        });

    }

    getRouting (){
        this.app.use(require('./controllers'))
    } //라우팅 한 줄로 끝내 버림

    status404() {        
        this.app.use( ( req , res, _ ) => {
            res.status(404).render('common/404.html')
        });
    }

    errorHandler() {

        this.app.use( (err, req, res,  _ ) => {
            res.status(500).render('common/500.html')
        });
    
    }

}

module.exports = new App().app;
// app.js 파일을 호출하면 인스턴스를 만들고 뿌려준다
// 변수명, 함수명을 보고 어떤 일을 하는지 바로 직관적으로 볼 수 있다
// this변수 사용