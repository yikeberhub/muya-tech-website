"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      {!isDashboard && <Header />}
      <main className="flex-grow dark:bg-gray-900">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
}
