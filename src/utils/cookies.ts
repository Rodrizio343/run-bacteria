import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

export const getValidAuthTokens = (): string | undefined => {
  const token = getCookie("strapi_jwt");
  const dateToken = token ? jwtDecode(token).exp : undefined;
  return dateToken && dateToken < Date.now() ? token : undefined;
};
