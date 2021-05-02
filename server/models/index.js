"use strict";

// const path = require("path");
// const Sequelize = require("sequelize");

// const env = process.env.NODE_ENV || "development";
// const config = require(path.join(__dirname, "..", "config", "db.json"))[env];
// const db = {};

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// let sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config,
//   {
//     define: {
//       charset: "utf8",
//       collate: "utf8_general_ci",
//     },
//   }
// );

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });

db.Admin = require("./admin")(sequelize, Sequelize);
db.Board = require("./board")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);
db.Article = require("./article")(sequelize, Sequelize);

db.User.belongsToMany(db.Article, {
  through: "article_writer",
  foreignKey: "article_id",
});
db.Article.belongsToMany(db.User, {
  through: "article_writer",
  foreignKey: "user_id",
});


db.secret = "(9*)5$&!3%^0%^@@2$1!#5@2!4";
module.exports = db;
