import {
  useCreateCpuMutation,
  useDeleteCpuMutation,
  useGetAllCpusQuery,
  useUpdateCpuMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const CpusPage: FC = () => {
  const { data, isSuccess } = useGetAllCpusQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateCpuMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateCpuMutation();
  const [onDelete] = useDeleteCpuMutation();

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
            label={"cpus"}
          />
        </div>
      </div>
    </div>
  );
};

CpusPage.displayName = "cpus-page";

export default CpusPage;
