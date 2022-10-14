import { Sequelize } from "sequelize";

const db = new Sequelize('inventory', 'root', '!Love2code', {
    host: "localhost",
    dialect: "mysql"
});

export default db;