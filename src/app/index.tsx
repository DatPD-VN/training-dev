import { BrowserRouter } from "react-router-dom";

import type { FC } from "react";
import AppRoutes from "./app-routes";

const App: FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
