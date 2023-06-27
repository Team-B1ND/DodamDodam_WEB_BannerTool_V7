import { ChangeEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { BannerApply } from "../../types/Banner/banner.type";
import { useGetBannerByIdQuery } from "../../queries/Banner/Banner.query";
import { useRecoilState } from "recoil";
import { BannerImageAtom } from "../../store/BannerAtom";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { usePatchBannerMutation } from "../../queries/Banner/Banner.query";
import { QUERY_KEYS } from "../../queries/QueryKey";

interface Props {
  id: number;
}

const useModifyBanner = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const patchBannerMutation = usePatchBannerMutation();

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

  const onChangeModifyContent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setModifyBannerData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitModifyBanner = () => {
    if (
      Object.entries(prevBannerData).toString() ===
      Object.entries(modifyBannerData).toString()
    ) {
      B1ndToast.showInfo("변경된 사항이 없습니다.");
      return;
    }

    if (bannerImage === "") {
      B1ndToast.showInfo("이미지를 추가해주세요");
      return;
    }

    if (modifyBannerData.expireDateTime === "") {
      B1ndToast.showInfo("보관기관을 추가해주세요");
      return;
    }

    if (modifyBannerData.url === "") {
      B1ndToast.showInfo("링크를 입력해주세요");
      return;
    }

    if (modifyBannerData.title === "") {
      B1ndToast.showInfo("제목을 입력해주세요");
      return;
    }

    patchBannerMutation.mutate(
      {
        data: modifyBannerData,
        id,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("수정하였습니다.");
          queryClient.invalidateQueries([QUERY_KEYS.banner.get]);
        },
      }
    );
  };

  return { modifyBannerData, onChangeModifyContent, onSubmitModifyBanner };
};

export default useModifyBanner;
