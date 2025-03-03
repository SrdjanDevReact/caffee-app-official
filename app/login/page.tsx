import LoginForm from "@/components/auth/LoginForm";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getSession();
  console.log("++++++++++++", session);

  const user = session?.user;
  if (user) redirect("/dashtryout/products");

  return (
    <div className="mt-48 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
      <h2 className="text-center font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Login Form
      </h2>
      <LoginForm />
    </div>
  );
};

export default Login;
