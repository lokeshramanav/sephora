const Sequelize = require('sequelize')

//IMPORTING MODELS 

const userDetail = require('./userDetails.model');
const productDetail = require('./productDetails.model');
const purchase = require('./purchase.model');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PWD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: false,
    pool: {
      max: process.env.POOL_MAX,
      min: process.env.POOL_MAX,
      acquire: process.env.POOL_ACQUIRE,
      idle: process.env.POOL_IDLE
    }
});

const db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.UserDetail    = userDetail(sequelize , Sequelize)
db.ProductDetail = productDetail(sequelize , Sequelize)
db.Purchase      = purchase(sequelize , Sequelize)

db.UserDetail.belongsToMany(db.ProductDetail,{
    through:"purchase",
    as:'products',
    foreignKey: "user_id",
  })

  db.ProductDetail.belongsToMany(db.UserDetail,{
    through:"purchase",
    as:'users',
    foreignKey: "product_id",
  })

  

module.exports = db;