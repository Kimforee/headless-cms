const sequelize = require('../db');
const Entity = require('./entity');

const models = {
  Entity
};

models.sequelize = sequelize;
models.Sequelize = sequelize.Sequelize;

module.exports = models;
