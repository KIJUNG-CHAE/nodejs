const { rawListeners } = require('../../app');
const models = require('../../models');

exports.get_products = async( _ , res) => {

    try{
        const products = await models.Products.findAll();
        res.render('admin/products.html', { products });
    }catch(err){

    }
} //async await으로 처리

 //booklist
exports.get_booklist = async(req, res) => {
    const booklist = await models.Booklist.findAll();
    res.render('admin/booklist.html', { booklist });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = async( req , res ) => {
    await models.Products.create(req.body);
    res.redirect('/admin/products');
}// body-Parser를 통해 keyfield값을 맞춰서 Products들을 생성, 
// 정보를 받고 다시 메인 페이지로 돌아가기 위해 콜백함수로 then을 쓰고 redirect를 해줌

exports.get_booklist_write = (req, res) => {
    res.render('admin/write_book.html');
}

exports.post_booklist_write = async(req, res) => {
    await models.Booklist.create(req.body);
    res.redirect('/admin/booklist');
}

exports.get_products_detail = async ( req , res ) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/detail.html', { product });  
}     
// 하나만 찾아서 admin/detail페이지에서 상세하게 나타냄
// url이 변하는 변수를 id로 정했음 <<이거를 req.params.id 쓰면 받을 id값을 받을 수 있다

exports.get_booklist_detail = async(req, res) => {
    const book = await models.Booklist.findByPk(req.params.id);
    res.render('admin/detail_book.html',{ book });
}

exports.get_products_edit = async(req, res) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/write.html', { product });
}
// 기존의 write.html를 재탕함 << action을 비워두었던 점 
// 다른점은 내용이 채워지도록 변수를 사용할 수 있게 함.

exports.post_products_edit = async(req, res) => {
    await models.Products.update(
        req.body,
        {
            where : { id : req.params.id }
    });
    res.redirect('/admin/products/detail/' + req.params.id );
} // update에 필요한 매개변수 : data와 조건(id)where절
  // 데이터베이스 업데이트 >> 상세페이지로 redirection

exports.get_booklist_edit = async(req, res) => {
    const book = await models.Booklist.findByPk(req.params.id);
    res.render('admin/write_book.html',{ book });
}

exports.post_booklist_edit = async(req, res) => {
    await models.Booklist.update(
        req.body,
        {
        where : { id: req.params.id }
    });
    res.redirect('/admin/booklist/detail/' + req.params.id );  
}

exports.get_products_delete = async(req, res) => {
    await models.Products.destroy({
        where : {
            id : req.params.id
        }
    });
    res.redirect('/admin/products');
}
// sequelize의 destroy메소드로 sql의 delete처리 
// product목록으로 redirect

exports.get_booklist_delete = async(req, res) => {
    await models.Booklist.destroy({
        where : { id : req.params.id }
    });
    res.redirect('/admin/booklist');
}