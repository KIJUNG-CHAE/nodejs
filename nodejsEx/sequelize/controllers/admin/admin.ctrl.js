const models = require('../../models');

exports.get_products = ( _ , res) => {
    res.render( 'admin/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    // res.send(req.body); 
    models.Products.create(req.body).then( () => {
        res.redirect('/admin/Products')
    });
}// body-Parser를 통해 keyfield값을 맞춰서 Products들을 생성, 
// 정보를 받고 다시 메인 페이지로 돌아가기 위해 콜백함수로 then을 쓰고 redirect를 해줌