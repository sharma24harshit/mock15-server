const express = require("express");
const {BoardModel} = require("../Models/board.model");


const BoardRouter = express.Router();

BoardRouter.get("/", async(req,res)=>{
  
    try {
        const board = await BoardModel.find();
         res.send(board)
    } catch (error) {
        res.send({"msg":error.message});
    }
})
//======================================================================//
BoardRouter.post("/create", async(req,res)=>{
    const {name} = req.body;
  
    try {
        const board = new BoardModel({name});
         await board.save()
         res.send({"msg":"Board Created Successfully"})
    } catch (error) {
        res.send({"msg":error.message});
    }
})

module.exports = {BoardRouter}