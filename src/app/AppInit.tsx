import { FC, ReactNode } from "react";
import "./App.css";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { appCheck, hiddenFooter } from "./route";

type TAppInitProps = {
  children: ReactNode;
  title: string;
  path: string;
};

const AppInit: FC<TAppInitProps> = ({ children, title, path }) => {
  const isExcludedPath = appCheck.some((route) => route.path == path);
  const isHiddenFooter = hiddenFooter.some((route) => route.path == path);
  document.title = title;
  return (
    <>
      {!isExcludedPath && <Header />}
      {children}
      {!isExcludedPath && !isHiddenFooter && <Footer />}
    </>
  );
};
export default AppInit;
