module.exports = function(sequelize, DataTypes){

    const Booklist = sequelize.define('Booklist',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title : { type: DataTypes.STRING },
            author : { type: DataTypes.STRING },
            description : { type: DataTypes.TEXT }
        }
    );

    return Booklist;
}