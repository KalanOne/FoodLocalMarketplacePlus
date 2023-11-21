import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import {
  insertProveedor,
  getProveedor,
  getProveedorLogin,
  getProveedorAll,
  getProveedorProveedor,
  getProveedorRestaurant,
} from "../services/proveedor.services";

export const getProveedo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getProveedor(req.params.email);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "Proveedor no encontrado",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Proveedor obtenido",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener el proveedor", error);
  }
};

export const createProveedor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await insertProveedor(req.body);

    const respuesta: Respuesta = {
      msg: "Proveedor creado",
      error: false,
      data: response,
    };

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al crear el proveedor", error);
  }
};

export const loginProveedor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getProveedorLogin(req.body);

    var respuesta: Respuesta;

    if (response == "NO_MATCH") {
      respuesta = {
        msg: "Correo y/o contraseña incorrectos",
        error: true,
        data: null,
      };
    } else {
      respuesta = {
        msg: "Login exitoso",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al hacer login", error);
  }
};

export const getProveedores = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getProveedorAll();

    if (response == null) {
      return res.json({
        msg: "No se encontraron proveedores",
        error: true,
        data: response,
      });
    } else {
      return res.json({
        msg: "Proveedores obtenidos",
        error: false,
        data: response,
      });
    }
  } catch (error) {
    return handleHttp(res, "Error al obtener los proveedores", error);
  }
};

export const getProveedoresTypeProveedor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getProveedorProveedor();

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se encontraron proveedores",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Proveedores obtenidos",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener los proveedores", error);
  }
};

export const getProveedoresTypeRestaurant = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getProveedorRestaurant();

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se encontraron restaurantes",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Restaurantes obtenidos",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener los restaurantes", error);
  }
};
