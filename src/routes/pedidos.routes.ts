import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor, checkUser } from "../middleware/session";

import { createPedidoRules, updateEstadoRules } from "../middleware/validator/pedido.rules";
import { createPedido, updateEstadoPedido } from "../controllers/pedidos.controller";

const router = Router();

// Ruta para crear pedidos
router.post("/", checkJwt, checkUser, createPedidoRules, validate, createPedido);

// Ruta para actualizar el estado de un pedido
router.put("/:id", checkJwt, checkProveedor, updateEstadoRules, validate, updateEstadoPedido);

// Rutas de Armafu

// Rutas de Fer

export default router;
