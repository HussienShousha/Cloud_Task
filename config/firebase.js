const admin = require('firebase-admin');
const serviceAccount = require('../task-tracker-162e0-firebase-adminsdk-fbsvc-d509e6d5f9.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://task-tracker-162e0-default-rtdb.firebaseio.com"
});

const db = admin.database();

const tasksReference = db.ref("tasks_db");

module.exports = {
    db,
    tasksReference
};