import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PortfolioPage from "./components/PortfolioPage";
import "./config/i18next-config";
const PUBLIC_URL = "";



const AppRoutes = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
      <Route index element={<Navigate replace to="/portfolio" />}/>
        <Route path="/portfolio/*" element={<PortfolioPage/>} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
