import express, { Express } from 'express';
import router from './src/routes';
import { DB_CLIENT, PG_CONNECTION_STRING, PG_SEARCH_PATH, PORT } from './environment';
import { initializeDatabase } from './infra';

initializeDatabase(DB_CLIENT, PG_CONNECTION_STRING, [PG_SEARCH_PATH]);

const app: Express = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
