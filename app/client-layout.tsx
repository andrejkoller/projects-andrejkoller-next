"use client";

import { BackToTop } from "@/components/back-to-top";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="w-full min-h-screen mx-auto px-4 grow">
          {children}
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
