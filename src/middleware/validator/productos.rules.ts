import { body, param } from "express-validator";
import { db } from "../../utils/db";

export const createProductoRules = [
  body("nombre").notEmpty().isString(),
  body("descripcion").notEmpty().isString(),
  body("precio")
    .notEmpty()
    .isFloat()
    .custom((value: number) => {
      if (value < 0) {
        throw new Error("El precio no puede ser negativo");
      } else {
        return true;
      }
    }),
  body("tipo")
    .notEmpty()
    .isString()
    .custom((value: string) => {
      if (value == "producto") {
        return true;
      } else if (value == "platillo") {
        return true;
      } else {
        throw new Error("El tipo de producto no es valido");
      }
    }),
  body("idCategoria")
    .notEmpty()
    .isInt()
    .custom((value: number) => {
      return db.categoria
        .findUnique({
          where: {
            id: value,
          },
        })
        .then((categoria) => {
          if (!categoria) {
            throw new Error("La categoria no existe");
          }
        });
    }),
  body("imagen").notEmpty().isString(),
];

export const getProductoRules = [param("idProducto").isNumeric()];