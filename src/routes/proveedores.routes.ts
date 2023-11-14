import { Router } from "express";
import { validate } from "../middleware/validator";

import { getProveedo, createProveedor, loginProveedor } from "../controllers/proveedores.controller";
import { createProveedorRules, getProveedorRules, loginProveedorRules } from "../middleware/validator/proveedores.rules";

const router = Router();

// Para crear un proveedor
router.post("/", createProveedorRules, validate, createProveedor);

// Para obtener informacion de un proveedor
router.get("/:email", getProveedorRules, validate, getProveedo);

// Para hacer login como proveedor
router.post("/login", loginProveedorRules, validate, loginProveedor);

export default router;
