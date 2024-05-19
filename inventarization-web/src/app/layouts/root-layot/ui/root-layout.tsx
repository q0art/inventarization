import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { useSidebar } from "@/shared/hooks/use-sidebar.ts";
import { cn } from "@/shared/lib/cn.ts";

const RootLayout: FC = () => {
  const isOpen = useSidebar();

  const commands = [
    {
      name: "employees",
      link: "employees",
    },
    {
      name: "cpus",
      link: "cpus",
    },
    {
      name: "gpus",
      link: "gpus",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isOpen && (
        <div
          className={cn("fixed left-0 top-0 z-0 h-full w-full", {
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
