import { createBrowserRouter } from "react-router-dom";
import Characters from "./screen/Character";
import Detail from "./screen/Detail";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Characters />,
      },
      {
        path: "/characters/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default Router;
