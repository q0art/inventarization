import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "@/app/app-store.ts";
import { PersistGate as PersistProvider } from "redux-persist/integration/react";
import AppRouter from "@/app/app-router.tsx";

export const AppProvider: FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistProvider persistor={persistor}>
        <AppRouter />
      </PersistProvider>
    </ReduxProvider>
  );
};

export default AppRouter;
