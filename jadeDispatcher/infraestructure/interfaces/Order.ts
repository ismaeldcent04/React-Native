export interface Order {
  id: number;
  name: string;
  date: Date;
  orderStatus: number | null;
  orderNo: number;
  contact: string;
  sucursal: string;
  notified: boolean;
  dispatched: boolean;
  dispatchedDate: Date | null;
}
