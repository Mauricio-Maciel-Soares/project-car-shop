import { z } from 'zod';

const carZodSchema = z.object({
  doorsQty: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  }).int()
    .min(2, { message: 'Value should be greater than or equal to 2' })
    .max(4, { message: 'Value should be less than or equal to 4' }),
  seatsQty: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  }).int()
    .min(2, { message: 'Value should be greater than or equal to 2' })
    .max(7, { message: 'Value should be less than or equal to 7' }),
});

export default carZodSchema;
