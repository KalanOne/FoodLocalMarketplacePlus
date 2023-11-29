// import { Request, Response } from "express";
// import { handleHttp } from "../utils/error.handle";
// import { Respuesta } from "../interfaces/respuesta.interface";
// import { upload } from "../utils/multer";

// export const uploadImageUsuario = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     upload.single("image");

//     if (!req.file) {
//       return handleHttp(res, "No se proporciono ninguna imagen", null);
//     }

//     var respuesta: Respuesta = {
//       msg: "Imagen subida",
//       error: false,
//       data: "/uploads/" + req.file.filename,
//     };
//     console.log(respuesta);

//     return res.json(respuesta);
//   } catch (error) {
//     return handleHttp(res, "Error al subir la imagen", error);
//   }
// };

import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { upload } from "../utils/multer";

export const uploadImageUsuario = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    upload.single("image")(req, res, (err) => {
      if (err) {
        return handleHttp(res, "Error al subir la imagen", err);
      }

      if (!req.file) {
        return handleHttp(res, "No se proporcionó ninguna imagen", null);
      }
      const respuesta: Respuesta = {
        msg: "Imagen subida",
        error: false,
        data: "/uploads/" + req.file.filename,
      };

      return res.json(respuesta);
    });
  } catch (error) {
    return handleHttp(res, "Error al subir la imagen", error);
  }
};
