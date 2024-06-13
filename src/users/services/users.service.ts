import { User } from "../model/users.model";

export default class UserService {
    create(user: Omit<string, any>) {
        return User.create(user);
    }

    getAll() {
        return User.findAll({
            attributes: { 
                exclude: ['password', "deletedAt"],
            }
        });
    }

    getById(id: number) {
        return User.findByPk(id, {
            attributes: {
                exclude: ['password'],
            }
        });
    }

    update(id: number, task: Omit<string, any>) {
        return User.update(task, { where: { id }});
    }

    delete(id: number) {
        return User.destroy({ where: { id } });
    }

    restore(id: number) {
        return User.destroy({ where: { id } });
    }
}