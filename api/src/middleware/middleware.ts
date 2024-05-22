import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { verifyToken } from "../utils/jwt";

export const validationSchemas = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isSchemaValid = validationResult(req);
  if (!isSchemaValid.isEmpty())
    return res.status(400).send({ message: isSchemaValid.array() });
  next();
};

export const authorizationValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.get("Authorization") || "";

  const token = header.split(" ")[1];
  if (!token) return res.status(401).send({ message: "Token no provied" });
  const verify = verifyToken(token);
  if (!verify) return res.status(401).send({ message: "Token no valid" });
  next();
};
