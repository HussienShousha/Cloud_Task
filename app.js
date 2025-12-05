const express = require('express');
const bodyParser = require('body-parser');


const taskRoutes = require('./routes/task_routes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.use('/api/tasks', taskRoutes);




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

