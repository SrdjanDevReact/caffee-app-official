import Navbar from "@/components/auth/Navbar";

import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default async function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-col justify-center items-center mt-4">
          {children}
        </main>
      </body>
    </html>
  );
}
