import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getSession } from "@/lib/getSession";
import Link from "next/link";

const UserDisplay = async () => {
  const session = await getSession();

  const user = session?.user;
  return (
    <div className="flex ml-20 mt-20 flex-row gap-10">
      <Avatar className="h-[150px] w-[150px]">
        <AvatarImage src="https://st4.depositphotos.com/9998432/24428/v/450/depositphotos_244284796-stock-illustration-person-gray-photo-placeholder-man.jpg" />
        <AvatarFallback>{"alah"}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-10 items-start mt-10">
        <h2 className="text-center font-semibold text-xl text-neutral-800 dark:text-neutral-200">
          {user?.email}
        </h2>
        <h2 className="text-center font-semibold text-xl text-neutral-800 dark:text-neutral-200">
          Role: {user?.role}
        </h2>
        <p className="text-right text-neutral-600 text-sm max-w-sm dark:text-neutral-300">
          Wanna change info? <Link href="/register">Click here.</Link>
        </p>
      </div>
    </div>
  );
};

export default UserDisplay;
