const input=require('readline-sync');
const express=require('express');
const app=express();
const port = 8000;

const student=require('../../../router/student.js')
const teachear=require('../../../router/teacher.js')

// new idea import karne ka 
// import student from './router/student.js'
// import teachear from './router/teachear.js'

app.use ('/students',student)
app.use('/teachears',teachear)




app.listen(port,()=>{
    console.log(`application listen n port http://localhost:${port}`)
});
