export interface PostBannerParam {
  expireDateTime: string;
  image: string;
  title: string;
  url: string;
}

export interface PatchActiveBannersParam {
  banners: [];
}

export interface PatchDeativateByIdParam {
  id: number;
}
