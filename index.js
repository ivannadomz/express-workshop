const express =require('express');
const dotenv=require('dotenv');
const app=express();

dotenv.config();

const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{

    res.send(`hello world from Port ${port}`);
    console.log(process.env);
})

app.get('/myname',(req,res)=>{

    res.send(`hello world ! My name is Ivanna `);
    console.log(process.env);
})

app.listen(3000,()=>{
    console.info(`Server is running on port ${port}`);
})


