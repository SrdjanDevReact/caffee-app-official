import { login } from "@/actions/userActions";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="my-8" action={login}>
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        placeholder="projectmayhem@fc.com"
        type="email"
        name="email"
      />

      <Label htmlFor="email">Password</Label>
      <Input
        id="password"
        placeholder="*************"
        type="password"
        name="password"
        className="mb-6"
      />

      <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
        Login &rarr;
      </button>

      <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
        Dont have account? <Link href="/register">Register</Link>
      </p>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </form>
  );
};

export default LoginForm;
