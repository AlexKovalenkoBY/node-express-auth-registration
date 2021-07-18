// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//     userId: {
//         type: Number,
//         required: true,
//         min: 8,
//         max: 255
//     },
//     id: {
//         type: Number,
//         required: true,
//         min: 8,
//         max: 255
//     },
//     title: {
//         type: String,
//         required: true,
//         min: 8,
//         max: 1024
//     },
//     body: {
//         type: String,
//         required: true,
//         min: 8,
//         max: 1024
//     },

// }, { timestamps: true });

// module.exports = mongoose.model('posts', postSchema);



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
    const postSchema = sequelize.define('postSchema', {
        userId: {
            type:  DataTypes.INTEGER,
            required: true,
            min: 8,
            max: 255
        },
        id: {
            type:  DataTypes.INTEGER,
            required: true,
            min: 8,
            max: 255, 
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            required: true,
            min: 8,
            max: 1024
        },
        body: {
            type: DataTypes.STRING,
            required: true,
            min: 8,
            max: 1024
        },

    }, { timestamps: true });
    return postSchema;
};
