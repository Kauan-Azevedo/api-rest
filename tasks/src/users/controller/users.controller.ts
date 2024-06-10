import { Request, Response } from "express";
import UserService from "../services/users.service";

export default class UserController {
    constructor(private userService: UserService) {}

    async create(req: Request, res: Response) {
        const user = await this.userService.create(req.body);

        return res.status(201).json(user);
    }

    async getAll(req: Request, res: Response) {
        try {
            const users = await this.userService.getAll();
    
            return res.status(200).json(users);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.userService.getById(Number(id));

            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.userService.update(Number(id), req.body);
    
            return res.status(200).json(user);
        } catch(error: any ) {
            return res.status(500).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.userService.delete(Number(id));
    
            return res.status(204).json();
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async restoreById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.userService.restore(Number(id));

            return res.status(200).json();
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}