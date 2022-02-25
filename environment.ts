const {
  PORT = 3000,
  DB_CLIENT = 'pg',
  PG_CONNECTION_STRING = 'postgresql://inventory:inventory@localhost:5432/little-erp',
  PG_SEARCH_PATH = 'inventory',
} = process.env;

export { PORT, PG_CONNECTION_STRING, DB_CLIENT, PG_SEARCH_PATH };
