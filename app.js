const express = require('express');
const app=express();
const path=require('path');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require("body-parser");
const db = require('./config/database');

app.use('/public',express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use(ejsLayouts);

app.use(bodyParser.urlencoded({     extended:true})); 


require('./router/routeManager')(app);

//Database

db.authenticate()
.then(()=> console.log(' Database connected...'))
.catch(err => console.log ('error: ' +err))

app.listen(5500);
