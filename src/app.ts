import express from 'express';
import carRouter from './routes/carsRoutes';
import errorHandler from './middlewares/error';
import 'express-async-errors';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(errorHandler);

export default app;
