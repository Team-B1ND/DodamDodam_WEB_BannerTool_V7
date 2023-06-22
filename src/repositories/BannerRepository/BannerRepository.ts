export interface PostBannerParam {
  expireDateTime: string;
  image: string;
  title: string;
  url: string;
}

export interface PatchActiveBannersParam {
  id: number;
}

export interface PatchDeativateByIdParam {
  id: number;
}
