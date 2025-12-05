const express = require('express');

const router = express.Router();
const taskController = require('../controllers/task_controller');


router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);

router.patch('/:taskId', taskController.updateTaskStatus);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;