import knex from 'knex';
import path from 'path';

const connection = knex({ 
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
  
  pool: {
    min: 2,
    max: 6,
    acquireTimeoutMillis: 5000,
    idleTimeoutMillis: 5000,
    reapIntervalMillis: 1000,
  },
}); 

export default connection;