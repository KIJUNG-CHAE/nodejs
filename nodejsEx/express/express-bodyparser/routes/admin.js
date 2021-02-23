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

router.get('/products/write', (req, res) => {
    res.render('admin/write.html');
});

router.post('/products/write' , (req, res) => {
    res.send(req.body.price);
}); // post처리, html의 name=price를 받아와서 보냄

module.exports = router;