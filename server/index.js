const express= require("express");
const bodyParser = require("body-parser")
const cors= require("cors");
const mongoose= require("mongoose");
const todoRouter = require("./routes/todo.router");
const CUSTOM_PORT =3009;
const app=express();
mongoose.connect("mongodb://localhost/my_database",{
    useNewUrlParser:true
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/todos",todoRouter);

app.listen(CUSTOM_PORT,()=>{
    console.log("Server running");
})