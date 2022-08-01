import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';
import carZodSchema from '../schemas/carSchema';

// https://zod.dev/?id=extend

const carExtendsVehicleZodSchema = carZodSchema.merge(vehicleZodSchema); 
export type ICar = z.infer<typeof carExtendsVehicleZodSchema>;

export { carExtendsVehicleZodSchema };
