import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5432?schema=public/tasks_api", {
    logging: false,
    dialect: "postgres",
    define: {
        timestamps: true,
    },
});

export { sequelize };