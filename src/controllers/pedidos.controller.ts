import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { insertPedido, updateEstado, getPedidosProveedorS, getOnePedido } from "../services/pedido.services";

export const createPedido = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await insertPedido(req.body);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo crear el pedido",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Pedido creado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al crear el pedido", error);
  }
};

export const updateEstadoPedido = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await updateEstado(parseInt(req.params.id), req.body.estado);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo actualizar el estado del pedido",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Estado del pedido actualizado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al actualizar el estado del pedido", error);
  }
};

export const getPedidosProveedor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getPedidosProveedorS(req.body.idProveedor);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo obtener los pedidos del proveedor",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Pedidos del proveedor obtenidos",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener los pedidos del proveedor", error);
  }
};

export const getPedido = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getOnePedido(Number(req.params.id));

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "Pedido no encontrado",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Pedido obtenido",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener el pedido", error);
  }
};