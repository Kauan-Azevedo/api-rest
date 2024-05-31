import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5432/tasks_api");

export { sequelize };