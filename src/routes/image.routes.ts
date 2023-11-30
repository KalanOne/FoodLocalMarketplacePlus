import { Router } from "express";
import { checkJwt, checkProveedor, checkUser } from "../middleware/session";
import { uploadImageUsuario, uploadImageProveedor, uploadImageProducto } from "../controllers/image.controller";
import { deleteProductoRules } from "../middleware/validator/productos.rules";
import { validate } from "../middleware/validator";

const router = Router();

// Ruta para subir imagenes de usuarios
router.post("/usuario", checkJwt, checkUser, uploadImageUsuario);

// Ruta para subir imagenes de proveedores
router.post("/proveedor", checkJwt, checkProveedor, uploadImageProveedor);

// Ruta para subir imagenes de productos
router.post("/producto/:id", checkJwt, checkProveedor, deleteProductoRules, validate, uploadImageProducto);

export default router;
