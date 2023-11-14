import { db } from "../src/utils/db";

type Categoria = {
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
