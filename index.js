const express=require('express');
const app=express();
const portfolioArr=['arduino','website','webApp'];
app.get('/',(req,res)=>{
        res.send('salom')
})
app.get('/portfolio',(req,res)=>{
        res.send()
})
app.get('/service',(req,res)=>{
        res.send('service sahifasi')
})
app.get('/portfolio/:id/:year/:month',(req,res)=>{
        //localhost:port/portfolio/1/2024/4 qilib ma`lumot http so'rov jo'natsak 
        //bizga {"id":"1","year":"2024","month":"12"} javob qaytaradi
        // const id=req.params.id;
        // res.send(req.params);
       // biz htpp so'rovda ? bilan quiery jo'natsak barcha quiry larni 
       //req.query bilan beramiz 
       res.send(req.query); //javob:{"name":"Ali"}
})
const port=process.env.PORT||5000;
app.listen(port,()=>{
        console.log(`${port} ishladi`);
})