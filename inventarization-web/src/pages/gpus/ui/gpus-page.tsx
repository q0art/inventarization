import {
  useCreateGpuMutation,
  useDeleteGpuMutation,
  useGetAllGpusQuery,
  useUpdateGpuMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const GpusPage: FC = () => {
  const { data, isSuccess } = useGetAllGpusQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateGpuMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateGpuMutation();
  const [onDelete] = useDeleteGpuMutation();

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
            label={"gpus"}
          />
        </div>
      </div>
    </div>
  );
};

GpusPage.displayName = "gpus-page";

export default GpusPage;
