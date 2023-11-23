//proveedores: arreglo de emails de los proveedores
//productos: arreglo de getProductoRules, te voy a pasar 
//            id
//            precio
//            cantidad
//usuario: email
import { estadoPedido } from "@prisma/client";

export interface Pedido {
    estado: estadoPedido;
    idUsuario: string;
    pagado: boolean;
    //proveedores: [];
    //productos: [];
  }
  