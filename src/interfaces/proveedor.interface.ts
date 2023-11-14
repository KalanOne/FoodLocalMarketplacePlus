import { TipoProveedor } from "@prisma/client";

export interface Proveedor {
  email: string;
  nombre: string;
  password: string;
  tipo: TipoProveedor;
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
