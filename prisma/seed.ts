import { db } from "../src/utils/db";
import { Proveedor } from "../src/interfaces/proveedor.interface";
import { Producto } from "../src/interfaces/producto.interface";

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

  // Crear proveedores
  await Promise.all(
    getProveedores().map((proveedor) => {
      return db.proveedor.create({
        data: {
          nombre: proveedor.nombre,
          email: proveedor.email,
          tipo: proveedor.tipo,
          idCategoria: proveedor.idCategoria,
          password: proveedor.password,
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
    })
  );

  // Crear productos
  await Promise.all(
    getProductos().map((producto) => {
      return db.producto.create({
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
    })
  );
}

seed();

function getCategorias(): Array<Categoria> {
  return [
    { name: "Alimentos Principales" },
    { name: "Bebidas" },
    { name: "Postres" },
    { name: "Aperitivos" },
    { name: "Toppings" },
    { name: "Ensaladas" },
    { name: "Sopas" },
    { name: "Otros" },
  ];
}

function getCategoriasProveedor(): Array<CategoriaProveedor> {
  return [
    { name: "Comida Rápida" },
    { name: "Café" },
    { name: "Bar" },
    { name: "Repostería" },
    { name: "Taqueria" },
    { name: "Comida Mexicana" },
    { name: "Comida China" },
    { name: "Comida Japonesa" },
    { name: "Comida Italiana" },
    { name: "Comida Española" },
    { name: "Comida Económica" },
    { name: "Comida Vegetariana/Vegana" },
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
      profilePic: "algo/Ruta",
    },
    {
      email: "onepunchalan59@gmail.com",
      nombre: "Alan",
      apellido: "Garcia Diaz",
      password: "$2b$10$DKNPgasFY.2WBAJTzO8Myey6JBeTHsCp9wn8quKmlg1xy0xtTZGaO", //AbCdEfGhI1!@3jK4
      telefono: "4435815700",
      direccion: "Calle 123",
      ciudad: "Shinjuku",
      codigoPostal: "58000",
      estado: "Tokyo",
      pais: "Japón",
      profilePic: "algo/Ruta",
    },
  ];
}

function getProveedores(): Array<Proveedor> {
  return [
    {
      nombre: "Carl's Jr.",
      email: "carl@jr.com",
      tipo: "restaurante",
      idCategoria: 1,
      password: "$2b$10$omD0GEfGAE/i4Bod7/5pvuDAJXeEdQgUZN8lhab0Q83fYe5HHGSsq", //OLak&%1234
      telefono: "1234567890",
      direccion: "Av. Alvaro Obregon",
      ciudad: "Hawai",
      codigoPostal: "12345",
      estado: "Hawai",
      pais: "USA",
      profilePic: "algo/Ruta",
      coordX: 123.69,
      coordY: 123.12,
    },
    {
      nombre: "Starbucks",
      email: "star@bucks.com",
      tipo: "restaurante",
      idCategoria: 2,
      password: "$2b$10$omD0GEfGAE/i4Bod7/5pvuDAJXeEdQgUZN8lhab0Q83fYe5HHGSsq", //OLak&%1234
      telefono: "1234567890",
      direccion: "Av. Alvaro Obregon",
      ciudad: "Cancun",
      codigoPostal: "12345",
      estado: "Quintana Roo",
      pais: "México",
      profilePic: "algo/Ruta",
      coordX: 123.12,
      coordY: 123.69,
    },
  ];
}

function getProductos(): Array<Producto> {
  return [
    {
      nombre: "Hamburguesa",
      descripcion: "Hamburguesa con queso de mi tio",
      precio: 50,
      tipo: "platillo",
      idProveedor: "carl@jr.com",
      idCategoria: 1,
      imagen: "algo/Ruta",
    },
    {
      nombre: "Café",
      descripcion: "Café con leche de mi tio",
      precio: 30,
      tipo: "platillo",
      idProveedor: "star@bucks.com",
      idCategoria: 2,
      imagen: "algo/Ruta",
    },
    {
      nombre: "Papas fritas",
      descripcion: "Papas fritas de las que me da mi tio",
      precio: 20,
      tipo: "platillo",
      idProveedor: "carl@jr.com",
      idCategoria: 1,
      imagen: "algo/Ruta",
    },
  ];
}
