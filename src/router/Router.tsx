import { Route, Routes } from "react-router-dom";
import BannerSettingPage from "../pages/BannerSettingPage";
import withAuth from "../components/HOC/withAuth";

const Router = () => {
  const AuthBannerSettingPage = withAuth(BannerSettingPage);

  return (
    <Routes>
      <Route path="/" element={<AuthBannerSettingPage />} />
    </Routes>
  );
};

export default Router;
