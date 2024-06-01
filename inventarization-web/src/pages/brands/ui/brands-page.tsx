import {
  useCreateBrandMutation,
  useDeleteBrandMutation,
  useGetAllBrandsQuery,
  useUpdateBrandMutation,
} from "@/entities/brand";
import { createTableColumns } from "@/features/brand";
import { CreateBrandForm } from "@/features/brand/ui/create-brand-form";
import { DataTableWrapper } from "@/widgets/data-table-wrapper";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const BrandsPage: FC = () => {
  const { data: brands, isSuccess } = useGetAllBrandsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateBrandMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateBrandMutation();
  const [onDelete] = useDeleteBrandMutation();

  const columns = createTableColumns({
    onDelete,
    isErrorUpdate,
    errorUpdate,
    onUpdate,
  });

  return (
    <div className="container">
      <div className="py-3">
        <div className="flex flex-col items-center justify-center">
          <DialogWrapper label={"create brand"}>
            <CreateBrandForm
              isError={isErrorCreate}
              error={errorCreate}
              onCreate={onCreate}
            />
          </DialogWrapper>

          <DataTableWrapper
            isSuccess={isSuccess}
            field={"name"}
            data={brands}
            columns={columns}
            label={"brands"}
          />
        </div>
      </div>
    </div>
  );
};

BrandsPage.displayName = "brands-page";

export default BrandsPage;
