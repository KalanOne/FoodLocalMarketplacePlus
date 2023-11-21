import { TipoProducto } from "@prisma/client";

export interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: TipoProducto;
  idProveedor: string;
  idCategoria: number;
  imagen: string;
}

export interface ProductoUpdate {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: TipoProducto;
  idProveedor: string;
  idCategoria: number;
  imagen: string;
}
