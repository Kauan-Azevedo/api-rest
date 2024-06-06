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
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 5,
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
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