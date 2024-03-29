import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wave Planner",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-dvw h-dvh relative`}>
        {children}
        <main className="hidden sm:visible sm:flex sm:justify-center sm:items-center sm:h-full sm:w-full">
          <h1 className="sm:text-4xl sm:font-black sm:text-indigo-700 sm:animate-pulse sm:duration-1000 sm:delay-500">
            Desktop Layout Coming Soon ...
          </h1>
        </main>
      </body>
    </html>
  );
}
