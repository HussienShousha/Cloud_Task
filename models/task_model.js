const {tasksReference} = require('../config/firebase');

class taskModel {

    async getAllTasks() {
        const snapshot = await tasksReference.orderByChild('createdAt').once('value');
        const tasks = [];

        snapshot.forEach(childSnapshot => {
            tasks.push({id: childSnapshot.key, ...childSnapshot.val()});
        })
        
        return tasks.reverse();
    }




    async addTask(taskName) {
       const newTask = await tasksReference.push({
           name: taskName,
           status: 'open',
           createdAt: Date.now()
       });

       return {
              id: newTask.key,
              name: newTask.name,
              status: newTask.status,
              createdAt: newTask.createdAt
       }

    }


    async updateTaskStatus(taskId, newStatus) {

        await tasksReference.child(taskId).update(
            {
                status: newStatus
            });
    }

    async deleteTask(taskId) {
        await tasksReference.child(taskId).remove();
    }



}
module.exports = new taskModel();
