import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { insertUsuario, getUsuario, getUsuarioLogin } from "../services/usuario.services";

export const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getUsuario(req.params.email);

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "Usuario no encontrado",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Usuario obtenido",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener el usuario", error);
  }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await insertUsuario(req.body);

    const respuesta: Respuesta = {
      msg: "Usuario creado",
      error: false,
      data: response,
    };

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al crear el usuario", error);
  }
};

export const loginUsuario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getUsuarioLogin(req.body);

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
