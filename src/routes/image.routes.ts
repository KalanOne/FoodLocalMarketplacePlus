import { Router } from "express";
import { checkJwt, checkProveedor, checkUser } from "../middleware/session";
import { uploadImageUsuario } from "../controllers/image.controller";

const router = Router();

// Ruta para subir imagenes de usuarios
router.post("/usuario", checkJwt, checkUser, uploadImageUsuario);

export default router;
