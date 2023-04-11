const express = require("express");
const jwt = require('jsonwebtoken');


const Authenticate = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
   const decoded = jwt.verify(token, 'harsh');
   if(decoded){
    const userId = decoded.userID;
    req.body.userID = userId; 
    next();
   }
   else{
    res.send({"msg":"Please Login first"});
   }
    }
    else{
        res.send({"msg":"Please Login first"});
    }
}

module.exports = {Authenticate}
