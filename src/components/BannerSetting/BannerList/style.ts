import styled from "styled-components";

export const BannerListWrap = styled.div`
  width: 700px;
  height: 680px;

  padding: 15px 30px;

  border: 1px solid #d2d2d2;
  background-color: ${({ theme }) => theme.backgroundColor3};
`;

export const BannerItemsContainer = styled.div`
  width: 100%;
  height: calc(100% - 8px);

  overflow-y: auto;
`;

export const BannerItemWrap = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export const BannerItemText = styled.p`
  font-weight: 500;
  font-size: 14px;

  color: #282828;
`;

export const BannerItemImg = styled.img`
  width: 300px;
  height: 42.93px;
  object-fit: cover;
`;

export const BannerItemFirstBox = styled.div`
  display: flex;
  align-items: center;

  width: 112px;
  height: 100%;
`;
