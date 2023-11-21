import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { selectCategoriasProd } from "../services/categoriaProd.services";

export const getCategoriasProd = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await selectCategoriasProd();

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se encontraron categorias de productos",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Categorias de productos obtenidas",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener las categorias de productos", error);
  }
};
