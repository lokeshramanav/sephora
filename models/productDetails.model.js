const ProductDetail = (sequelize, Sequelize)=>{
    const productDetail = sequelize.define('product_details',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
          }, 
        productName:{
            type: Sequelize.STRING
        }
    });
    return productDetail
}


module.exports = ProductDetail