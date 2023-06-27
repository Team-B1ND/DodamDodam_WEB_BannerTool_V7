import * as S from "./style";
import useUplodaBanner from "../../../hooks/Banner/useUploadBanner";
import useModifyBanner from "../../../hooks/Banner/useModifyBanner";
import { useRecoilValue } from "recoil";
import { BannerIdAtom, BannerSetModifyAtom } from "../../../store/BannerAtom";

const BannerUpload = () => {
  const bannerId = useRecoilValue(BannerIdAtom);
  const isModify = useRecoilValue(BannerSetModifyAtom);

  const {
    onChangeUploadData,
    onSubmitUploadData,
    fileName,
    bannerData,
    onChangeImage,
  } = useUplodaBanner();

  const { modifyBannerData, onChangeModifyContent, onSubmitModifyBanner } =
    useModifyBanner({ id: bannerId });

  console.log(bannerData.expireDateTime);

  return (
    <S.BannerPostWrap>
      <S.BannerPostItemWrap>
        <S.BannerFlex>
          <S.BannerInputBox>
            <S.BannerInputName>제목</S.BannerInputName>
            <S.BannerSmallInput
              name="title"
              value={isModify ? modifyBannerData.title : bannerData.title}
              onChange={isModify ? onChangeModifyContent : onChangeUploadData}
            />
          </S.BannerInputBox>
          <S.BannerInputBox>
            <S.BannerInputName>보관 기관</S.BannerInputName>
            <S.BannerSmallInput
              name="expireDateTime"
              onChange={isModify ? onChangeModifyContent : onChangeUploadData}
              type="date"
              value={
                isModify
                  ? modifyBannerData.expireDateTime
                  : bannerData.expireDateTime
              }
            />
          </S.BannerInputBox>
        </S.BannerFlex>
        <S.BannerInputBox>
          <S.BannerInputName>링크</S.BannerInputName>
          <S.BannerBigInput
            name="url"
            onChange={isModify ? onChangeModifyContent : onChangeUploadData}
            value={isModify ? modifyBannerData.url : bannerData.url}
            placeholder="https://dodam.b1nd.com"
          />
        </S.BannerInputBox>
        <S.BannerInputBox>
          <S.BannerInputName>이미지</S.BannerInputName>
          <S.BannerFlex>
            <S.BannerFileInputBox
              value={fileName ? fileName.name : "파일을 선택해주세요"}
              disabled
            />
            <S.BannerFileLabel htmlFor="file">이미지 선택</S.BannerFileLabel>
            <S.BannerFileInput
              name="image"
              onChange={isModify ? onChangeModifyContent : onChangeImage}
              type="file"
              id="file"
            />
          </S.BannerFlex>
        </S.BannerInputBox>
      </S.BannerPostItemWrap>
      <S.BannerButtonBox>
        <S.BannerPostSubmitButton
          onClick={isModify ? onSubmitModifyBanner : onSubmitUploadData}
        >
          {isModify ? "수정" : "등록"}
        </S.BannerPostSubmitButton>
      </S.BannerButtonBox>
    </S.BannerPostWrap>
  );
};

export default BannerUpload;
