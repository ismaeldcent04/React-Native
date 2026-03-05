export interface Inventory {
  id: number;
  cliente: number;
  codCompra: number;
  articulo: string;
  referencia: string;
  cantidad: number;
  costo: number;
  precio: number;
  precioMinimo: number;
  precioOferta: number;
  codigoBarra: string;
  suplidor: null;
  fechaVence: null;
  estado: null;
}
