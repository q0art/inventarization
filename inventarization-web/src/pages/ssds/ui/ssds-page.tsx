import {
  useCreateSsdMutation,
  useDeleteSsdMutation,
  useGetAllSsdsQuery,
  useUpdateSsdMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/widgets/data-table-wrapper";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const SsdsPage: FC = () => {
  const { data, isSuccess } = useGetAllSsdsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateSsdMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateSsdMutation();
  const [onDelete] = useDeleteSsdMutation();

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
            field={"model"}
            data={data || []}
            columns={columns}
            label={"ssds"}
          />
        </div>
      </div>
    </div>
  );
};

SsdsPage.displayName = "ssds-page";

export default SsdsPage;
