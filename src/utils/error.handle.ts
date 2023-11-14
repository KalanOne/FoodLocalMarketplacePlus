import { Response } from "express";
import { Respuesta } from "../interfaces/respuesta.interface";

export const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);

  const respuesta: Respuesta = {
    msg: error,
    error: true,
    data: null,
  };

  return res.status(500).json(respuesta);
};
