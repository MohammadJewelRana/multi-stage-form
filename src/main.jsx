import React from "react";
import ReactDOM from "react-dom/client";

import AuthProvider from "./provider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./route/route.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
