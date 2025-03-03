import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="flex h-14 justify-around items-center bg-slate-600 text-white drop-shadow-lg">
      <Link href="/" className="text-xl font-bold">
        <div className="ml-2 mt-2 flex flex-row items-start justify-start">
          <h3 className="text-2xl font-semibold font-serif text-foreground text-white">
            WithEase
          </h3>
          <span className="text-[14px] pb-4">©</span>
        </div>
      </Link>

      <ul className="flex flex-row space-x-6 list-none">
        {!user ? (
          <>
            <li>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-gray-400">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit" variant={"ghost"}>
                Logout
              </Button>
            </form>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
