

const allstudent=(req,res)=>{
        console.log(req.params);
        // res.send(`all new student ${req.params.id} and student name ${req.params.name}`)
        // ya yaise bhi likha sakte hai 
        const {id, name}=req.params;
        res.send(`student id ${id}. and student ${name}`);
}

const deletestudent=(req,res)=>{
        console.log(req.params);
        res.send(`student deleted ${req.params.id}`)
}

// export{allstudent, deletestudent }

module.exports={
    allstudent,deletestudent
}
