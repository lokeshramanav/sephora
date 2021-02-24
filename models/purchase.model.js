const Purchase = (sequelize, Sequelize)=>{
    const purchase = sequelize.define('purchase',{
        product_id:{
            type: Sequelize.INTEGER
        },
        user_id:{
            type: Sequelize.UUID
        },
        quantity:{
            type: Sequelize.INTEGER
        }
    });
    return purchase
}

module.exports = Purchase