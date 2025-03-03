import Sidebar from "@/components/sidebar";
import { getSession } from "@/lib/getSession";

import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default async function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user = session?.user;

  if (!user) redirect("/login");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar
          email={user?.email as string}
          id={user?.id as string}
          role={user?.role as string}
        />
        <main className="ml-[300px] mt-4">{children}</main>
      </body>
    </html>
  );
}
