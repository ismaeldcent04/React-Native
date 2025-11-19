import { codeApi } from "@/core/api/code-api";
import { CodeRequest } from "@/infrastructure/interfaces/code-request";

export const createAuthorizationAction = async (data: CodeRequest) => {
  try {
    const { data: code } = await codeApi.post(`/Autorizacion/`, data);

    console.log("CREATE: " + JSON.stringify(code));

    return code;
  } catch (error) {
    return null;
  }
};
