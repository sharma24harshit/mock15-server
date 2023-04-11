const mongoose  =require("mongoose");

const subtaskSchema = mongoose.Schema({
       title : {type:String, required:true},
       isCompleted : {type:Boolean, required:true}
   },{
    versionKey:false
});

const SubtaskModel = mongoose.model("subtask",subtaskSchema);


module.exports = {SubtaskModel}