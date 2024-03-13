import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import Token from "../Token/Token";
import { dodamAxios } from "./dodamAxios";
import AuthRepositoryImpl from "../../repositories/AuthRepositroy/AuthRepositoryImpl";

export const responseErrorInterceptor = async (error: AxiosError) => {
  if (error.response) {
    const {
      response: { status },
    } = error;

    const usingAccessToken = Token.get(ACCESS_TOKEN_KEY);
    const usingRefreshToken = Token.get(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      try {
        const { data: newAccessToken } =
          await AuthRepositoryImpl.refreshAccessToken({
            refreshToken: usingRefreshToken,
          });

        Token.set(ACCESS_TOKEN_KEY, newAccessToken);

        dodamAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken}`;
      } catch (error) {
        B1ndToast.showError("세션이 만료 되었습니다.");
        window.location.href = "https://dodam.b1nd.com/sign";
      }
    }
  }

  return Promise.reject(error);
};
