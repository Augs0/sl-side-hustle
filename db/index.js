const mongoose = require('mongoose');

const connection = () => {
  const ENV = process.env.NODE_ENV || 'development';
  
  require('dotenv').config({
    path: `${__dirname}/../.env.${ENV}`
  });
  
  
  if (!process.env.uri) {
    throw new Error('URI not set');
  };
  
  mongoose.connect(process.env.uri, {dbName: 'nc-hobbies'});
}

module.exports = connection;