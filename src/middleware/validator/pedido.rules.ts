import { body, param } from "express-validator";
import { db } from "../../utils/db";

export const createPedidoRules = [
  body("proveedores").isArray().withMessage("El campo proveedores debe contener un arreglo"),
  body("proveedores.*.idProveedor").custom(async (value) => {
    const proveedor = await db.proveedor.findUnique({
      where: {
        email: value,
      },
    });
    if (!proveedor) {
      throw new Error("El proveedor no existe");
    }
  }),
  body("productos").isArray().withMessage("El campo productos debe contener un arreglo"),
  body("productos.*.idProducto").isInt().withMessage("El id del producto debe ser un numero entero"),
  body("productos.*.precio").isFloat().withMessage("El precio debe ser un numero"),
  body("productos.*.cantidad").isFloat().withMessage("La cantidad debe ser un numero"),
  body("productos.*.idProducto").custom(async (value) => {
    const producto = await db.producto.findUnique({
      where: {
        id: value,
      },
    });
    if (!producto) {
      throw new Error("El producto no existe");
    }
  }),
  body("pagado").isBoolean().withMessage("El campo pagado debe ser un booleano"),
];

export const updateEstadoRules = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  param("id").custom(async (value) => {
    const pedido = await db.pedido.findUnique({
      where: {
        id: parseInt(value),
      },
    });
    if (!pedido) {
      throw new Error("El pedido no existe");
    }
  }),
  body("estado").custom((value) => {
    switch (value) {
      case "enviado":
        return true;
      case "enReparto":
        return true;
      case "entregado":
        return true;
      default:
        throw new Error("El estado no es valido");
    }
  }),
];

export const proveedorRules = [
  body("idProveedor").isEmail().withMessage("El id del proveedor debe ser un email"),
  body("idProveedor").custom(async (value) => {
    const proveedor = await db.proveedor.findUnique({
      where: {
        email: value,
      },
    });
    if (!proveedor) {
      throw new Error("El proveedor no existe");
    }
  }),
];
