import { persistor, store } from "@app/app-store";
import { RouterProvider } from "@app/providers/router-provider";
import { ThemeProvider } from "@app/providers/theme-provider";
import { FC } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate as PersistorProvider } from "redux-persist/integration/react";

export const AppProvider: FC = () => {
  return (
    <StoreProvider store={store}>
      <PersistorProvider persistor={persistor}>
        <HelmetProvider>
          <ThemeProvider>
            <RouterProvider />
          </ThemeProvider>
        </HelmetProvider>
      </PersistorProvider>
    </StoreProvider>
  );
};
