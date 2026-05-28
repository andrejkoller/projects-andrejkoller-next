import type { Metadata } from "next";
import { DM_Sans, Noto_Sans, Playfair_Display } from "next/font/google";
import "./styles/globals.css";
import ClientLayout from "./client-layout";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("antialiased", dmSans.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
