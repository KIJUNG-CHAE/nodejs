const moment = require('moment')

module.exports = function(sequelize, DataTypes){
    const Products = sequelize.define('Products',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            description : { type: DataTypes.TEXT }
        }
    );

    Products.prototype.dateFormat = (date) => (
        moment(date).format('YYYY-MM-DD')
    )
    // 자바스크립트 날짜 형태를 받아서 년월일로 만들어주는 함수
    // return없애고  함수를 소괄호 사용해서 바로 리턴을 해주는 형식
    
    return Products;
} //테이블 구성 요소