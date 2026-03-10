import { consultingApi } from "@/core/api/consultingApi";
import { Payment } from "../interfaces/payment.interface";

export const getPayments = async (
  pageSize = 10,
  pageNumber = 1,
  client = 1,
  search = "",
) => {
  try {
    const filters = {
      cliente: client,
      search: search,
    };
    const { data } = await consultingApi.get<Payment[]>(`PagoCliente`, {
      params: {
        filters: JSON.stringify(filters),
        pageSize,
        pageNumber,
        isAscending: false,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Unable to load payments");
  }
};
