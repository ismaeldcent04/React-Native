import { orderApi } from "@/core/api/order-api";
import axios from "axios";

export const ordersPendingAction = async () => {
  try {
    console.log("Entre");
    var { data } = await orderApi.get("/Notificacion");
    console.log("Sali");
    console.log(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
