import EmployeesTable from "@/components/my-components/EmployeesTable";

const Employees = async () => {
  return (
    <div className="min-h-screen mr-[100px] pt-12 ">
      <h1 className="text-2xl font-semibold border-b-2 border-slate-600 text-slate-600 w-32 mb-8">
        Employees
      </h1>
      <EmployeesTable />
    </div>
  );
};

export default Employees;
