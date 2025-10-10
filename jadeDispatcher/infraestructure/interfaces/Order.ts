export interface Order {
  id: number;
  name: string;
  date: Date;
  orderStatus: number | null;
  orderInfo: string;
  contact: string;
  sucursal: string;
  rnc: string;
  companyCode: number;
  companyName: string;
  body: string;
}
