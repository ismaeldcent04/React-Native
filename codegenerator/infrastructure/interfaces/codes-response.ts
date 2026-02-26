export interface CodeResponse {
  oid: number;
  usuario: Usuario;
  fecha: Date;
  valor: string;
  usado: boolean;
}

export interface Usuario {
  id: string;
  codigo: number;
  nombre: string;
  login: string;
  password: null;
  estCocina: null;
  puesto: number;
  negocio: number;
  telefono: null;
  inactivo: boolean;
  codigoApp: null;
  autoriza: null;
  autorizaciones: any[];
}
