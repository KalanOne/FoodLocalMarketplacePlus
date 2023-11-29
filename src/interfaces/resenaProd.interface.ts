
export interface ResenaProducto {
  resena: string;
  calificacion: number;
  idUsuario: string;
  idProducto: number;
}

export interface NewResenaProducto {
  resena: string;
  calificacion: number;
  idUsuario: string;
  idProducto: number;
  idProductosPedido: number;
}