const Sequelize = require('sequelize');
module.exports = new Sequelize('mysite', 'postgres', '1234', {
    host: 'localhost',
    dialect:'postgres'
  });

