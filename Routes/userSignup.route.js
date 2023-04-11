const express = require("express");
const {UserModel} = require("../Models/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserRouter = express.Router();

//------------------------------------   Register ----------------------------------//


UserRouter.post("/signup", async(req,res)=>{
    const {email,password} = req.body;
try {
    bcrypt.hash(password, 5, async(err, secure_pass)=> {
       if(err){
         res.send({"msg":"Please enter strong password"});
       }
       else{
        const user = new UserModel({email,password:secure_pass});
          await user.save();
          res.send({"msg":"user registered successfully"});
       }
    });
} catch (error) {
    res.send({"msg":error.message});
}

})

//------------------------------------   Login ----------------------------------//


UserRouter.post("/login", async(req,res)=>{
  const {email,password} = req.body;
  try {
    const user = await UserModel.find({email});
    if(user.length>0){
      bcrypt.compare(password, user[0].password, (err, result)=>{
        if(result){
          const token = jwt.sign({userID:user[0]._id}, "harsh");
          res.send({"msg":"Login Successful",token:token})
        }
        else{
          res.send({"msg":"Invalid Credentials"});
        }
    });
    }
    else{
      res.send({"msg":"Invalid Credentials"});
    }
  } catch (error) {
     res.send({"msg":error.message});
  }
 
})

module.exports = {UserRouter}