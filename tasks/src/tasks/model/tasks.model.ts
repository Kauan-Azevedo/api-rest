import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../db/db.config";

class Task extends Model {}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 5,
                max: 32
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 5,
            }
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: "Task",
        paranoid: true,
    }
)

export { Task };