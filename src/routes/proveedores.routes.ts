import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor, checkUser } from "../middleware/session";
import {
  getProveedo,
  createProveedor,
  loginProveedor,
  putProveedor,
  getProveedores,
  getProveedoresTypeProveedor,
  getProveedoresTypeRestaurant,
  getResenaPerProveedor,
  createResenaProveedor,
  putPassProveedor,
} from "../controllers/proveedores.controller";
import {
  createProveedorRules,
  getProveedorRules,
  loginProveedorRules,
  editProveedorRules,
  putPassRules,
} from "../middleware/validator/proveedores.rules";
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

// Para editar un proveedor
router.put("/", checkJwt, checkProveedor, editProveedorRules, validate, putProveedor);

// Para actualizar contraseña de proveedor
router.put("/contrasena", checkJwt, checkProveedor, putPassRules, validate, putPassProveedor);

// Para obtener reseñas
router.get("/resena/:email", getProveedorRules, validate, getResenaPerProveedor);

// Para crear reseñas
router.post("/resena", checkJwt, checkUser, createResenaProveedorRules, validate, createResenaProveedor);

export default router;
