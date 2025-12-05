const taskModel = require('../models/task_model');


const getAllTasks = async (req, res) => {


    try {

        const tasks = await taskModel.getAllTasks();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
 

}

const addTask = async (req, res) => {

    const {taskName} = req.body;
    try {
        const newTask = await taskModel.addTask(taskName);
        res.status(201).json(newTask);
    }

    catch (error) {
        res.status(500).json({error: error.message});
    }


}


const updateTaskStatus = async (req, res) => {

    const {taskId} = req.params;
    const {newStatus} = req.body;

    try {
        await taskModel.updateTaskStatus(taskId, newStatus);
        res.status(200).json({message: 'Task status updated successfully'});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteTask = async (req, res) => {

    const {taskId} = req.params;
    try {
        await taskModel.deleteTask(taskId);
        res.status(200).json({message: 'Task deleted successfully'});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllTasks,
    addTask,
    updateTaskStatus,
    deleteTask
}
