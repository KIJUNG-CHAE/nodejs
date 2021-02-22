const express = require('express');
const { renderString, render } = require('nunjucks');
const router = express.Router();

function testMiddleware( req, res, next ){
    console.log('첫번째 미들웨어');
    next(); // 제어권을 넘긴다.
}

function testMiddleware2( req, res, next ){
    console.log('두번째 미들웨어');
    next(); // 제어권을 넘긴다.
}

// 미들웨어 작성하는 법 1.
// 실제 업무에서 어떻게 미들웨어를 사용하는가??
// 하나의 분기점을 만드는 셈

// function loginRequired(req,res,next){
//     if(로그인이 되어있지 않으면){
//             res.redirect(로그인 창으로)
//     }else{
//         next();
//     }
// }

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin 이후 url');
}); //test middleware을 실행하고 다음 제어권행사한 다음 next()함수를 통해 원래대로 , (req, res)로 제어권을 넘긴다

router.get('/products' ,(req, res) => {
    // res.send('admin products');
    res.render('admin/products.html', {
        message : '<h1>태그가 출력됩니다.</h1>',
        online : 'express'
    }); //template에서 뿌려주는 건 render로 보냄
});

module.exports = router;