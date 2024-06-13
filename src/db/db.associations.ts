import { Task } from "../tasks/model/tasks.model";
import { User } from "../users/model/users.model";

Task.belongsToMany(User, { through: 'TaskUser' });
User.hasMany(Task);