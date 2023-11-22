import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkUser } from "../middleware/session";
import {
  getProveedo,
  createProveedor,
  loginProveedor,
  getProveedores,
  getProveedoresTypeProveedor,
  getProveedoresTypeRestaurant,
  getResenaPerProveedor,
  createResenaProveedor
} from "../controllers/proveedores.controller";
import { createProveedorRules, getProveedorRules, loginProveedorRules } from "../middleware/validator/proveedores.rules";
import { createResenaProveedorRules } from "../middleware/validator/resenas.rules";

const router = Router();

// Para crear un proveedor
router.post("/", createProveedorRules, validate, createProveedor);

// Para devolver todos los proveedores
router.get("/", getProveedores);

// Para devolver los proveedores de tipo proveedor
router.get("/proveedores", getProveedoresTypeProveedor);

// Para devolver los proveedores de tipo restaurante
router.get("/restaurantes", getProveedoresTypeRestaurant);

// Para hacer login como proveedor
router.post("/login", loginProveedorRules, validate, loginProveedor);

// Para obtener informacion de un proveedor
router.get("/:email", getProveedorRules, validate, getProveedo);

// Para obtener reseñas
router.get("/resena/:email", getProveedorRules, validate, getResenaPerProveedor);

// Para crear reseñas
router.post("/resena/proveedor", checkJwt, checkUser, createResenaProveedorRules, validate, createResenaProveedor);

export default router;
