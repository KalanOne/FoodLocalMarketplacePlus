import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor, checkUser } from "../middleware/session";

import { getProveedorRules } from "../middleware/validator/proveedores.rules";
import { createResenaProductoRules } from "../middleware/validator/resenas.rules";
import {
  createProducto,
  getProductos,
  putProducto,
  delProducto,
  createResenaProducto,
  getProductoPerProveedor,
  getResenaPerProducto,
} from "../controllers/productos.controller";
import {
  createProductoRules,
  getProductoRules,
  getProductoResenasRules,
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

// Para obtener productos por proveedor
router.get("/:email", getProveedorRules, validate, getProductoPerProveedor);

// Para obtener reseñas
router.get("/resena/:idProducto", getProductoResenasRules, validate, getResenaPerProducto);

// Para crear reseñas
router.post("/resena", checkJwt, checkUser, createResenaProductoRules, validate, createResenaProducto);

export default router;
