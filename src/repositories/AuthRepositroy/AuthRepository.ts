import { Response } from "../../types/Util/response.type";

export interface AuthRepository {
  refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenResponse>;
}

export interface NewAccessTokenResponse extends Response {
  data: string;
}
