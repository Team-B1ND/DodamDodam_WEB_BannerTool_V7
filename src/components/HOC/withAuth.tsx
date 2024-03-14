import React, { useEffect, useState } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import Token from "../../lib/Token/Token";
import { useGetMyMemberQuery } from "../../queries/Member/Member.query";

const withAuth = (AuthComponent: React.ComponentType) => {
  const AuthCheck = () => {
    const [isBannerAuthority, setIsBanneerAuthority] = useState(false);

    const memberData = useGetMyMemberQuery({
      cacheTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 60 * 30 * 24,
    }).data?.data;

    const isAuthority =
      Token.get(ACCESS_TOKEN_KEY) !== undefined &&
      Token.get(REFRESH_TOKEN_KEY) !== undefined;

    useEffect(() => {
      if (memberData) {
        if (memberData.role === "ADMIN") {
          setIsBanneerAuthority(true);
        } else {
          setIsBanneerAuthority(false);
          window.alert("권한이 없습니다");
          window.location.href = "https://dodam.b1nd.com";
        }
      }
    }, [memberData]);

    if (!isAuthority && !isBannerAuthority) {
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default withAuth;
