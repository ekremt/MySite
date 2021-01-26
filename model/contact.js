const  Sequelize= require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
   
    name:Sequelize.TEXT,
    email:Sequelize.TEXT,
    subject:Sequelize.TEXT,
    message:Sequelize.TEXT,
},
{
    tableName: 'Contact',
    freezeTableName: true
});

(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

module.exports=  Contact;