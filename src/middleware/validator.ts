import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { handleHttp } from "../utils/error.handle";

export const validate = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return handleHttp(res, errors.array()[0].msg, errors.array());
  }

  next();
};
