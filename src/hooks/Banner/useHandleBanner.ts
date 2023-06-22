import { useState } from "react";
import {
  useActiveBannersMutation,
  useDeativeBannersMutation,
  useDeleteBannerMutation,
} from "../../queries/Banner/Banner.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../queries/QueryKey";

interface Props {
  id: number;
  status: "ACTIVE" | "DEACTIVETED";
}

const useHandleBanner = ({ id, status }: Props) => {
  const activeBannerMutation = useActiveBannersMutation();
  const deativateBannerMutation = useDeativeBannersMutation();
  const deleteBannerMutation = useDeleteBannerMutation();
  const queryClient = useQueryClient();

  const [isAllowed, setIsAllowed] = useState(
    status === "ACTIVE" ? true : false
  );

  const onChangeBannerAllow = () => {
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

  const onDeleteBanner = () => {
    deleteBannerMutation.mutate(
      { id },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("배너 삭제 성공");
          queryClient.invalidateQueries([QUERY_KEYS.banner.get]);
        },
        onError: () => {
          B1ndToast.showError("배너 삭제 실패");
        },
      }
    );
  };

  return { onChangeBannerAllow, isAllowed, onDeleteBanner };
};

export default useHandleBanner;
