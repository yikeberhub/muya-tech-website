// src/app/layout.tsx
import "../styles/styles.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "../providers/ReduxProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ClientWrapper from "./ClientWrapper";
import AppInitializer from "@/components/AppInitializer"; // 🔹 import initializer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muya Tech Portfolio",
  description: "A professional portfolio showcasing web development expertise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {/* 🔹 run global dispatches on app load */}
          <AppInitializer />
          <ClientWrapper>{children}</ClientWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
