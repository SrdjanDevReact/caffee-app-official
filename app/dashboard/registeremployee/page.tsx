import RegisterEmployeeForm from "@/components/forms/RegisterEmployeeForm";
import Link from "next/link";

const RegisterEmployee = async () => {
  return (
    <div className="mt-[200px] max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white  border border-slate-200">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Register Employee
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide all the necessary information
      </p>
      <RegisterEmployeeForm />
      <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
        <Link href="/dashboard/employees" className="border-b">
          Go Back
        </Link>
      </p>
    </div>
  );
};

export default RegisterEmployee;
