import { Router } from "express";
import { validate } from "../middleware/validator";

import { createUser, getUser, loginUsuario } from "../controllers/usuarios.controller";
import { createUsuarioRules, getUsuarioRules, loginUsuarioRules } from "../middleware/validator/usuarios.rules";

const router = Router();

// Para crear un usuario
router.post("/", createUsuarioRules, validate, createUser);

// Para obtener informacion de un usuario
router.get("/:email", getUsuarioRules, validate, getUser);

// Para hacer login como usuario
router.post("/login", loginUsuarioRules, validate, loginUsuario);

export default router;
