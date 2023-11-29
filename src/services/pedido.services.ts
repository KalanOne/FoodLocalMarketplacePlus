import { db } from "../utils/db";
import { Pedido, PedidoCreate } from "../interfaces/pedido.interface";
import { estadoPedido } from "@prisma/client";

export const insertPedido = async (
  pedido: PedidoCreate
): Promise<Pedido | null> => {
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

export const updateEstado = async (
  id: number,
  estado: estadoPedido
): Promise<Pedido | null> => {
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

export const getPedidosProveedorS = async (
  idProveedor: string
): Promise<Pedido[]> => {
  console.log(idProveedor);
  const response = await db.pedido.findMany({
    where: {
      pedidoProveedor: {
        some: {
          idProveedor: idProveedor,
        },
      },
    },
    include: {
      productos: true,
    },
  });

  return response;
};

export const getOnePedido = async (id: number): Promise<Pedido | null> => {
  const response = await db.pedido.findUnique({
    where: {
      id: id,
    },
    include: {
      productos: {
        include: {
          producto: {
            include: {
              resenas: true,
            },
          },
        },
      },
      pedidoProveedor: {
        include: {
          proveedor: {
            include: {
              resenas: true,
            },
          },
        },
      },
    },
  });

  return response;
};
