import { FC, ReactNode } from "react";
import "./App.css";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";

type TAppInitProps = {
  children: ReactNode;
  title: string;
  path: string;
};

const appCheck: {
  path: string;
}[] = [
  {
    path: "training-dev/ec/login",
  },
  {
    path: "training-dev/ec/ressetPass",
  },
];

const AppInit: FC<TAppInitProps> = ({ children, title, path }) => {
  const isExcludedPath = appCheck.some((route) => route.path === path);
  return (
    <>
      {!isExcludedPath && <Header />}
      <title>{title}</title>
      {children}
      {!isExcludedPath && <Footer />}
    </>
  );
};
export default AppInit;
