import {
  useCreateMotherboardMutation,
  useDeleteMotherboardMutation,
  useGetAllMotherboardsQuery,
  useUpdateMotherboardMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const MotherboardsPage: FC = () => {
  const { data, isSuccess } = useGetAllMotherboardsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateMotherboardMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateMotherboardMutation();
  const [onDelete] = useDeleteMotherboardMutation();

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
            label={"motherboards"}
          />
        </div>
      </div>
    </div>
  );
};

MotherboardsPage.displayName = "motherboards-page";

export default MotherboardsPage;
