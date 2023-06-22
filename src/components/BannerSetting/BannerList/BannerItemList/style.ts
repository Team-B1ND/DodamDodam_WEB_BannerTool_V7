import styled from "styled-components";

export const BannerItemWrap = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-around;
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
  cursor: pointer;
`;

export const BannerItemFirstBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 120px;
  height: 100%;
`;
