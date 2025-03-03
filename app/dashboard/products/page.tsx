import CardStats from "@/components/my-components/CardStats";
import ProductsTable from "@/components/my-components/ProductsTable";

const ProductsPage = async () => {
  return (
    <div className="min-h-screen mr-[100px] ">
      <div className="flex-1 dark:bg-gray-950">
        <div className="p-6 grid gap-6">
          <ProductsTable />
          <CardStats />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
