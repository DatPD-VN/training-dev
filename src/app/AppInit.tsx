import { FC, ReactNode } from "react";
import "./App.css";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { appCheck } from "./route";

type TAppInitProps = {
  children: ReactNode;
  title: string;
  path: string;
};

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
