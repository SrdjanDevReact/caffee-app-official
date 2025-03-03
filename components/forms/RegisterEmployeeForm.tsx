import { registerEmployee } from "@/actions/userActions";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const RegisterEmployeeForm = () => {
  return (
    <form className="my-8" action={registerEmployee}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <div className="flex flex-col">
          <Label htmlFor="firstname" className="mb-2">
            First Name
          </Label>
          <Input
            id="firstname"
            placeholder="Tyler"
            type="text"
            name="firstname"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="lastname" className="mb-2">
            Last Name
          </Label>
          <Input
            id="lastname"
            placeholder="Durden"
            type="text"
            name="lastname"
          />
        </div>
      </div>

      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        placeholder="projectmayhem@fc.com"
        type="email"
        name="email"
      />

      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        placeholder="***********"
        type="password"
        name="password"
        className=""
      />
      <Label htmlFor="role">User Role</Label>
      <Input
        id="role"
        placeholder="admin.."
        type="text"
        name="role"
        className="mb-5"
      />

      <button className="bg-slate-600 hover:bg-slate-500 relative group/btn w-full text-white rounded-md h-10 font-medium ">
        Register &rarr;
      </button>
    </form>
  );
};

export default RegisterEmployeeForm;
