export interface Usuario {
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
}

export interface UsuarioLogin {
  email: string;
  password: string;
}
