const db = require('../models/index');
const User = db.UserDetail;
const Product = db.ProductDetail;
const Purchase = db.Purchase

const sendDataService = require('../service/sendData')

exports.getAllUsers = async(req ,res )=>{

    var limit  = req.query.limit ? Number(req.query.limit) : 10
    var offset = req.query.limit ? Number(req.query.offset) : 1

    var listAllUsers = await User.findAll({
        order:  ['firstName'],
        offset: offset, 
        limit: limit 
    })

    res.status(200).json(listAllUsers)
}

exports.getProductDetailsByUserId = async(req , res)=>{

    var id = req.params.userId
    var userPurchases = await User.findByPk(id, {
        include:[
            {
                model:Product,
                as:'products'
            }
        ]
    })
    await sendDataService.sendDataToExternalApi({userId:id , ip:req.connection.remoteAddress})
    res.status(200).json(userPurchases);    
}