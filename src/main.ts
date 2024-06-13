import express, { Request, Response } from 'express';
import { sequelize } from './db/db.config';
import bodyParser from 'body-parser';
import cors from "cors";
import morgan from 'morgan';

import TaskService from './tasks/services/tasks.service';
import TaskController from './tasks/controller/tasks.controller';
import UserService from './users/services/users.service';
import UserController from './users/controller/users.controller';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

sequelize.sync();

const taskService = new TaskService();
const taskController = new TaskController(taskService);

const userService = new UserService();
const userController = new UserController(userService)

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Tasks API!');
});

app.get('/tasks', (req, res) => taskController.getAll(req, res));
app.post('/tasks', (req, res) => taskController.create(req, res));
app.post("/task/restore/:id", (req, res) => taskController.restoreById(req, res));
app.post("/task/assigned/:id", (req, res) => taskController.GetByAssingedUser(req, res));
app.get('/tasks/:id', (req, res) => taskController.getById(req, res));
app.put('/tasks/:id', (req, res) => taskController.update(req, res));
app.delete('/tasks/:id', (req, res) => taskController.delete(req, res));

app.get('/users', (req, res) => userController.getAll(req, res));
app.post('/users', (req, res) => userController.create(req, res));
app.post('/users/restore/:id', (req, res) => userController.restoreById(req, res));
app.get('/users/:id', (req, res) => userController.getById(req, res));
app.put('/users/:id', (req, res) => userController.update(req, res));
app.delete('/users/:id', (req, res) => userController.delete(req, res));

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port} 🚀`);
});
