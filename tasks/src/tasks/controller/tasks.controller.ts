import { Request, Response } from "express";
import TaskService from "../services/tasks.service";
export default class TaskController {
    constructor(private taskService: TaskService) {}

    async create(req: Request, res: Response) {
        const task = await this.taskService.create(req.body);

        return res.status(201).json(task);
    }

    async getAll(req: Request, res: Response) {
        try {
            const tasks = await this.taskService.getAll();
    
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await this.taskService.getById(Number(id));

            return res.status(200).json(task);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await this.taskService.update(Number(id), req.body);
    
            return res.status(200).json(task);
        } catch(error: any ) {
            return res.status(500).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.taskService.delete(Number(id));
    
            return res.status(204).json();
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async restoreById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.taskService.restore(Number(id));

            return res.status(200).json();
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

