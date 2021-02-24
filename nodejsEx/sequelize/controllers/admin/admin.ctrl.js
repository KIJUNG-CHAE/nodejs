const models = require('../../models');

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
    models.Products.findAll({

    }).then( (products) => {
        res.render('admin/products.html', { products })
    }); // html로 뿌려줌 
        // javascript에서 key값과 value값이 일치하면 하나만 적어도 됨 >> products

}// findAll뒤에 들어갈 조건들 (where절, 어떤단어가 포함된 경우, 관리자인 경우, 제품등록시간 등등)
 // 현재는 없으므로 비워둠

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    // res.send(req.body); 
    models.Products.create(req.body).then( () => {
        res.redirect('/admin/products');
    });
}// body-Parser를 통해 keyfield값을 맞춰서 Products들을 생성, 
// 정보를 받고 다시 메인 페이지로 돌아가기 위해 콜백함수로 then을 쓰고 redirect를 해줌

exports.get_products_detail = ( req , res ) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/detail.html', { product });  
    });
}     
// 하나만 찾아서 admin/detail페이지에서 상세하게 나타냄
// url이 변하는 변수를 id로 정했음 <<이거를 req.params.id 쓰면 받을 id값을 받을 수 있다