const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/products', ctrl.get_products );

router.get('/products/write', ctrl.get_products_write );

router.post('/products/write', ctrl.post_products_write );

module.exports = router;
// admin이후 url과 미들웨어들이 포함된 파일
// get_products, get_products_write, post_products_write 이런것들은 admin.ctrl.js안에 작성