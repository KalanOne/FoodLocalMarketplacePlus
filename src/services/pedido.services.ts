import { db } from "../utils/db";
import { Pedido, PedidoCreate } from "../interfaces/pedido.interface";
import { estadoPedido } from "@prisma/client";

export const insertPedido = async (pedido: PedidoCreate): Promise<Pedido | null> => {
  const response = await db.pedido.create({
    data: {
      estado: "pedidoRealizado",
      idUsuario: pedido.idUsuario,
      pagado: pedido.pagado,
      productos: {
        create: pedido.productos,
      },
      pedidoProveedor: {
        create: pedido.proveedores,
      },
    },
  });

  return response;
};

export const updateEstado = async (id: number, estado: estadoPedido): Promise<Pedido | null> => {
  const response = await db.pedido.update({
    where: {
      id: id,
    },
    data: {
      estado: estado,
    },
  });

  return response;
};
