const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const sqlite = require('sqlite3');
const dotenv = require('dotenv');

// CORS Check
app.use(cors());

// Import Routes
const authRoute = require('./routes/auth');
const pathRoute = require('./routes/post');


dotenv.config();

//Connect to DB
// mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('DB connected');
// });

var db = require('./db/index_sqlite');
db.sequelize.sync({ force: true }).then(async () => {
    db.USERS.bulkCreate([{
        email: "n.sergel@belapb.by",
        login: "8_servel_108",
        role: "user"
    }, {
        email: "A.kovalenkoa@belapb.by",
        login: "8_kovalenko_604",
        role: "admin"
    }], { individualHooks: true }).then(() => {
        console.log('notes in table USERS  created');
    }).catch((err) => {
        console.log('failed to create notes');
        console.log(err);
    }).finally(() => {
        console.log('данные в таблицу вроде как загружены..');
    });
});
db.sequelize.authenticate().then(() => {
    console.log('Authentification success ');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
}).finally(() => {
    // db.sequelize.close();
});


//  Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api/', authRoute);
app.use('/api/posts/', pathRoute);



app.listen(8887, () => console.log('Server started on port 8887'));