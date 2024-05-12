import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validacionSchemas = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isSchemaValid = validationResult(req);
  if (!isSchemaValid.isEmpty())
    return res.status(400).send({ message: isSchemaValid.array() });
  next()
};
