const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskhead: { type: String, required: true },
  taskdescription: { type: String, required: true },
  taskdeadline: { type: Date, required: true },
  status: { type: String, default: 'to-do' }, // Added status field
});

const Task = mongoose.model('Task', taskSchema, 'task');

module.exports = Task;
