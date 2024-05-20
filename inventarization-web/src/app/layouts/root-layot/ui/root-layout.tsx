import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const RootLayout: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

RootLayout.displayName = "root-layout";

export default RootLayout;
