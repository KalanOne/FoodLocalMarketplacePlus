import { TipoProveedor } from "@prisma/client";

export interface Proveedor {
  email: string;
  nombre: string;
  password: string;
  tipo: TipoProveedor;
  idCategoria: number;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  estado: string;
  pais: string;
  profilePic: string;
  coordX: number;
  coordY: number;
}

export interface ProveedorLogin {
  email: string;
  password: string;
}

export interface ProveedorUpdate {
  idProveedor: string;
  nombre: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  estado: string;
  coordX: number;
  coordY: number;
}
