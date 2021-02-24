const UserDetail = (sequelize, Sequelize)=>{
    const userDetail = sequelize.define('user_details',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
          },          
        firstName:{
            type: Sequelize.STRING
        },
        lastName:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING,
            unique: true
        }
    });
    return userDetail
}


module.exports = UserDetail