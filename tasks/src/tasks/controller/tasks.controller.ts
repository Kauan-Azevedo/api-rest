import { Request, Response } from "express";
import TaskService from "../services/tasks.service";


export default class TaskController {
    constructor(private taskService: TaskService) { }

    async create(req: Request, res: Response) {
        const task = await this.taskService.create(req.body);

        return res.json(task);
    }

    async getAll(req: Request, res: Response) {
        const tasks = await this.taskService.getAll();

        return res.json(tasks);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const task = await this.taskService.getById(Number(id));

        return res.json(task);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const task = await this.taskService.update(Number(id), req.body);

        return res.json(task);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await this.taskService.delete(Number(id));

        return res.status(204).send();
    }
}