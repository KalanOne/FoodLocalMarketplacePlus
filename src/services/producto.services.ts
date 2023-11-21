import { db } from "../utils/db";
import { Producto, ProductoUpdate } from "../interfaces/producto.interface";

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
