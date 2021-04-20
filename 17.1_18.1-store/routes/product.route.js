const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');


router.get('/',(req,res)=>{
   productController.getAll(req,res);
}).post('/',(req,res)=>{
   productController.create(req,res);
})

module.exports = router;
