import { Switch } from "@mui/material";
import * as S from "./style";
import { Banner } from "../../../../types/Banner/banner.type";
import dateTransform from "../../../../util/dateTransform";
import { MenuDropdown } from "@b1nd/b1nd-dodam-common-ui";
import useHandleBanner from "../../../../hooks/Banner/useHandleBanner";

interface Props {
  data: Banner;
}

const BannerItemList = ({ data }: Props) => {
  const handleDateTime = dateTransform.hyphen(data.createdDate);
  const { onChangeBannerAllow, isAllowed, onDeleteBanner } = useHandleBanner({
    id: data.id,
    status: data.status,
  });

  const onDelete = () => {};

  const onModify = () => {};

  return (
    <S.BannerItemWrap>
      <S.BannerItemFirstBox>
        <Switch
          checked={isAllowed}
          onChange={onChangeBannerAllow}
          size="small"
        />
        <S.BannerItemText>{handleDateTime}</S.BannerItemText>
      </S.BannerItemFirstBox>
      <S.BannerItemText>{data.title}</S.BannerItemText>
      <S.BannerItemImg
        onClick={() => (window.location.href = data.redirectUrl)}
        src={data.image}
        alt="배너 이미지"
      />
      <MenuDropdown
        sizeType="md"
        onDelete={onDeleteBanner}
        onModify={onModify}
        key={data.id}
      />
    </S.BannerItemWrap>
  );
};

export default BannerItemList;
