import { db } from "../utils/db";
import { CategoriaProveedor } from "../interfaces/categoriaProv.interface";

export const selectCategoriasProv = async (): Promise<CategoriaProveedor[] | null> => {
  const response = await db.categoriaProveedor.findMany({
    select: {
      id: true,
      nombre: true,
    },
  });

  return response;
};
