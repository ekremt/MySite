const express=require('express');
const router= express.Router();
const ctrlHome=require('../controllers/ctrlHome');

 router.get('/',ctrlHome.index);

 module.exports = router ;



