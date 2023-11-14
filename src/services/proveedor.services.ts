import { db } from "../utils/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Proveedor, ProveedorLogin } from "../interfaces/proveedor.interface";
import { saltRounds } from "../config/config";

export const insertProveedor = async (proveedor: Proveedor): Promise<Proveedor | null> => {
  const password = proveedor.password;

  const hash = await bcrypt.hash(password, saltRounds);

  proveedor.password = hash;

  const newProveedor = await db.proveedor.create({
    data: {
      email: proveedor.email,
      nombre: proveedor.nombre,
      password: proveedor.password,
      tipo: proveedor.tipo,
      telefono: proveedor.telefono,
      direccion: proveedor.direccion,
      ciudad: proveedor.ciudad,
      codigoPostal: proveedor.codigoPostal,
      estado: proveedor.estado,
      pais: proveedor.pais,
      profilePic: proveedor.profilePic,
      coordX: proveedor.coordX,
      coordY: proveedor.coordY,
    },
  });

  return newProveedor;
};

export const getProveedor = async (email: string): Promise<Proveedor | null> => {
  const response = await db.proveedor.findUnique({
    where: {
      email: email,
    },
  });

  return response;
};

export const getProveedorLogin = async (proveedor: ProveedorLogin): Promise<string | null> => {
  const response = await db.proveedor.findUnique({
    where: {
      email: proveedor.email,
    },
  });

  const passwordsMatch: Boolean = await bcrypt.compare(proveedor.password, response?.password || "");

  if (!passwordsMatch) {
    return "NO_MATCH";
  }

  const tokenData = {
    email: response?.email,
    tipo: "Proveedor",
  };

  const accessToken = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET || "", { expiresIn: "2w" });

  return accessToken;
};
