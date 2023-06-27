import { atom } from "recoil";

export const BannerImageAtom = atom<string>({
  key: "bannerImage/bannerImageAtom",
  default: "",
});

export const BannerIdAtom = atom<number>({
  key: "bannerId/bannerIdAtom",
  default: 0,
});

export const BannerSetModifyAtom = atom<boolean>({
  key: "bannerSetModify/bannerSetModifyAtom",
  default: false,
});
