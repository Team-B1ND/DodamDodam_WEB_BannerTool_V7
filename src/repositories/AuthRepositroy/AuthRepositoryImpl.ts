import { AuthRepository, NewAccessTokenResponse } from "./AuthRepository";
import config from "../../config/config.json";
import axios from "axios";

class AuthRepositoryImpl implements AuthRepository {
  public async refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenResponse> {
    const { data } = await axios.post(
      `${config.DODAM_TEST_SERVER}/auth/reissue`,
      refreshToken
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
