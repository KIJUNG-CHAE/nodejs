const models = require('./models');

async function getProducts(){

    //에러 캐치 까지
    try{        
        const product7 = await models.Products.findByPk(7);
        const product9 = await models.Products.findByPk(9);

        console.log(product7.dataValues.id);
        console.log(product9.dataValues.price);
    }catch(err){
        console.log(err);
    }


    
} //7번 제품
// await은 promise객체를 받는다!!!

getProducts();

// 기존에 template으로 뿌릴 때는 product변수를 바로 보냈다
// 그렇지 않은 경우 .dataValues