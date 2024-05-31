import {
  useCreateMonitorMutation,
  useDeleteMonitorMutation,
  useGetAllMonitorsQuery,
  useUpdateMonitorMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const MonitorsPage: FC = () => {
  const { data, isSuccess } = useGetAllMonitorsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateMonitorMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateMonitorMutation();
  const [onDelete] = useDeleteMonitorMutation();

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
            label={"monitors"}
          />
        </div>
      </div>
    </div>
  );
};

MonitorsPage.displayName = "monitors-page";

export default MonitorsPage;
