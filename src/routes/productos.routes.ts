import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor } from "../middleware/session";

import {
    getProveedo,
    createProveedor,
    loginProveedor,
    getProveedores,
    getProveedoresTypeProveedor,
    getProveedoresTypeRestaurant,
  } from "../controllers/proveedores.controller";
import { createProducto } from "../controllers/productos.controller";
import { createProductoRules } from "../middleware/validator/productos.rules";
import { getProveedorRules } from "../middleware/validator/proveedores.rules";

const router = Router();

// Para crear productos
router.post("/", checkJwt, checkProveedor, createProductoRules, validate, createProducto);

// Para actualizar productos
// router.put("/:id", checkJwt, checkProveedor, updateProductoRules, validate, updateProducto);

// Para obtener productos por proveedor
router.get("/:email", getProveedorRules, validate, getProveedo);

export default router;
