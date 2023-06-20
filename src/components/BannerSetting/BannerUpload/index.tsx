import * as S from "./style";

const BannerPost = () => {
  return (
    <S.BannerPostWrap>
      <S.BannerPostItemWrap>
        <S.BannerFlex>
          <S.BannerInputBox>
            <S.BannerInputName>제목</S.BannerInputName>
            <S.BannerSmallInput name="title" />
          </S.BannerInputBox>
          <S.BannerInputBox>
            <S.BannerInputName>보관 기관</S.BannerInputName>
            <S.BannerSmallInput name="expireDateTime" type="date" />
          </S.BannerInputBox>
        </S.BannerFlex>
        <S.BannerInputBox>
          <S.BannerInputName>링크</S.BannerInputName>
          <S.BannerBigInput name="url" placeholder="https://dodam.b1nd.com" />
        </S.BannerInputBox>
        <S.BannerInputBox>
          <S.BannerInputName>이미지</S.BannerInputName>
          <S.BannerFlex>
            <S.BannerFileInputBox disabled />
            <S.BannerFileLabel htmlFor="file">이미지 선택</S.BannerFileLabel>
            <S.BannerFileInput name="image" type="file" id="file" />
          </S.BannerFlex>
        </S.BannerInputBox>
      </S.BannerPostItemWrap>
      <S.BannerButtonBox>
        <S.BannerPostSubmitButton>등록</S.BannerPostSubmitButton>
      </S.BannerButtonBox>
    </S.BannerPostWrap>
  );
};

export default BannerPost;
