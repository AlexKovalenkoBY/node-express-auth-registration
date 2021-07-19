'use strict';
const dbConfig = require("../db/mysql_Config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.PPO = require("../models/ppo")(sequelize, Sequelize);
//db.USERS = require("../models/user")(sequelize, Sequelize);
db.postSchema = require("../models/post")(sequelize, Sequelize);

module.exports = db;
