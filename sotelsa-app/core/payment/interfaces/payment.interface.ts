export interface Payment {
  id: number;
  cliente: number;
  servicio: string;
  fecha: Date;
  monto: number;
  pagado: boolean;
  nota: string;
}
