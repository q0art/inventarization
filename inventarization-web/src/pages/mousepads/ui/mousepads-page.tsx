import {
  useCreateMousepadMutation,
  useDeleteMousepadMutation,
  useGetAllMousepadsQuery,
  useUpdateMousepadMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const MousepadsPage: FC = () => {
  const { data, isSuccess } = useGetAllMousepadsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateMousepadMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateMousepadMutation();
  const [onDelete] = useDeleteMousepadMutation();

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
            label={"mousepads"}
          />
        </div>
      </div>
    </div>
  );
};

MousepadsPage.displayName = "mousepads-page";

export default MousepadsPage;
