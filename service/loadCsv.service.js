const db = require('../models/index');
const User = db.UserDetail;
const Product = db.ProductDetail;
const Purchase = db.Purchase


exports.loadData = async(data)=>{

    try{
        var user = await User.findOrCreate({
            where: {email: data.email},
            defaults:{
                firstName: data.first_name,
                lastName: data.last_name,
                email: data.email
            }
        })
    
        var product = await Product.findOrCreate({
            where: {id: data.product_id},
            defaults:{
                productName: data.product_name,
                id:data.product_id
            }
        })
    
        var purchase = await Purchase.create({     
    
                user_id: user[0].dataValues.id,
                product_id: product[0].dataValues.id ,
                quantity: data.quantity
            
        })
    }
    catch(err){
        console.log("Error", err.message);
    }

    

}