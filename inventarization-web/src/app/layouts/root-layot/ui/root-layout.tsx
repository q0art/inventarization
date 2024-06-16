import { FC } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>header</header>
      <main className="flex flex-1">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default RootLayout;
