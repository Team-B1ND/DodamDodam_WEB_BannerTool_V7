import { atom } from "recoil";

export const BannerImageAtom = atom<string>({
  key: "bannerImage/bannerImageAtom",
  default: "",
});
