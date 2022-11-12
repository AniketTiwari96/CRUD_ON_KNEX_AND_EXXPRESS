const express=require('express');
const app=express()
const port=3000;

// const student=require('../router/student.js')
const student=require('./route/student.js')

app.use('/students',student)

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`);
})