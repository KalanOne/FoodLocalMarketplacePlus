import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor } from "../middleware/session";

import { createProducto, getProductos, putProducto, delProducto } from "../controllers/productos.controller";
import {
  createProductoRules,
  getProductoRules,
  updateProductoRules,
  deleteProductoRules,
} from "../middleware/validator/productos.rules";

const router = Router();

// Para crear productos
router.post("/", checkJwt, checkProveedor, createProductoRules, validate, createProducto);

// Para obtener productos de un proveedor
router.get("/:email", getProductoRules, validate, getProductos);

// Para actualizar productos
router.put("/:id", checkJwt, checkProveedor, updateProductoRules, validate, putProducto);

// Para eliminar productos
router.delete("/:id", checkJwt, checkProveedor, deleteProductoRules, validate, delProducto);

export default router;
