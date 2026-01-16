import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_PAGE } from "./routers/paths";
import HomeScreen from "./views/Home";
import FinancingScreen from "./views/Financing";
import FipeScreen from "./views/Fipe";
import StoresScreen from "./views/Stores";
import AfterSalesScreen from "./views/AfterSales";
import CatalogScreen from "./views/Catalog";
import MainLayout from "./layout/main/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PATH_PAGE.home} element={<HomeScreen />} />
          <Route path={PATH_PAGE.financing} element={<FinancingScreen />} />
          <Route path={PATH_PAGE.fipe} element={<FipeScreen />} />
          <Route path={PATH_PAGE.stores} element={<StoresScreen />} />
          <Route path={PATH_PAGE.afterSales} element={<AfterSalesScreen />} />
          <Route path={PATH_PAGE.catalog} element={<CatalogScreen />} />
          <Route path={PATH_PAGE.scheduleVisit} element={<StoresScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
