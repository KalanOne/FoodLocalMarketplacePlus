import { PedidoProveedor, estadoPedido } from "@prisma/client";
import { ProductoPedido } from "./productosPedido.interface";

export interface Pedido {
  estado: estadoPedido;
  idUsuario: string;
  pagado: boolean;
}

export interface PedidoCreate {
  idUsuario: string;
  proveedores: PedidoProveedor[];
  productos: ProductoPedido[];
  pagado: boolean;
}
