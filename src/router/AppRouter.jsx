import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/*" element={<HeroesRoutes />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
