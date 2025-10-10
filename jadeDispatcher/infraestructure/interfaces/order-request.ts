export interface OrderRequest {
  oid: number;
  clienternc: string;
  clienteCodigo: number;
  clienteNombre: string;
  tipoNotificacion: string;
  titulo: string;
  cuerpo: string;
  firma: string;
  puesto: string;
  fecha: Date;
  fechaRecibido: Date;
  estadoOrden: number | null;
  enviado: boolean;
  envioInmediato: boolean;
  sucursal: string;
  contacto: string;
}
