import { customAxios } from "../../lib/Axios/customAxios";
import {
  PostRefreshParam,
  PostRefreshResponse,
  TokenRepository,
} from "./TokenRepository";

class TokenRepositoryImpl implements TokenRepository {
  public async postRefresh({
    token,
  }: PostRefreshParam): Promise<PostRefreshResponse> {
    const { data } = await customAxios.post("/token/refresh", { token });
    return data;
  }
}

export default new TokenRepositoryImpl();
