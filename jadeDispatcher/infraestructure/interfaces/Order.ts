export interface Order {
  id: number;
  name: string;
  date: Date;
  orderStatus: number | null;
  orderInfo: string;
  contact: string;
}
