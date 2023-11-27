import { db } from "../utils/db";
import { Producto, ProductoUpdate } from "../interfaces/producto.interface";
import { ResenaProducto } from "../interfaces/resenaProd.interface";

export const insertProducto = async (producto: Producto): Promise<Producto | null> => {
  const response = await db.producto.create({
    data: {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      tipo: producto.tipo,
      idProveedor: producto.idProveedor,
      idCategoria: producto.idCategoria,
      imagen: producto.imagen,
    },
  });

  return response;
};

export const selectProducto = async (email: string): Promise<Producto[] | null> => {
  const response = await db.producto.findMany({
    where: {
      idProveedor: email,
    },
  });

  return response;
};

export const updateProducto = async (producto: ProductoUpdate): Promise<Producto | null> => {
  console.log(producto);
  const response = await db.producto.update({
    where: {
      id: producto.id,
    },
    data: {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      tipo: producto.tipo,
      idCategoria: producto.idCategoria,
      imagen: producto.imagen,
    },
  });

  return response;
};

export const deleteProducto = async (id: number): Promise<Producto | null> => {
  const response = await db.producto.delete({
    where: {
      id: id,
    },
  });

  return response;
};

export const getProductoProveedor = async (idProveedor: string): Promise<Producto[] | null> => {
  const response = await db.producto.findMany({
    where: {
      idProveedor: idProveedor,
    },
  });

  return response;
};

export const getResenaProducto = async (idProducto: number): Promise<ResenaProducto[] | null> => {
  const response = await db.resenaProducto.findMany({
    where: {
      idProducto: idProducto,
    },
  });

  return response;
};

export const insertResenaProducto = async (resena: ResenaProducto): Promise<ResenaProducto | null> => {
  const response = await db.resenaProducto.create({
    data: {
      resena: resena.resena,
      calificacion: resena.calificacion,
      idUsuario: resena.idUsuario,
      idProducto: resena.idProducto,
    },
  });

  return response;
};
