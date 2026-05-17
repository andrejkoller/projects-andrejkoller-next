"use client";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen text-sm">
      <main className="w-full min-h-screen mx-auto px-4 grow">{children}</main>
    </div>
  );
}
