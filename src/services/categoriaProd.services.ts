import { db } from "../utils/db";
import { CategoriaProducto } from "../interfaces/categoriaProd.interface";

export const selectCategoriasProd = async (): Promise<CategoriaProducto[] | null> => {
  const response = await db.categoria.findMany({
    select: {
      id: true,
      nombre: true,
    },
  });

  return response;
};
