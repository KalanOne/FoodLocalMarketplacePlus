import { Router } from "express";
import { validate } from "../middleware/validator";

import { createUser, getUser, loginUsuario, updateUser, createPedido, updateContraseña } from "../controllers/usuarios.controller";
import { createUsuarioRules, getUsuarioRules, loginUsuarioRules, updateUsuarioRules, updateContraseñaRules } from "../middleware/validator/usuarios.rules";

const router = Router();

// Para crear un usuario
router.post("/", createUsuarioRules, validate, createUser);

// Para actualizar un usuario
router.put("/update", updateUsuarioRules, validate, updateUser);

// Para actualizar contraseña de usuario
router.put("/contraseña", updateContraseñaRules, validate, updateContraseña);

// Para obtener informacion de un usuario
router.get("/:email", getUsuarioRules, validate, getUser);

// Para hacer login como usuario
router.post("/login", loginUsuarioRules, validate, loginUsuario);

// Para hacer un pedido
router.post("/pedido", validate, createPedido);

export default router;
