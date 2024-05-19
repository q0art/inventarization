import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate as PersistProvider } from "redux-persist/integration/react";

import AppRouter from "@/app/app-router.tsx";
import { persistor, store } from "@/app/app-store.ts";
import { ThemeProvider } from "@/app/providers/theme-provider";

export const AppProvider: FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistProvider persistor={persistor}>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </PersistProvider>
    </ReduxProvider>
  );
};

AppProvider.displayName = "app-provider";

export default AppRouter;
