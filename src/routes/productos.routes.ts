import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor } from "../middleware/session";

import { createProducto } from "../controllers/productos.controller";
import { createProductoRules } from "../middleware/validator/productos.rules";

const router = Router();

// Para crear productos
router.post("/", checkJwt, checkProveedor, createProductoRules, validate, createProducto);

// Para actualizar productos
// router.put("/:id", checkJwt, checkProveedor, updateProductoRules, validate, updateProducto);

export default router;
