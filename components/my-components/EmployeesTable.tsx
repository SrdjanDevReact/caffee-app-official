import { fetchAllUsers } from "@/actions/userActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/models/User";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const EmployeesTable = async () => {
  const allUsers = await fetchAllUsers();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-start gap-10 pb-2">
        <CardTitle className="text-md font-medium border-b mr-14">
          All Employees
        </CardTitle>
        <Link href="/dashboard/registeremployee" className="mr-[11vw] pb-2">
          <Button className="bg-slate-500 hover:bg-slate-600">
            Register Employee +
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-slate-100 rounded-md">
            <TableRow>
              <TableHead>Picture</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allUsers?.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar className="h-[50px] w-[50px]">
                    <AvatarImage src="https://st4.depositphotos.com/9998432/24428/v/450/depositphotos_244284796-stock-illustration-person-gray-photo-placeholder-man.jpg" />
                    <AvatarFallback>{"UserImg"}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="text-lg">{user.firstName}</TableCell>
                <TableCell
                  className={`${
                    user.role === "admin" ? "text-green-500" : "text-cyan-800"
                  }`}
                >
                  <Button
                    className={`hover:bg-red-100 rounded-sm focus:outline-none bg-slate-100 ${
                      user.role === "admin"
                        ? "text-green-500 hover:bg-green-200 hover:text-green-700"
                        : "text-cyan-800 hover:bg-slate-200"
                    }`}
                  >
                    {user.role === "admin" ? "Admin" : "User"}
                  </Button>
                </TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>
                  <form
                    action={async () => {
                      "use server";
                      await User.findByIdAndDelete(user._id);
                      revalidatePath("/dashtryout/employees");
                    }}
                  >
                    <Button className=" text-red-500 hover:bg-red-200 rounded-sm focus:outline-none bg-red-100 ">
                      Delete
                    </Button>
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmployeesTable;
