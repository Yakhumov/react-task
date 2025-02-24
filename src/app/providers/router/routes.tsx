import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../../pages/HomePage/HomePage";
import { LoginPage } from "../../../pages/LoginPage/LoginPage";
import { ProfilePage } from "../../../pages/ProfilePage/ProfilePage";
import { PostsPage } from "../../../pages/PostsPage/PostsPage";
import { WeatherPage } from "../../../pages/WeatherPage/WeatherPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="news" element={<PostsPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="weather" element={<WeatherPage />} />
    </Routes>
  );
};
