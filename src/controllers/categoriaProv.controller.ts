import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { selectCategoriasProv } from "../services/categoriaProv.services";

export const getCategoriasProv = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await selectCategoriasProv();

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se encontraron categorias de proveedores",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Categorias de proveedores obtenidas",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener las categorias de proveedores", error);
  }
};
