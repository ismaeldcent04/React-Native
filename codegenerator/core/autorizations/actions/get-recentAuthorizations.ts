import { codeApi } from "@/core/api/code-api";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { CodeResponse } from "@/infrastructure/interfaces/codes-response";

export const getRecentAuthorizations = async (pageSize = 3, pageNumber = 1) => {
  try {
    const userId = await SecureStorageAdapter.getItem("userId");
    const { data } = await codeApi.get<CodeResponse[]>(
      `/Autorizacion?pageNumber=${pageNumber}&pageSize=${pageSize}&filters={"Usuario":"${userId}"}&isAscending=false`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
