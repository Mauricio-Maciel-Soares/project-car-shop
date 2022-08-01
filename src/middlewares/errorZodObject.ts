import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidObject = (schema: ZodObject<any>) => (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const parsed = schema.safeParse(req.body);
  console.log(parsed);

  if (!parsed.success) throw parsed.error;
  next();
};

export default isValidObject;
