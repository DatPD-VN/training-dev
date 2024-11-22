import { FC, ReactNode } from "react";
import "./App.css";

type TAppInitProps = {
  children: ReactNode;
  title: string;
};

const AppInit: FC<TAppInitProps> = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  );
};

export default AppInit;
