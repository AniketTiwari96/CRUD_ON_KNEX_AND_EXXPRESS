const express=require('express');
const Router=express.Router();

Router.get('all',(req,res)=>{
    res.send('all teacher ')
})
Router.post('create',(req,res)=>{
    res.send('new teachear created ')
})
Router.put('update',(req,res)=>{
    res.send('teacher updated ')
})
Router.delete('delete',(req,res)=>{
    res.send('teacher delete  ')
})

module.exports=Router
// export default Router