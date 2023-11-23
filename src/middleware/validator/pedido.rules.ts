import { body, param } from "express-validator";
import { db } from "../../utils/db";

export const createPredidoRules = [
  body("idUsuario").notEmpty().isString(),
  body("pagado").notEmpty().isBoolean(),
];