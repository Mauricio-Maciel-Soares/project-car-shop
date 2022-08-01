import express from 'express';
import 'express-async-errors';
import carRouter from './routes/carsRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(errorHandler);

export default app;
