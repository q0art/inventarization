import { AppProvider } from "@app/app-provider";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
);
