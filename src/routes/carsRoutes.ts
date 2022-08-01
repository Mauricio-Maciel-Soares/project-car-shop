import { Router } from 'express';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';
import CarController from '../controllers/CarController';
import isValidObject from '../middlewares/errorZodObject';
import { carExtendsVehicleZodSchema } from '../interfaces/ICar';

const route = Router();
 
const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post(
  '/cars',
  isValidObject(carExtendsVehicleZodSchema),
  carController.create,
);

export default route;
