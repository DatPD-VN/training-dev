import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppInit from "./AppInit";
import { ResetPass } from "../pages/reset-pass/reset-pass";
import { Dashboard } from "../pages/product";
import DetailProduct from "../pages/product/detail-product/detail-product";
import { RecoilRoot } from "recoil";
import { Cart } from "../pages/cart/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { DataProducts } from "../pages/data-products";
import { Order } from "../pages/order";

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
    path: baseRoute("reset-Pass"),
    title: `${baseTitle} | Reset-Pass`,
    Component: ResetPass,
  },
  {
    path: baseRoute("products"),
    title: `${baseTitle} | Products`,
    Component: Dashboard,
  },
  {
    path: baseRoute("products/:id"),
    title: `${baseTitle} | Products`,
    Component: Dashboard,
  },
  {
    path: baseRoute("products/Category"),
    title: `${baseTitle} | Products`,
    Component: Dashboard,
  },
  {
    path: baseRoute("products/detail-Product"),
    title: `${baseTitle} | Detail-Product`,
    Component: DetailProduct,
  },
  {
    path: baseRoute("cart"),
    title: `${baseTitle} | Cart`,
    Component: Cart,
  },
  {
    path: baseRoute("profile"),
    title: `${baseTitle} | Profile`,
    Component: Profile,
  },
  {
    path: baseRoute("data-products"),
    title: `${baseTitle} | Data Products`,
    Component: DataProducts,
  },
  {
    path: baseRoute("order"),
    title: `${baseTitle} | Order`,
    Component: Order,
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
