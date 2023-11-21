import { Router } from "express";
import { validate } from "../middleware/validator";

import { getCategoriasProd } from "../controllers/categoriaProd.controller";

const router = Router();

// Para obtener todas las categorias de los productos
router.get("/", getCategoriasProd);

export default router;
