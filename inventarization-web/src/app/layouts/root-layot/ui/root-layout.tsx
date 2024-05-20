import { FC } from "react";
import { Outlet } from "react-router-dom";

import { commands } from "@/shared/configs/sidebar-commands.ts";
import { useSidebar } from "@/shared/hooks/use-sidebar.ts";
import { cn } from "@/shared/lib/cn.ts";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

const RootLayout: FC = () => {
  const isOpen = useSidebar();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isOpen && (
        <div
          className={cn("fixed left-0 top-0 z-30 h-full w-full", {
            "bg-black/30 dark:bg-white/30": isOpen,
          })}
        />
      )}
      <Sidebar isOpen={isOpen} commands={commands} />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

RootLayout.displayName = "root-layout";

export default RootLayout;
