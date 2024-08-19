const Task = require('../model/task'); // Ensure this path is correct

const inserttask = async (req, res) => {
  try {
    const inputData = req.body;
    const task = new Task(inputData);
    await task.save();
    res.status(201).send({ message: 'Task Registered Successfully' });
  } catch (error) {
    console.error('Error registering task:', error);
    res.status(500).send({ error: error.message });
  }
};

const gettasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send({ error: error.message });
  }
};

const updatetask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedData = req.body;
    const task = await Task.findByIdAndUpdate(taskId, updatedData, { new: true,  runValidators: true });
    res.status(200).send(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).send({ error: error.message });
  }
};

const deletetask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.status(200).send({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = { inserttask, gettasks, updatetask, deletetask };
