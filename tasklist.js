const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskname : {
        type : String,
        required : true
    }
});

const Tasklist = mongoose.model('Tasklist', taskSchema);

module.exports = Tasklist;