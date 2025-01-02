var express =require('express')
app=express()
const PORT =1234;
app.get('/',(req,res)=>{
    res.json('Optimus Prime : Attention Autobots, Transform and Roll Out')
})
app.get('/json',(req,res)=>{
    res.json({name:'Optimus Prime',quote:'Freedom is the right of all sentient beings'})
})
app.get('/static',(req,res)=>{
    res.sendFile('index.html')
})
app.listen(PORT,()=>{
    console.log('Backend Server Started')
})