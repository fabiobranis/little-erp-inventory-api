import express from 'express';
import router from './src/routes';
import { PORT } from './config';

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
