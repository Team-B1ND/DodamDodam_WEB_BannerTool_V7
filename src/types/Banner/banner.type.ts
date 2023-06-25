import { Response } from "../Util/response.type";

export interface Banner {
  bannerOrder: number | null;
  createdDate: string;
  expireDateTime: string;
  readonly id: number;
  image: string;
  redirectUrl: string;
  status: "ACTIVE" | "DEACTIVETED";
  title: string;
}

export interface BannersResponse extends Response {
  data: Banner[];
}

export interface BannerResponse extends Response {
  data: Banner;
}

export interface BannerApply {
  expireDateTime: string;
  image: string;
  title: string;
  url: string;
}
