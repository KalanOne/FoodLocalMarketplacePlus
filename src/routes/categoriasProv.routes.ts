import { Router } from "express";
import { validate } from "../middleware/validator";

import { getCategoriasProv } from "../controllers/categoriaProv.controller";

const router = Router();

// Para obtener todas las categorias de los proveedores
router.get("/", getCategoriasProv);

export default router;