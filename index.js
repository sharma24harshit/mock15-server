const express = require("express");
const {connection} = require("./db");
const app = express();
require("dotenv").config();
const {UserRouter} = require("./Routes/userSignup.route");
const {Authenticate} = require("./Middleware/Auth");
const {BoardRouter} = require("./Routes/board.route");
const {TaskRouter} = require("./Routes/task.route");
const cors = require("cors");

app.use(cors({origin:"*"}));

app.use(express.json());
app.use("/user", UserRouter);
app.use(Authenticate)
app.use("/board",BoardRouter);
app.use("/task",TaskRouter);

app.get("/",(req,res)=>{
    res.send("Homepage of KanbanApp");
})

app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("connected to db") 
    } catch (error) {
        console.log(error);
    }
    console.log("connected at port")
})