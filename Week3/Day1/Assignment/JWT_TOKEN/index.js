const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();

app.post('/api',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message:"hello",
                authData
            })}})})

app.post('/api/login',(req,res)=>{
    const user={
        id:1,
        username:"yashpal",
        password:"1234"
    }
jwt.sign({user},'secretkey',(err,token)=>{
    res.json({
        token
    })
})
})

//verify Token
function verifyToken(req,res,next){
    console.log(req.headers)
    // console.log(req.headers['authorization'])
    //Get auth header value
    const bearerHeader=req.headers.authorization;
    if(typeof bearerHeader !=="undefined"){

const bearer=bearerHeader.split(' ');
console.log(bearer);

const bearerToken=bearer[1];
req.token=bearerToken;
next();
    }
    else{
        res.sendStatus(403);
    }

}

app.listen(5000,()=>console.log("listen on 5000"));