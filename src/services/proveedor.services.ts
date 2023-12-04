import { db } from "../utils/db";
import { encrypt, verify } from "../utils/bcrypt.handle";
import jwt from "jsonwebtoken";
import { ResenaProveedor, NewResenaProveedor } from "../interfaces/resenaProv.interface";
import { Proveedor, ProveedorLogin, ProveedorUpdate, ProveedorBrief } from "../interfaces/proveedor.interface";

export const insertProveedor = async (proveedor: Proveedor): Promise<Proveedor | null> => {
  const password = proveedor.password;

  const hash = await encrypt(password);

  proveedor.password = hash;

  const newProveedor = await db.proveedor.create({
    data: {
      email: proveedor.email,
      nombre: proveedor.nombre,
      password: proveedor.password,
      tipo: proveedor.tipo,
      idCategoria: proveedor.idCategoria,
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

export const updateProveedor = async (proveedor: ProveedorUpdate): Promise<Proveedor | null> => {
  const response = await db.proveedor.update({
    where: {
      email: proveedor.idProveedor,
    },
    data: {
      nombre: proveedor.nombre,
      telefono: proveedor.telefono,
      direccion: proveedor.direccion,
      ciudad: proveedor.ciudad,
      codigoPostal: proveedor.codigoPostal,
      estado: proveedor.estado,
      coordX: proveedor.coordX,
      coordY: proveedor.coordY,
    },
  });

  return response;
};

export const getProveedor = async (email: string): Promise<Proveedor | null> => {
  const response = await db.proveedor.findUnique({
    where: {
      email: email,
    },
  });

  return response;
};

export const getProveedorAll = async (): Promise<Proveedor[] | null> => {
  // const response = await db.proveedor.findMany();
  const response = await db.proveedor.findMany({
    include: {
      productos: {
        include: {
          resenas: true,
        },
      },
      resenas: true,
    },
  });

  return response;
};

export const getProveedorProveedor = async (): Promise<Proveedor[] | null> => {
  const response = await db.proveedor.findMany({
    where: {
      tipo: "proveedor",
    },
  });

  return response;
};

export const getProveedorRestaurant = async (): Promise<Proveedor[] | null> => {
  const response = await db.proveedor.findMany({
    where: {
      tipo: "restaurante",
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

  const passwordsMatch: Boolean = await verify(proveedor.password, response?.password || "");

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

export const getResenaProveedor = async (idProveedor: string): Promise<ResenaProveedor[] | null> => {
  const response = await db.resenaProveedor.findMany({
    where: {
      idProveedor: idProveedor,
    },
  });

  return response;
};

export const insertResenaProveedor = async (resena: NewResenaProveedor): Promise<ResenaProveedor | null> => {
  const response = await db.resenaProveedor.create({
    data: {
      resena: resena.resena,
      calificacion: resena.calificacion,
      idUsuario: resena.idUsuario,
      idProveedor: resena.idProveedor,
    },
  });

  const response2 = await db.pedidoProveedor.update({
    where: {
      id: resena.idPedidoProveedor,
      idProveedor: resena.idProveedor,
    },
    data: {
      resena: true,
    },
  });

  return response;
};

export const updateImageProveedor = async (idProveedor: string, image: string): Promise<ProveedorBrief | null> => {
  const updateProveedor = await db.proveedor.update({
    where: {
      email: idProveedor,
    },
    data: {
      profilePic: "/uploads/" + image,
    },
    select: {
      email: true,
      nombre: true,
      telefono: true,
      profilePic: true,
    },
  });

  return updateProveedor;
};

export const updatePass = async (idProveedor: string, password: string): Promise<ProveedorBrief | null> => {
  const hash = await encrypt(password);

  const response = await db.proveedor.update({
    where: {
      email: idProveedor,
    },
    data: {
      password: hash,
    },
    select: {
      email: true,
      nombre: true,
      telefono: true,
      profilePic: true,
    },
  });

  return response;
};
