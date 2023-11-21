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
  putProveedor,
} from "../controllers/proveedores.controller";
import {
  createProveedorRules,
  getProveedorRules,
  loginProveedorRules,
  editProveedorRules,
} from "../middleware/validator/proveedores.rules";

const router = Router();

// Para crear un proveedor
router.post("/", createProveedorRules, validate, createProveedor);

// Para devolver todos los proveedores
router.get("/", getProveedores);

// Para devolver los proveedores de tipo proveedor
router.get("/proveedores", getProveedoresTypeProveedor);

// Para devolver los proveedores de tipo restaurante
router.get("/restaurantes", getProveedoresTypeRestaurant);

// Para editar un proveedor
router.put("/", checkJwt, checkProveedor, editProveedorRules, validate, putProveedor);

// Para hacer login como proveedor
router.post("/login", loginProveedorRules, validate, loginProveedor);

// Para obtener informacion de un proveedor
router.get("/:email", getProveedorRules, validate, getProveedo);

export default router;
