'use strict';
const dbConfig = require("../db/sqlite_config");
const Sequelize = require('sequelize');
const UserModel = require('../models/User.js');
const PpoModel = require('../models/ppo.js');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  store: ':memory'
  //store: './mysqlite.db'

});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.PPO = require("../models/ppo")(sequelize, Sequelize);
db.USERS = require("../models/user")(sequelize, Sequelize);
db.postSchema = require("../models/post")(sequelize, Sequelize);

module.exports = db;
