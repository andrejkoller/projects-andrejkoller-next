import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./styles/globals.css";
import ClientLayout from "./client-layout";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrej Koller — Projects",
  description:
    "A collection of completed and in-progress projects by Andrej Koller.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
