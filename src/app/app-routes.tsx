import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppInit from "./AppInit";
import { Login } from "../pages/login/login";
import { RessetPass } from "../pages/resetPass/resetPass";
import { Dashboard } from "../pages/dashboard";

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
];

const AppRoutes: FC = () => (
  <SuspenseWrapper>
    <Routes>
      {appRoutes.map(({ path, title, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <AppInit title={title}>
              <Component />
            </AppInit>
          }
        />
      ))}
    </Routes>
  </SuspenseWrapper>
);

export default AppRoutes;
