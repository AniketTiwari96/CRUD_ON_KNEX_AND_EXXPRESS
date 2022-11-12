// yaha mai express ko require kiya hu
const express=require('express')
const app=express();
const port=3000;

// yaha mai middilware banaya hu
app.use(express.json())

// yaha mai database ke connection ko import kiya hai
const knex=require('./dbconnection/connection.js');

app.post('/creatuser', async(req,res)=>{
    try {
        let d=await knex('students').insert(req.body)   
        res.send([req.body,'data inserted successfuly.....'])
        console.log('data inserted successfuly .....');
    } catch (error) {
        res.send('data not inserted.....');
        if(error.code == 'ER_DUP_ENTRY'){
            res.send('you can not creat with this account ...')
        }else{
            console.log(error);
        }
    }
})
// all data read
app.get('/show',async(req,res)=>{
    try {
        let data=await knex.from('students').select();
        res.send(data)
    } catch (error) {
        res.send('there is error ')
    }
})
// only id data read
app.get('/showsingledata/:id',async(req,res)=>{
    try {
        let data=await knex('students').where({id:req.params.id});
        if(data != 0){
            res.send(data)
        }else{
            res.send('sorry data not fond ')
        }
    } catch (error) {
        res.send('there is error ')
    }
})
// how to update data from id 
app.put('/update/:id',async(req,res)=>{
    try {
        let data=await knex('students').where({id:req.params.id}).update(req.body);
        if(data!=0){
            res.send({message:'user data update successfully',status:req.body})
        }else{
            res.send('data not updated ;')
        }
    } catch (error) {
        res.send(error.message)
    }
})
// how to delete id data 
app.delete('/delete/:id',async(req,res)=>{
    try {
        let data=await knex('students').where({id:req.params.id}).delete(req.body);
        if(data!=0){
            res.send('data delete successfully.... ')
        }else{
            res.send('data not found.....')
        }
    } catch (error) {
        res.send(error.message)
    }
})
// how to delete all data 
app.delete('/alldatadelete',async(req,res)=>{
    try {
        let data=await knex('students').truncate();
        let info=await knex.from('students').select();
        if(info==0){
            res.send('all data deleted ;')
        }
    } catch (error) {
        res.send(error.message)
    }
})
app.listen(port,()=>{
    console.log(`server runing at http://localhost:$(port)`);
})