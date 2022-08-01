import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';

const isValidObject = (schema: ZodObject<any>) => (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const parsed = schema.safeParse(req.body);

  if (!parsed.success) throw parsed.error;
  next();
};

export default isValidObject;
