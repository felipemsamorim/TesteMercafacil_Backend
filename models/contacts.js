module.exports = (sequelize,Sequelize) => {
    return sequelize.define('contacts',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: Sequelize.STRING,
        celular:Sequelize.STRING
    }, {
        timestamps: false
    });
}