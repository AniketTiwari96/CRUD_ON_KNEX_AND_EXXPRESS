

const deletestudent=(req,res)=>{
    console.log(req.params);
    res.send(`student deleted ${req.params.id}`)
}

module.exports=deletestudent