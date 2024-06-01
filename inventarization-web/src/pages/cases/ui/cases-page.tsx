import {
  useCreateCaseMutation,
  useDeleteCaseMutation,
  useGetAllCasesQuery,
  useUpdateCaseMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/widgets/data-table-wrapper";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const CasesPage: FC = () => {
  const { data: cases, isSuccess } = useGetAllCasesQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateCaseMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateCaseMutation();
  const [onDelete] = useDeleteCaseMutation();

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
          <DialogWrapper label="create case">
            <CreateComponentForm
              isError={isErrorCreate}
              error={errorCreate}
              onCreate={onCreate}
            />
          </DialogWrapper>

          <DataTableWrapper
            isSuccess={isSuccess}
            field={"model"}
            data={cases}
            columns={columns}
            label={"cases"}
          />
        </div>
      </div>
    </div>
  );
};

CasesPage.displayName = "cases-page";

export default CasesPage;
