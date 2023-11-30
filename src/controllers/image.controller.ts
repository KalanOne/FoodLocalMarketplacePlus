import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { upload } from "../utils/multer";
import { updateImageUsuario } from "../services/usuario.services";
import { updateImageProveedor } from "../services/proveedor.services";
import { updateImageProducto } from "../services/producto.services";

export const uploadImageUsuario = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const idUsuario = req.body.idUsuario;
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return handleHttp(res, "Error al subir la imagen", err);
      }

      if (!req.file) {
        return handleHttp(res, "No se proporcionó ninguna imagen", null);
      }

      const response = await updateImageUsuario(idUsuario, req.file.filename);

      if (response == null) {
        return handleHttp(res, "No se pudo actualizar la imagen", null);
      }

      const respuesta: Respuesta = {
        msg: "Imagen subida",
        error: false,
        data: response,
      };

      return res.json(respuesta);
    });
  } catch (error) {
    return handleHttp(res, "Error al subir la imagen", error);
  }
};

export const uploadImageProveedor = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const idProveedor = req.body.idProveedor;
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return handleHttp(res, "Error al subir la imagen", err);
      }

      if (!req.file) {
        return handleHttp(res, "No se proporcionó ninguna imagen", null);
      }

      const response = await updateImageProveedor(idProveedor, req.file.filename);

      if (response == null) {
        return handleHttp(res, "No se pudo actualizar la imagen", null);
      }

      const respuesta: Respuesta = {
        msg: "Imagen subida",
        error: false,
        data: response,
      };

      return res.json(respuesta);
    });
  } catch (error) {
    return handleHttp(res, "Error al subir la imagen", error);
  }
};

export const uploadImageProducto = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const idProducto = req.params.id;
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return handleHttp(res, "Error al subir la imagen", err);
      }

      if (!req.file) {
        return handleHttp(res, "No se proporcionó ninguna imagen", null);
      }

      const response = await updateImageProducto(idProducto, req.file.filename);

      if (response == null) {
        return handleHttp(res, "No se pudo actualizar la imagen", null);
      }

      const respuesta: Respuesta = {
        msg: "Imagen subida",
        error: false,
        data: response,
      };

      return res.json(respuesta);
    });
  } catch (error) {
    return handleHttp(res, "Error al subir la imagen", error);
  }
};
