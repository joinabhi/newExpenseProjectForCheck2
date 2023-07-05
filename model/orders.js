const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Order=sequelize.define('ord',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
},
 paymentid:Sequelize.STRING,
 orderid:Sequelize.STRING,
 status:Sequelize.STRING
});

module.exports=Order;