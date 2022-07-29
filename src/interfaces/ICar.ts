import { z } from 'zod';
import { IVehicle } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type Car = z.infer<typeof carZodSchema>;

export { carZodSchema };

export interface ICar extends Car, IVehicle{}