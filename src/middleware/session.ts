import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();

    if (!jwt) {
      return res.status(402).json({ msg: "No se encontró el token" });
    }

    verify(jwt, process.env.ACCESS_TOKEN_SECRET || "", (err, decoded) => {
      if (err) {
        return res.status(402).json({ msg: "Token inválido" });
      }
      req.body.user = decoded;
    });

    next();
  } catch (error) {
    res.status(402).json({ msg: "Error al válidar token" });
  }
};

export const checkProveedor = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body.user;

    if (user.tipo != "Proveedor") {
      return res.status(402).json({ msg: "No tienes permisos para realizar esta acción" });
    }
    req.body.idProveedor = user.email;

    next();
  } catch (error) {
    res.status(402).json({ msg: "Error al válidar token" });
  }
};

export const checkUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body.user;

    if (user.tipo != "Usuario") {
      return res.status(402).json({ msg: "No tienes permisos para realizar esta acción" });
    }
    req.body.idUsuario = user.email;

    next();
  } catch (error) {
    res.status(402).json({ msg: "Error al válidar token" });
  }
};
