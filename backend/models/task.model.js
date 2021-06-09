const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId, required:true},
    name: {type: String, required: true},
    description: {type: String, required:true},
    urgency_level: {type: String, required:true},
    due_date: {type: Date, required: true},
    },{
        timestamps:true
    });

const Task = mongoose.model('task', taskSchema)

module.exports = Task