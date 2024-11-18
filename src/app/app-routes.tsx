import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppInit from "./AppInit";
import { Login } from "../pages/login/login";

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
