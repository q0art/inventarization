import { FC } from "react";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";
import { Footer } from "@/widgets/footer";

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

export default RootLayout;
