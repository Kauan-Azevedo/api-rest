import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../db/db.config";

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(256),
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 4,
            },
            unique: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 6,
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING(256),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "User",
        paranoid: true,
    }
)

export { User };