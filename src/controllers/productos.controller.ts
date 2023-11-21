import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { insertProducto } from "../services/producto.services";

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
