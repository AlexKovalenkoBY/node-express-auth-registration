// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         min: 8,
//         max: 255
//     },
//     email: {
//         type: String,
//         required: true,
//         min: 8,
//         max: 255
//     },
//     password: {
//         type: String,
//         required: true,
//         min: 8,
//         max: 1024
//     },

// }, { timestamps: true });

// module.exports = mongoose.model('users', userSchema);
'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            required: true,
            min: 8,
            max: 255
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            min: 8,
            max: 255
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            min: 8,
            max: 1024
        }
////////////////////////////////////////////////////////////////////////////////////////////




        // firstName: {
        //   type: DataTypes.STRING,
        //   allowNull: false
        // },
        // lastName: {
        //   type: DataTypes.STRING,
        //   allowNull: false
        // },
        // email: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        //   unique: true
        // }, 
        // login: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        //   unique: true
        // }, 
        // role: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        //   unique: true
        // }, 
    }, { timestamps: true });

    return User;
};
