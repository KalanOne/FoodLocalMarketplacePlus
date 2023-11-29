import { Router } from "express";
import { validate } from "../middleware/validator";
import { checkJwt, checkProveedor, checkUser } from "../middleware/session";

import { createPedidoRules, updateEstadoRules, proveedorRules } from "../middleware/validator/pedido.rules";
import { createPedido, updateEstadoPedido, getPedidosProveedor, getPedido } from "../controllers/pedidos.controller";

const router = Router();

// Ruta para crear pedidos
router.post("/", checkJwt, checkUser, createPedidoRules, validate, createPedido);

// Ruta para actualizar el estado de un pedido
router.put("/:id", checkJwt, checkProveedor, updateEstadoRules, validate, updateEstadoPedido);

// Rutas de Armafu
// Ruta para obtener los pedidos de un proveedor
router.get("/proveedor", checkJwt, checkProveedor, proveedorRules, validate, getPedidosProveedor);

// Rutas de Fer
// Para consultar un pedido
router.get("/pedido", validate, getPedido);
export default router;
