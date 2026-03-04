import { consultingApi } from "@/core/api/consultingApi";
import { Summary } from "../interfaces/summary.interface";

export const getSummaryById = async (id = 1) => {
  try {
    const { data } = await consultingApi.get<Summary>(`/Cuadre/ByDate/${id}`);

    return data;
  } catch (error) {
    throw new Error("Unable to load summary");
  }
};
