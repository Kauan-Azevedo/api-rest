import express, { Request, Response } from 'express';
import { sequelize } from './db/db.config';
import bodyParser from 'body-parser';
import cors from "cors";
import TaskService from './tasks/services/tasks.service';
import TaskController from './tasks/controller/tasks.controller';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

sequelize.sync().then(() => {
    console.log('Database & tables synced!');
});

const taskService = new TaskService();
const taskController = new TaskController(taskService);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Tasks API!');
});

app.get('/tasks', (req, res) => taskController.getAll(req, res));
app.post('/tasks', (req, res) => taskController.create(req, res));
app.post("/task/restore/:id", (req, res) => taskController.restoreById(req, res));
app.get('/tasks/:id', (req, res) => taskController.getById(req, res));
app.put('/tasks/:id', (req, res) => taskController.update(req, res));
app.delete('/tasks/:id', (req, res) => taskController.delete(req, res));

app.listen(port, () => {
    console.log(`🚀🚀 Server is running at http://localhost:${port} 🚀🚀`);
});
