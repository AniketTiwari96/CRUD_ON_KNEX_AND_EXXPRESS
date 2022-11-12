const express=require('express');
const Router=express.Router();

const deletestudent=require('../controller/control.js')

Router.get('/delete/:id',deletestudent)

// export {Router}
module.exports=Router
