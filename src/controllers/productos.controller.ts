import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { insertProducto, getProductoProveedor, getResenaProducto, insertResenaProducto } from "../services/producto.services";
import { Console } from "console";

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

export const getProductoPerProveedor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getProductoProveedor(req.params.email);
    
    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se encontraron productos que pertenecen a ese proveedor",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Productos de proovedor obtenidos",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener los productos por proveedores", error);
  }
};

export const getResenaPerProducto = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getResenaProducto(Number(req.params.idProducto));
    
    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se encontraron reseñas de este producto",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Reseñas de producto obtenidos",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener los proveedores", error);
  }
};

export const createResenaProducto = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await insertResenaProducto(req.body);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo crear la resena",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Resena creado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al crear la resena", error);
  }
};