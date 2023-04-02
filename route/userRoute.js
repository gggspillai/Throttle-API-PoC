const express = require("express");
const controller = require("../controller/userController");

class Router{
    
    constructor (){
this.router = express.Router();
this.initiateRoutes();
    }
initiateRoutes(){
this.router.get('/resluts',controller.getResults);
}
getRouter(){
   return this.router;
}
}
module.exports = Router;