export interface OrderResponse {
  oid: number;
  rnc: string;
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
  notificacionContactos: NotificacionContacto[];
}

export interface NotificacionContacto {
  oid: number;
  notificacion: number;
  contacto: string;
  tipo: string;
  copia: boolean;
  enviado: boolean;
  intento: number;
  ultimoIntento: Date;
  fechaEnviado: Date;
}
