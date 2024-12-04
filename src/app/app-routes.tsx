import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppInit from "./AppInit";
import { Login } from "../pages/login";
import { RessetPass } from "../pages/reset-pass/reset-pass";
import { Dashboard } from "../pages/product";
import DetailProduct from "../pages/product/detail-product";
import { RecoilRoot } from 'recoil';
import { Cart } from "../pages/cart/cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseRoute = (page: string): string => `training-dev/ec/${page}`;

const baseTitle = "D6-Training";

const SuspenseWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense>{children}</Suspense>
);

const appRoutes: {
  Component: FC;
  path: string;
  title: string;
}[] = [
  {
    path: baseRoute("login"),
    title: `${baseTitle} | Login`,
    Component: Login,
  },
  {
    path: baseRoute("ressetPass"),
    title: `${baseTitle} | RessetPass`,
    Component: RessetPass,
  },
  {
    path: baseRoute("Products"),
    title: `${baseTitle} | Products`,
    Component: Dashboard,
  },
  {
    path: baseRoute("Products/:id"),
    title: `${baseTitle} | Products`,
    Component: Dashboard,
  },
  {
    path: baseRoute("Products/DetailProduct"),
    title: `${baseTitle} | DetailProduct`,
    Component: DetailProduct,
  },
  {
    path: baseRoute("Cart"),
    title: `${baseTitle} | Cart`,
    Component: Cart,
  },
];

const AppRoutes: FC = () => (
  <RecoilRoot>
    <SuspenseWrapper>
      <Routes>
        {appRoutes.map(({ path, title, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <AppInit title={title} path={path}>
                <Component />
                <ToastContainer />
              </AppInit>
            }
          />
        ))}
      </Routes>
    </SuspenseWrapper>
  </RecoilRoot>
);

export default AppRoutes;
