import { db } from "../src/utils/db";

type Categoria = {
  name: string;
};

type CategoriaProveedor = {
  name: string;
};

type Usuario = {
  email: string;
  nombre: string;
  apellido: string;
  password: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  estado: string;
  pais: string;
  profilePic: string;
};

async function seed() {
  // Crear categorias de productos
  await Promise.all(
    getCategorias().map((categoria) => {
      return db.categoria.create({
        data: {
          nombre: categoria.name,
        },
      });
    })
  );

  // Crear categorias de proveedores
  await Promise.all(
    getCategoriasProveedor().map((categoria) => {
      return db.categoriaProveedor.create({
        data: {
          nombre: categoria.name,
        },
      });
    })
  );

  // Crear usuarios
  await Promise.all(
    getUsuarios().map((usuario) => {
      return db.usuario.create({
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

function getUsuarios(): Array<Usuario> {
  return [
    {
      email: "armafu519@gmail.com",
      nombre: "Arturo",
      apellido: "Martínez Fts",
      password: "$2b$10$omD0GEfGAE/i4Bod7/5pvuDAJXeEdQgUZN8lhab0Q83fYe5HHGSsq", //OLak&%1234
      telefono: "1234567890",
      direccion: "Calle 123",
      ciudad: "Madrid",
      codigoPostal: "28001",
      estado: "Madrid",
      pais: "España",
      profilePic: "algunar/Ruta",
    },
  ];
}
