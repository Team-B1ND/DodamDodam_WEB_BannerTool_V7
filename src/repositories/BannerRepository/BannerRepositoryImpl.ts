import {
  PatchActiveBannersParam,
  PatchDeativateByIdParam,
  PostBannerParam,
  BannerRepository,
  DeleteBannerByIdParam,
} from "./BannerRepository";
import { customAxios } from "../../lib/Axios/customAxios";
import { BannersResponse } from "../../types/Banner/banner.type";

class BannerRepositoryImpl implements BannerRepository {
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
    id,
  }: PatchActiveBannersParam): Promise<Response> {
    const { data } = await customAxios.patch<Response>(
      `/banner/activate/${id}`
    );
    return data;
  }

  public async patchDeativateById({
    id,
  }: PatchDeativateByIdParam): Promise<Response> {
    const { data } = await customAxios.patch<Response>(
      `/banner/deactivate/${id}`
    );
    return data;
  }

  public async deleteBannerById({
    id,
  }: DeleteBannerByIdParam): Promise<Response> {
    const { data } = await customAxios.delete<Response>(`/banner/${id}`);
    return data;
  }
}

export default new BannerRepositoryImpl();
