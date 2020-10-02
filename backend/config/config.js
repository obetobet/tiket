const QueryBuilder = require('node-querybuilder');
const settings = {
    host: 'localhost',
    database: 'tiket_pensi',
    user: 'rooot',
    password: 'dap123'
};
const pool = new QueryBuilder(settings, 'mysql', 'pool');