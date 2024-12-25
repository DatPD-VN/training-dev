import { BrowserRouter } from "react-router-dom";

import type { FC } from "react";
import AppRoutes from "./app-routes";

const App: FC = () => (
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <AppRoutes />
  </BrowserRouter>
);

export default App;
