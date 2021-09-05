const todoModel = require("../models/todo.model");

module.exports.getTodo=(req,res)=>{
    todoModel.find({},(error,todos)=>{
        res.send(todos);
    })

}

module.exports.postTodo=(req,res)=>{
  
    todoModel.create(req.body,(error,todo)=>{
        res.send(todo);
    })

}

module.exports.deleteTodo=(req,res)=>{
    const id = req.params.id;
    todoModel.findByIdAndDelete(id,(error,todo)=>{
        res.send(todo);
    })

}

module.exports.putTodo= (req,res)=>{
    const id = req.params.id;  
    todoModel.findByIdAndUpdate(id,req.body,(error,todo)=>{
        res.send(todo);
    })

}
