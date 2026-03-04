import { consultingApi } from "@/core/api/consultingApi";
import { Summary } from "../interfaces/summary.interface";

export const getSummaries = async (
  pageSize = 10,
  pageNumber = 1,
  client = 1,
  startDate = 20260122,
  endDate = 20260122,
) => {
  try {
    const { data } = await consultingApi.get<Summary[]>(
      `/Cuadre/ByDate?client=${client}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Unable to load summaries");
  }
};
