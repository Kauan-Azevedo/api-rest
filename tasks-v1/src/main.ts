import express, { Request, Response } from 'express';
import { Task } from './tasks/model/tasks.model';
import { sequelize } from './tasks/db/db.config';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


sequelize.sync().then(() => {
    console.log('Database & tables created!');
});


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Tasks API!');
});

app.get('/tasks', async (req: Request, res: Response) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

app.post('/tasks', async (req: Request, res: Response) => {
    const task = await Task.create(req.body);
    res.json(task);
});

app.get('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    res.json(task);
});

app.put('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.update(req.body, { where: { id } });
    res.json(task);
});

app.delete('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`🚀🚀 Server is running at http://localhost:${port} 🚀🚀`);
});