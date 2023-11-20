import { db } from "../src/utils/db";

type Categoria = {
  name: string;
};

type CategoriaProveedor = {
  name: string;
};

async function seed() {
  await Promise.all(
    getCategorias().map((categoria) => {
      return db.categoria.create({
        data: {
          nombre: categoria.name,
        },
      });
    })
  );

  await Promise.all(
    getCategoriasProveedor().map((categoria) => {
      return db.categoriaProveedor.create({
        data: {
          nombre: categoria.name,
        },
      });
    })
  );
}

seed();

function getCategorias(): Array<Categoria> {
  return [
    { name: "Alimentos" },
    { name: "Electrodomésticos" },
    { name: "Computadoras" },
    { name: "Bebidas" },
    { name: "Higiene" },
    { name: "Otros" },
  ];
}

function getCategoriasProveedor(): Array<CategoriaProveedor> {
  return [
    { name: "Bar" },
    { name: "Repostería" },
    { name: "Café" },
    { name: "Comida Italiana" },
    { name: "Comida Económica" },
    { name: "Otros" },
  ];
}
