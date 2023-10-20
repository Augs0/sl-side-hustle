const data = require('./data/dev-data');
const seed = require('./seed');
const mongoose = require('mongoose');
const connection = require('../db/index')

connection();

seed(data).then(() => mongoose.connection.close());