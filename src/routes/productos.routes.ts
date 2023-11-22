import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor, checkUser } from "../middleware/session";

import {
    getProductoPerProveedor, getResenaPerProducto
  } from "../controllers/productos.controller";
import { createProducto, createResenaProducto } from "../controllers/productos.controller";
import { createProductoRules, getProductoRules } from "../middleware/validator/productos.rules";
import { getProveedorRules } from "../middleware/validator/proveedores.rules";
import { createResenaProductoRules } from "../middleware/validator/resenas.rules";

const router = Router();

// Para crear productos
router.post("/", checkJwt, checkProveedor, createProductoRules, validate, createProducto);

// Para actualizar productos
// router.put("/:id", checkJwt, checkProveedor, updateProductoRules, validate, updateProducto);

// Para obtener productos por proveedor
router.get("/:email", getProveedorRules, validate, getProductoPerProveedor);

// Para obtener reseñas
router.get("/resena/:idProducto", getProductoRules, validate, getResenaPerProducto);

// Para crear reseñas
router.post("/resena/producto", checkJwt, checkUser, createResenaProductoRules, validate, createResenaProducto);

export default router;
