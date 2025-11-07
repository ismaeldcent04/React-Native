export interface OrderResponse {
  oid: number;
  nombre: string;
  telefono: string;
  sucursal: string;
  estado: number;
  fecha: Date;
  control: number;
  notificado: boolean;
  despachado: boolean;
  despachadoFecha: Date | null;
}
