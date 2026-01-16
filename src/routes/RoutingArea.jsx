import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Dashboard from "../Dashboard/Dashboard";
import Amazon from "../Amazon/Amazon";
import NotFound from "../Components/NotFound";
import store from "../Utility/Store.js";
import { Provider } from "react-redux";
const RoutingArea = () => {
  const ways = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Amazon /> },
        { path: "/dashboard", element: <Dashboard /> },
      ],
    },
    { path: "/*", element: <NotFound /> },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={ways} />
    </Provider>
  );
};

export default RoutingArea;
