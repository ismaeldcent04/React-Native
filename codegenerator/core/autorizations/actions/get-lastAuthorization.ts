import { codeApi } from "@/core/api/code-api";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { CodeResponse } from "@/infrastructure/interfaces/codes-response";

export const getLastAuthorizations = async (pageSize = 1, pageNumber = 1) => {
  try {
    const userId = await SecureStorageAdapter.getItem("userId");
    console.log(userId);
    const { data } = await codeApi.get<CodeResponse[]>(
      `/Autorizacion?pageNumber=${pageNumber}&pageSize=${pageSize}&filters={"Usuario":"${userId}"}&isAscending=false`
    );
    console.log(data[0]);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
