import { consultingApi } from "../../api/consultingApi";
import { Inventory } from "../interfaces/inventory.interface";

export const getInventory = async (
  pageSize = 10,
  pageNumber = 1,
  client = 1,
) => {
  try {
    const { data } = await consultingApi.get<Inventory[]>(
      `Inventario?filters={"cliente":1}`,
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Unable to load summaries");
  }
};
