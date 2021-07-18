'use strict';

const Sequelize = require('sequelize');
const UserModel = require('../models/User.js');
// const PpoModel = require('../models/ppo.js');
const PpoModel = require('../models/Post');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  store: ':memory'
/*
  host: '8-aris-bs.ds.bapb.internal',
  user: 'alex',
  password: 'Manager98_',
  database: 'PPO'
*/
});

const USERS = UserModel(sequelize, Sequelize)
const Ppo = PpoModel(sequelize, Sequelize)


module.exports = {
  sequelize,
  Sequelize,
  USERS,
  Ppo
}