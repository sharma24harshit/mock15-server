const mongoose  =require("mongoose");

const boardSchema = mongoose.Schema({
     name: {type:String, required:true},
     
   },{
    versionKey:false
});

const BoardModel = mongoose.model("board",boardSchema);


module.exports = {BoardModel}