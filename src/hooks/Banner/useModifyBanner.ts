import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { BannerApply } from "../../types/Banner/banner.type";
import { useGetBannerByIdQuery } from "../../queries/Banner/Banner.query";
import { useRecoilState } from "recoil";
import { BannerImageAtom } from "../../store/BannerImageAtom";

interface Props {
  id: number;
}

const useModifyBanner = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [bannerImage, setBannerImage] = useRecoilState(BannerImageAtom);

  const [prevBannerData, setPrevBannerData] = useState<BannerApply>({
    expireDateTime: "",
    image: "",
    title: "",
    url: "",
  });

  const [modifyBannerData, setModifyBannerData] = useState<BannerApply>({
    expireDateTime: "",
    image: "",
    title: "",
    url: "",
  });

  const { data: serverBannerData } = useGetBannerByIdQuery({
    id,
  });

  useEffect(() => {
    if (id && serverBannerData) {
      const { expireDateTime, image, title, redirectUrl } =
        serverBannerData.data;

      setPrevBannerData({
        expireDateTime,
        image,
        title,
        url: redirectUrl,
      });
      setModifyBannerData({
        expireDateTime,
        image,
        title,
        url: redirectUrl,
      });
      setBannerImage(serverBannerData.data.image);
    }
  }, [serverBannerData, setBannerImage, id]);

  return {};
};

export default useModifyBanner;
