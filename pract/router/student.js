
const express=require('express')
const Router=express.Router();

// const student=require('../router/student.js')
const {allstudent,deletestudent}=require('../control.js')
// import{allstudent,deletestudent} from '../controller/control.js'
Router.get('/delete/:id/:name',allstudent)


// Router.post('/create',(req,res)=>{
//     res.send('new student create ')
// })
// Router.put('/update',(req,res)=>{
//     res.send('student updated ')
// })
// Router.delete('/delete',(req,res)=>{
//     res.send('studente deleted  ')
// })

// with regx exampal 
Router.get('/delete/:id([0-9]{2})',deletestudent)

// router .param
// Router.param('id',(req,res,next,id)=>{
//     console.log(`id ${id}`);
//     next()
// })
// Router.get('/user/:id',(req,res)=>{
//     console.log('this is user id path ');
//     res.send('respons ok')
// })






module.exports=Router
// export default Router