export interface Summary {
  cuadres: Cuadre[];
  totalEfectivo: number;
  totalTarjeta: number;
  totalTransferencia: number;
  totalFacturado: number;
  totalDescuento: number;
  totalPendiente: number;
  totalFacturas: number;
}

export interface Cuadre {
  id: number;
  cliente: number;
  fechaFactura: number;
  usuario: string;
  facturas: number;
  facturado: number;
  total: number;
  efectivo: number;
  tarjeta: number;
  tranferencia: number;
  descuento: number;
  pendiente: number;
  abonos: number;
}
