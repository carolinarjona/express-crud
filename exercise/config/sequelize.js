const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const dbCreated = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

dbCreated.sync().then(() => console.log("Everything is fine!"));

module.exports = dbCreated;
