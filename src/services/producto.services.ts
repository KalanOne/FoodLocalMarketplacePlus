import { db } from "../utils/db";
import { Producto } from "../interfaces/producto.interface";

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
    }
  });

  return response;
};
