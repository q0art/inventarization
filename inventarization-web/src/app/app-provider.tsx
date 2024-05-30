import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate as PersistProvider } from "redux-persist/integration/react";

import { persistor, store } from "@/app/app-store";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { RouterProvider } from "@/app/providers/router-provider";

export const AppProvider: FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistProvider persistor={persistor}>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </PersistProvider>
    </ReduxProvider>
  );
};

AppProvider.displayName = "app-provider";
