import {
  BannerApply,
  BannerResponse,
  BannersResponse,
} from "../../types/Banner/banner.type";

export interface BannerRepository {
  getActiveBanners(): Promise<BannersResponse>;

  postBanners(uploadData: BannerApply): Promise<Response>;

  getBanners(): Promise<BannersResponse>;

  patchActiveBanners({ id }: PatchActiveBannersParam): Promise<Response>;

  patchDeativateById({ id }: PatchDeativateByIdParam): Promise<Response>;

  deleteBannerById({ id }: DeleteBannerByIdParam): Promise<Response>;

  patchBanenrById({ id, data }: PatchBannerByIdParam): Promise<void>;

  getBannerById({ id }: GetBannerByIdParam): Promise<BannerResponse>;
}

export interface GetBannerByIdParam {
  id: number;
}

export interface PatchActiveBannersParam {
  id: number;
}

export interface PatchDeativateByIdParam {
  id: number;
}

export interface DeleteBannerByIdParam {
  id: number;
}

export interface PatchBannerByIdParam {
  id: number;
  data: BannerApply;
}
