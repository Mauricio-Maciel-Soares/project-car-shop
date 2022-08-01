import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model value is required',
    invalid_type_error: 'Value must be a string',
  }).min(3, { message: 'Value should be greater than or equal to 3' }),

  year: z.number({
    required_error: 'Year value is required',
    invalid_type_error: 'Value must be a number',
  }).int()
    .gt(1900, { message: 'Value should be greater than or equal to 1900' })
    .lte(2022, { message: 'Value should be less than or equal to 2022' }),

  color: z.string({
    required_error: 'Color value is required',
    invalid_type_error: 'Value must be a string',
  }).min(3, { message: 'Value should be greater than or equal to 3' }),

  status: z.boolean().optional(),

  buyValue: z.number({
    required_error: 'Buy value is required',
    invalid_type_error: 'Value must be a number',
  }).int({ message: 'The value must be an integer' }),
});

export default vehicleZodSchema;
