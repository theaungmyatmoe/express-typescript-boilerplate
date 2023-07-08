import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import * as middlewares from './middlewares';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', require('./users/users.route').default);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;