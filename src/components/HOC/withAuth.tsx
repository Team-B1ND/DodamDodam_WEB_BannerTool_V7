import React, { useEffect, useState } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import Token from "../../lib/Token/Token";
import { useGetMyPermissionQuery } from "../../queries/Permission/Permission.query";

const withAuth = (AuthComponent: React.ComponentType) => {
  const AuthCheck = () => {
    const [isBannerAuthority, setIsBanneerAuthority] = useState(false);

    const permissionData = useGetMyPermissionQuery({
      cacheTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 60 * 30 * 24,
    }).data?.data;

    const isAuthority =
      Token.get(ACCESS_TOKEN_KEY) !== undefined &&
      Token.get(REFRESH_TOKEN_KEY) !== undefined;

    useEffect(() => {
      if (permissionData) {
        if (
          permissionData.find(
            (permission) => permission.permission === "CTRL_BANNER"
          )
        ) {
          setIsBanneerAuthority(true);
        } else {
          setIsBanneerAuthority(false);
          window.alert("권한이 없습니다");
          window.location.href = "https://dodam.b1nd.com";
        }
      }
    }, [permissionData]);

    if (!isAuthority && !isBannerAuthority) {
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default withAuth;
