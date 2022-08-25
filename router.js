const express=require('express');
const controller=require('./controller');
const Router=express.Router();

Router.get('/getProduct',controller.getProduct);

Router.get('/getProduct/:id',controller.getProductById);

Router.patch('/updateProduct',controller.updatebyId);

Router.delete('/deleteProduct',controller.deleteProduct);





module.exports=Router;