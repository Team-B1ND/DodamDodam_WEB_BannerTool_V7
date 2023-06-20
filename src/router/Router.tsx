import { Route, Routes } from "react-router-dom";
import BannerSettingPage from "../pages/BannerSettingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BannerSettingPage />} />
    </Routes>
  );
};

export default Router;
