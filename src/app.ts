import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from 'helmet';

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', require('./users/users.route').default);

export default app