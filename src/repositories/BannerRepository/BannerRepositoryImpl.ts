import {
  PatchActiveBannersParam,
  PatchDeativateByIdParam,
  PostBannerParam,
  BannerRepository,
  DeleteBannerByIdParam,
} from "./BannerRepository";
import { dodamAxios } from "../../lib/Axios/dodamAxios";
import { BannersResponse } from "../../types/Banner/banner.type";

class BannerRepositoryImpl implements BannerRepository {
  public async getActiveBanners(): Promise<BannersResponse> {
    const { data } = await dodamAxios.get("/banner/active");
    return data;
  }

  public async postBanners(uploadData: PostBannerParam): Promise<Response> {
    const { data } = await dodamAxios.post("/banner", uploadData);
    return data;
  }

  public async getBanners(): Promise<BannersResponse> {
    const { data } = await dodamAxios.get("/banner");
    return data;
  }

  public async patchActiveBanners({
    id,
  }: PatchActiveBannersParam): Promise<Response> {
    const { data } = await dodamAxios.patch(`/banner/activate/${id}`);
    return data;
  }

  public async patchDeativateById({
    id,
  }: PatchDeativateByIdParam): Promise<Response> {
    const { data } = await dodamAxios.patch(`/banner/deactivate/${id}`);
    return data;
  }

  public async deleteBannerById({
    id,
  }: DeleteBannerByIdParam): Promise<Response> {
    const { data } = await dodamAxios.delete(`/banner/${id}`);
    return data;
  }
}

export default new BannerRepositoryImpl();
