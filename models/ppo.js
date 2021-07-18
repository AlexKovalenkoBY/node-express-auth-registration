'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ppo = sequelize.define('ppos', {
    idbp: {
      type: DataTypes.INTEGER
    },
    idpp: {
      type: DataTypes.INTEGER
    },
    bpnum: {
      type: DataTypes.STRING
    },
    ppnum: {
      type: DataTypes.STRING
    },
    expert: {
      type: DataTypes.STRING
    },
    ca: {
      type: DataTypes.STRING
    },
    csbo: {
      type: DataTypes.STRING
    },
    rDmin: {
      type: DataTypes.STRING
    },
    rDreg: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
    user: {
      type: DataTypes.STRING
    },
    edited: {
      type: DataTypes.BOOLEAN
    }
  });

  return Ppo;
};
