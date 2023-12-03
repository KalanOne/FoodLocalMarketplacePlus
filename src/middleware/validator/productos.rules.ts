import { body, param } from "express-validator";
import { db } from "../../utils/db";

export const createProductoRules = [
  body("nombre").notEmpty().isString().withMessage("El nombre debe ser una cadena de caracteres"),
  body("nombre").isLength({ min: 1, max: 64 }).withMessage("El nombre debe tener entre 1 y 64 caracteres"),
  body("descripcion").notEmpty().isString().withMessage("La descripcion debe ser una cadena de caracteres"),
  body("descripcion").isLength({ min: 1, max: 256 }).withMessage("La descripcion debe tener entre 1 y 256 caracteres"),
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

export const getProductoResenasRules = [
  param("idProducto").isNumeric(),
  param("idProducto").custom((value: string) => {
    return db.producto
      .findUnique({
        where: {
          id: parseInt(value),
        },
      })
      .then((producto) => {
        if (!producto) {
          throw new Error("El producto no existe");
        }
      });
  }),
];

export const updateProductoRules = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  param("id").custom((value: string, { req }) => {
    return db.producto
      .findUnique({
        where: {
          id: parseInt(value),
        },
      })
      .then((producto) => {
        if (!producto) {
          throw new Error("El id del producto no existe");
        } else if (producto.idProveedor != req.body.idProveedor) {
          throw new Error("El producto no pertenece al proveedor");
        }
      });
  }),
  body("nombre").isString().withMessage("El nombre debe ser una cadena de caracteres"),
  body("nombre").isLength({ min: 1, max: 64 }).withMessage("El nombre debe tener entre 1 y 64 caracteres"),
  body("descripcion").isString().withMessage("La descripcion debe ser una cadena de caracteres"),
  body("descripcion").isLength({ min: 1, max: 256 }).withMessage("La descripcion debe tener entre 1 y 256 caracteres"),
  body("precio")
    .isFloat()
    .withMessage("El precio debe ser un numero decimal")
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
];

export const deleteProductoRules = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  param("id").custom((value: string, { req }) => {
    return db.producto
      .findUnique({
        where: {
          id: parseInt(value),
        },
      })
      .then((producto) => {
        if (!producto) {
          throw new Error("El id del producto no existe");
        } else if (producto.idProveedor != req.body.idProveedor) {
          throw new Error("El producto no pertenece al proveedor");
        }
      });
  }),
];

export const getProductoRules = [
  param("email").isEmail().withMessage("El email debe ser un correo válido"),
  param("email").custom((value: string) => {
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
