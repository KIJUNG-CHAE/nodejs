const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');
//Products
router.get('/products', ctrl.get_products );

router.get('/products/write', ctrl.get_products_write );

router.post('/products/write', ctrl.post_products_write );

router.get('/products/detail/:id', ctrl.get_products_detail );

router.get('/products/edit/:id', ctrl.get_products_edit );

router.post('/products/edit/:id', ctrl.post_products_edit );

router.get('/products/delete/:id', ctrl.get_products_delete );

//Booklist
router.get('/booklist', ctrl.get_booklist);

router.get('/booklist/write', ctrl.get_booklist_write );

router.post('/booklist/write', ctrl.post_booklist_write );

router.get('/booklist/detail/:id', ctrl.get_booklist_detail );

router.get('/booklist/edit/:id', ctrl.get_booklist_edit );

router.post('/booklist/edit/:id', ctrl.post_booklist_edit );

router.get('/booklist/delete/:id', ctrl.get_booklist_delete );

module.exports = router;