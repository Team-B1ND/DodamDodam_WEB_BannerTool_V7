import { Response } from "../Util/response.type";

export interface Banner {
  bannerOrder: number | null;
  readonly createdAt: string;
  expiryDateTime: string;
  readonly id: number;
  image: string;
  redirectUrl: string;
  status: "ACTIVE" | "DEACTIVETED";
  title: string;
}

export interface BannersResponse extends Response {
  data: Banner[];
}
