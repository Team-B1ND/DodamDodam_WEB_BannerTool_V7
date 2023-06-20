import {
  PatchActiveBannersParam,
  PatchDeativateByIdParam,
  PostBannerParam,
} from "./BannerRepository";
import { customAxios } from "../../lib/Axios/customAxios";
import { BannersResponse } from "../../types/Banner/banner.type";

class BannerRepository {
  public async getActiveBanners(): Promise<BannersResponse> {
    const { data } = await customAxios.get<BannersResponse>("/banner/active");
    return data;
  }

  public async postBanners(uploadData: PostBannerParam): Promise<Response> {
    const { data } = await customAxios.post<Response>("/banner", uploadData);
    return data;
  }

  public async getBanners(): Promise<BannersResponse> {
    const { data } = await customAxios.get<BannersResponse>("/banner");
    return data;
  }

  public async patchActiveBanners({
    banners,
  }: PatchActiveBannersParam): Promise<Response> {
    const { data } = await customAxios.patch<Response>(
      "/banner/active",
      banners
    );
    return data;
  }

  public async patchDeativateById({
    id,
  }: PatchDeativateByIdParam): Promise<Response> {
    const { data } = await customAxios.patch<Response>(
      `/banner/deativate/${id}`,
      id
    );
    return data;
  }
}

export default new BannerRepository();
