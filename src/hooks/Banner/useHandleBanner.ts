import { useState } from "react";
import {
  useActiveBannersMutation,
  useDeativeBannersMutation,
} from "../../queries/Banner/Banner.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

interface Props {
  id: number;
  status: "ACTIVE" | "DEACTIVETED";
}

const useHandleBanner = ({ id, status }: Props) => {
  const activeBannerMutation = useActiveBannersMutation();
  const deativateBannerMutation = useDeativeBannersMutation();

  const [isAllowed, setIsAllowed] = useState(
    status === "ACTIVE" ? true : false
  );

  const debounceAllow = () => {
    if (!isAllowed) {
      activeBannerMutation.mutate(
        { id },
        {
          onSuccess: () => {
            setIsAllowed(true);
            B1ndToast.showSuccess("배너 활성화 성공");
          },
        }
      );
    } else {
      deativateBannerMutation.mutate(
        { id },
        {
          onSuccess: () => {
            setIsAllowed(false);
            B1ndToast.showSuccess("배너 비활성화 성공");
          },
        }
      );
    }
  };

  return { debounceAllow, isAllowed };
};

export default useHandleBanner;
