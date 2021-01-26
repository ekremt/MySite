const express=require('express');
const router=express.Router();
const ctrlContact = require('../controllers/ctrlContact');

router.get('/',ctrlContact.index);
router.post('/',ctrlContact.post);

module.exports = router;