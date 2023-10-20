// const data = require('./data/dev-data');
const seed = require('./seed');

const client = require('./');

seed(data).then(() => client.close());