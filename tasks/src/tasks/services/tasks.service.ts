import { Task } from "../model/tasks.model";

export default class TaskService {
    create(task: Omit<string, any>) {
        return Task.create(task);
    }

    getAll() {
        return Task.findAll();
    }

    getById(id: number) {
        return Task.findByPk(id);
    }

    update(id: number, task: Omit<string, any>) {
        return Task.update(task, { where: { id } });
    }

    delete(id: number) {
        return Task.destroy({ where: { id } });
    }

    restore(id: number) {
        return Task.restore({ where: { id } });
    }
}