import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useUploadBannerMutation } from "../../queries/Banner/Banner.query";
import { useUploadImageMutation } from "../../queries/Upload/Upload.query";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { BannerImageAtom } from "../../store/BannerAtom";

const useUplodaBanner = () => {
  const queryClient = useQueryClient();
  const uploadBannerMutation = useUploadBannerMutation();
  const [fileName, setFileName] = useState<File>();
  const uploadMutation = useUploadImageMutation();
  const [, setBannerImage] = useRecoilState(BannerImageAtom);

  const [bannerData, setBannerData] = useState({
    expireDateTime: "",
    image: "",
    title: "",
    url: "",
  });

  const onChangeImage = (event: ChangeEvent<HTMLInputElement> | any) => {
    let image: File;
    image = event.target.files[0];
    setFileName(image);

    const formData = new FormData();
    formData.append("file", image);

    uploadMutation.mutate(
      {
        formData,
      },
      {
        onSuccess: (data) => {
          setBannerData((prev) => ({ ...prev, image: data.data }));
          setBannerImage(data.data);
        },
      }
    );
  };

  const onChangeUploadData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBannerData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitUploadData = () => {
    const { expireDateTime, image, title, url } = bannerData;
    uploadBannerMutation.mutate(
      {
        expireDateTime,
        image,
        title,
        url,
      },
      {
        onSuccess: () => {
          setBannerImage("");
          queryClient.invalidateQueries("");
          B1ndToast.showSuccess("배너가 등록되었습니다");
        },
        onError: () => {
          B1ndToast.showError("배너 등록 실패");
        },
      }
    );
  };

  return {
    fileName,
    onSubmitUploadData,
    onChangeUploadData,
    onChangeImage,
    bannerData,
  };
};

export default useUplodaBanner;
