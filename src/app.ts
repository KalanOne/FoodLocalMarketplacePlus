import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { corsOptions } from "./config/config";

import PingRoutes from "./routes/ping.routes";
import UsuariosRoutes from "./routes/usuarios.routes";
import ProveedorRoutes from "./routes/proveedores.routes";
import CategoriaProveedorRoutes from "./routes/categoriasProv.routes";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));

// rutas
app.use(PingRoutes);
app.use("/usuario", UsuariosRoutes);
app.use("/proveedor", ProveedorRoutes);
app.use("/categoriaProveedor", CategoriaProveedorRoutes);

export default app;
