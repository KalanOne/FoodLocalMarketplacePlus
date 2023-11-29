import { body, param } from "express-validator";
import { db } from "../../utils/db";

export const createResenaProductoRules = [
  body("resena").notEmpty().isString(),
  body("idProductosPedido").notEmpty().isNumeric(),
  body("calificacion")
    .notEmpty()
    .isInt()
    .custom((value: number) => {
      if (value < 0) {
        throw new Error("La calificacion no puede ser negativa");
      } else {
        return true;
      }
    }),
  body("idUsuario")
    .notEmpty()
    .isString()
    .custom((value: string) => {
      return db.usuario
        .findUnique({
          where: {
            email: value,
          },
        })
        .then((usuario) => {
          if (!usuario) {
            throw new Error("El usuario no existe");
          }
        });
    }),
  body("idProducto")
    .notEmpty()
    .isInt()
    .custom((value: number) => {
      return db.producto
        .findUnique({
          where: {
            id: value,
          },
        })
        .then((producto) => {
          if (!producto) {
            throw new Error("El producto no existe");
          }
        });
    }),
];

export const createResenaProveedorRules = [
  body("resena").notEmpty().isString(),
  body("idPedidoProveedor").notEmpty().isNumeric(),
  body("calificacion")
    .notEmpty()
    .isInt()
    .custom((value: number) => {
      if (value < 0) {
        throw new Error("La calificacion no puede ser negativa");
      } else {
        return true;
      }
    }),
  body("idUsuario")
    .notEmpty()
    .isString()
    .custom((value: string) => {
      return db.usuario
        .findUnique({
          where: {
            email: value,
          },
        })
        .then((usuario) => {
          if (!usuario) {
            throw new Error("El usuario no existe");
          }
        });
    }),
  body("idProveedor")
    .notEmpty()
    .isString()
    .custom((value: string) => {
      return db.proveedor
        .findUnique({
          where: {
            email: value,
          },
        })
        .then((proveedor) => {
          if (!proveedor) {
            throw new Error("El proveedor no existe");
          }
        });
    }),
];
