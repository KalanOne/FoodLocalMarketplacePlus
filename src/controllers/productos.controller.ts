import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { insertProducto, selectProducto, updateProducto, deleteProducto } from "../services/producto.services";

export const createProducto = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await insertProducto(req.body);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo crear el producto",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Producto creado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al crear el producto", error);
  }
};

export const getProductos = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await selectProducto(req.params.email);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo obtener los productos",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Productos obtenidos",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener los productos", error);
  }
};

export const putProducto = async (req: Request, res: Response): Promise<Response> => {
  try {
    req.body.id = parseInt(req.params.id);
    const response = await updateProducto(req.body);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo actualizar el producto",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Producto actualizado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al actualizar el producto", error);
  }
};

export const delProducto = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await deleteProducto(parseInt(req.params.id));

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo eliminar el producto",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Producto eliminado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al eliminar el producto", error);
  }
};
