import { db } from "../utils/db";
import { encrypt, verify } from "../utils/bcrypt.handle";
import jwt from "jsonwebtoken";
import {
  Usuario,
  UsuarioLogin,
  UsuarioUpdate,
  ContraseñaUpdate,
} from "../interfaces/usuario.interface";
import { Pedido } from "../interfaces/pedido.interface";
import { estadoPedido } from "@prisma/client";

export const insertUsuario = async (
  usuario: Usuario
): Promise<Usuario | null> => {
  const password = usuario.password;

  const hash = await encrypt(password);

  usuario.password = hash;

  const newUsuario = await db.usuario.create({
    data: {
      email: usuario.email,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      password: usuario.password,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      ciudad: usuario.ciudad,
      codigoPostal: usuario.codigoPostal,
      estado: usuario.estado,
      pais: usuario.pais,
      profilePic: usuario.profilePic,
    },
  });

  return newUsuario;
};

export const updateUsuario = async (
  usuario: UsuarioUpdate
): Promise<Usuario | null> => {
  const updateUsuario = await db.usuario.update({
    where: {
      email: usuario.email,
    },
    data: {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      ciudad: usuario.ciudad,
      codigoPostal: usuario.codigoPostal,
      estado: usuario.estado,
      pais: usuario.pais,
    },
  });

  return updateUsuario;
};

export const updateNewContraseña = async (
  usuario: ContraseñaUpdate
): Promise<ContraseñaUpdate | null> => {
  const updateContraseña = await db.usuario.update({
    where: {
      email: usuario.email,
    },
    data: {
      password: usuario.password,
    },
  });

  return updateContraseña;
};

export const getUsuario = async (email: string): Promise<Usuario | null> => {
  const response = await db.usuario.findUnique({
    where: {
      email: email,
    },
    include: {
      resenasProducto: {
        include: {
          producto: {
            include: {
              proveedor: true,
            },
          },
        },
      },
      resenasProveedor: {
        include: {
          proveedor: true,
        },
      },
      pedidos: {
        include: {
          productos: true,
          pedidoProveedor: {
            include: {
              proveedor: true,
            },
          },
        },
        orderBy: {
          id: "desc",
        },
      },
    },
  });

  return response;
};

export const getUsuarioLogin = async (
  usuario: UsuarioLogin
): Promise<string | null> => {
  const response = await db.usuario.findUnique({
    where: {
      email: usuario.email,
    },
  });

  const passwordsMatch: Boolean = await verify(
    usuario.password,
    response?.password || ""
  );

  if (!passwordsMatch) {
    return "NO_MATCH";
  }

  const tokenData = {
    email: response?.email,
    tipo: "Usuario",
  };

  const accessToken = jwt.sign(
    tokenData,
    process.env.ACCESS_TOKEN_SECRET || "",
    { expiresIn: "2w" }
  );

  return accessToken;
};

export const newPedido = async (pedido: Pedido): Promise<Pedido | null> => {
  const newPedido = await db.pedido.create({
    data: {
      estado: estadoPedido.pedidoRealizado,
      idUsuario: pedido.idUsuario,
      pagado: pedido.pagado,
    },
  });

  return newPedido;
};
