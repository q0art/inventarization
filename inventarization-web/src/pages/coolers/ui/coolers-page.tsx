import {
  useCreateCoolerMutation,
  useDeleteCoolerMutation,
  useGetAllCoolersQuery,
  useUpdateCoolerMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const CoolersPage: FC = () => {
  const { data, isSuccess } = useGetAllCoolersQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateCoolerMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateCoolerMutation();
  const [onDelete] = useDeleteCoolerMutation();

  const columns = createTableColumns({
    onDelete,
    isErrorUpdate,
    errorUpdate,
    onUpdate,
  });

  return (
    <div className="container">
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <DialogWrapper label="create">
            <CreateComponentForm
              isError={isErrorCreate}
              error={errorCreate}
              onCreate={onCreate}
            />
          </DialogWrapper>

          <DataTableWrapper
            isSuccess={isSuccess}
            data={data || []}
            columns={columns}
            label={""}
          />
        </div>
      </div>
    </div>
  );
};

CoolersPage.displayName = "coolers-page";

export default CoolersPage;
