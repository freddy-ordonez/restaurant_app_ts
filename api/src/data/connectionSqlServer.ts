import { Sequelize } from "sequelize";

const database = process.env.DATA_BASE ?? "";
const user = process.env.USER_DATA_BASE ?? "";
const password = process.env.PASSWORD_DATA_BASE ?? "";

export const sequelize = new Sequelize(database, user, password, {
  dialect: "mssql",
  host: "localhost",
});


