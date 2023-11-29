
export interface ResenaProveedor {
    resena: string;
    calificacion: number;
    idUsuario: string;
    idProveedor: string;
  }

  export interface NewResenaProveedor {
    resena: string;
    calificacion: number;
    idUsuario: string;
    idProveedor: string;
    idPedidoProveedor: number;
  }