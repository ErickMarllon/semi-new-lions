import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PATH_PAGE } from "./routers/paths";
import MainLayout from "./layout/main/layout";
import { Toaster } from "./components/ui/sonner";
import Page404 from "./views/Error/404";
import LoadingScreen from "@/components/loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomeScreen = lazy(() => import("./views/Home"));
const FinancingScreen = lazy(() => import("./views/Financing"));
const FipeScreen = lazy(() => import("./views/Fipe"));
const StoresScreen = lazy(() => import("./views/Stores"));
const AfterSalesScreen = lazy(() => import("./views/AfterSales"));
const CatalogScreen = lazy(() => import("./views/Catalog"));
const ScheduleVisitScreen = lazy(() => import("./views/ScheduleVisit"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  if (import.meta.env.DEV) {
    import("./http/mock").then(({ setupHttpMock }) => {
      setupHttpMock();
    });
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-right" />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path={PATH_PAGE.home} element={<HomeScreen />} />
              <Route path={PATH_PAGE.financing} element={<FinancingScreen />} />
              <Route path={PATH_PAGE.fipe} element={<FipeScreen />} />
              <Route path={PATH_PAGE.stores} element={<StoresScreen />} />
              <Route
                path={PATH_PAGE.afterSales}
                element={<AfterSalesScreen />}
              />
              <Route path={PATH_PAGE.catalog} element={<CatalogScreen />} />
              <Route
                path={PATH_PAGE.scheduleVisit}
                element={<ScheduleVisitScreen />}
              />
            </Route>

            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
