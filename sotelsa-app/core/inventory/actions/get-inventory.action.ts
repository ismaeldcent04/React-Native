import { consultingApi } from "../../api/consultingApi";
import { Inventory } from "../interfaces/inventory.interface";

export const getInventory = async (
  pageSize = 10,
  pageNumber = 1,
  client = 1,
  articulo = "",
) => {
  try {
    const filters = {
      cliente: client,
      articulo: articulo,
    };
    const { data } = await consultingApi.get<Inventory[]>(`Inventario`, {
      params: {
        filters: JSON.stringify(filters),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Unable to load summaries");
  }
};
