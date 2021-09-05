const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoModel = new Schema({
    title:String,
    completed: {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("todoModel",todoModel);