import {
  useCreateRamMutation,
  useDeleteRamMutation,
  useGetAllRamsQuery,
  useUpdateRamMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const RamsPage: FC = () => {
  const { data, isSuccess } = useGetAllRamsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateRamMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateRamMutation();
  const [onDelete] = useDeleteRamMutation();

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
            label={"rams"}
          />
        </div>
      </div>
    </div>
  );
};

RamsPage.displayName = "rams-page";

export default RamsPage;
