import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { corsOptions } from "./config/config";

import PingRoutes from "./routes/ping.routes";
import UsuariosRoutes from "./routes/usuarios.routes";
import ProveedorRoutes from "./routes/proveedores.routes";
import CategoriaProveedorRoutes from "./routes/categoriasProv.routes";
import CategoriaProductoRoutes from "./routes/categoriasProd.routes";
import ProductosRoutes from "./routes/productos.routes";
import PedidosRoutes from "./routes/pedidos.routes";
import ImagenesRoutes from "./routes/image.routes";

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
app.use("/categoriaProducto", CategoriaProductoRoutes);
app.use("/producto", ProductosRoutes);
app.use("/pedido", PedidosRoutes);
app.use("/imagen", ImagenesRoutes);

export default app;
