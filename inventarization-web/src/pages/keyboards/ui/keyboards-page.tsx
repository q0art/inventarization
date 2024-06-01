import {
  useCreateKeyboardMutation,
  useDeleteKeyboardMutation,
  useGetAllKeyboardsQuery,
  useUpdateKeyboardMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/widgets/data-table-wrapper";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const KeyboardsPage: FC = () => {
  const { data, isSuccess } = useGetAllKeyboardsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateKeyboardMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateKeyboardMutation();
  const [onDelete] = useDeleteKeyboardMutation();

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
            label={"keyboards"}
          />
        </div>
      </div>
    </div>
  );
};

KeyboardsPage.displayName = "keyboards-page";

export default KeyboardsPage;
