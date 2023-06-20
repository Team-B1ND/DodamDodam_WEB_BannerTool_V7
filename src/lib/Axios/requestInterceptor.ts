import { B1ndToast } from "@b1nd/b1nd-toastify";
import { InternalAxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import Token from "../Token/Token";

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  if (
    Token.get(ACCESS_TOKEN_KEY) !== undefined &&
    Token.get(REFRESH_TOKEN_KEY) !== undefined
  ) {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${Token.get(ACCESS_TOKEN_KEY)}`;
  } else {
    B1ndToast.showError("토큰이 존재하지 않습니다.");
    window.location.href = "https://dodam.b1nd.com/sign";
  }

  return config;
};
