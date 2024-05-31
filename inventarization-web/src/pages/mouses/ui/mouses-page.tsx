import {
  useCreateMouseMutation,
  useDeleteMouseMutation,
  useGetAllMousesQuery,
  useUpdateMouseMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const MousesPage: FC = () => {
  const { data, isSuccess } = useGetAllMousesQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateMouseMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateMouseMutation();
  const [onDelete] = useDeleteMouseMutation();

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
            label={"mouses"}
          />
        </div>
      </div>
    </div>
  );
};

MousesPage.displayName = "mouses-page";

export default MousesPage;
