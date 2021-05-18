const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required:true},
    duration: {type: Number, required:true},
    date: {type: Date, required: true},
    },{
        timestamps:true
    });

const Project = mongoose.model('project', projectSchema)

module.exports = Project