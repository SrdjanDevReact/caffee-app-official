import AddProductForm from "@/components/forms/AddProductForm";

const AddProduct = () => {
  return (
    <div className="mt-[180px] max-w-md w-[400px] h-[500px] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border ">
      <h1 className="w-full text-center text-2xl pb-4 font-semibold text-slate-500 border-b font-mono">
        Add Product
      </h1>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
