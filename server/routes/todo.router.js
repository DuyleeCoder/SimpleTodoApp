const express= require("express");
const todoControllers = require("../controllers/todo.controller");

const router = express.Router();

router.get("/getTodo",todoControllers.getTodo);

router.post("/postTodo",todoControllers.postTodo);

router.delete("/deleteTodo/:id",todoControllers.deleteTodo);

router.put("/putTodo/:id",todoControllers.putTodo);


module.exports= router;