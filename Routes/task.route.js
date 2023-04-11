const express = require("express");
const {TaskModel} = require("../Models/task.model");
const {BoardModel} = require("../Models/board.model");

const TaskRouter = express.Router();

TaskRouter.get("/:id", async(req,res)=>{
  const boardID = req.params.id;
 
    try {
        const board = await TaskModel.find({boardID});
         res.send(board)
    } catch (error) {
        res.send({"msg":error.message});
    }
})
//======================================================================//

TaskRouter.post("/create", async(req,res)=>{
    const {title, description,subtask, status,boardName} = req.body;
      
    try {

        const task = new TaskModel({title,description,status, subtask, boardID :boardName });
         await task.save()
         res.send({"msg":"Task Created Successfully"});
    } catch (error) {
        res.send({"msg":error.message});
    }
})

module.exports = {TaskRouter}