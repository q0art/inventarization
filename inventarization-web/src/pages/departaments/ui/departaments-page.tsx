import {
  useCreateDepartamentMutation,
  useDeleteDepartamentMutation,
  useGetAllDepartamentsQuery,
  useUpdateDepartamentMutation,
} from "@/entities/departament";
import { createTableColumns } from "@/features/departament";
import { CreateDepartamentForm } from "@/features/departament";
import { DataTableWrapper } from "@/widgets/data-table-wrapper";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const DepartamentsPage: FC = () => {
  const { data, isSuccess } = useGetAllDepartamentsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateDepartamentMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateDepartamentMutation();
  const [onDelete] = useDeleteDepartamentMutation();

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
            <CreateDepartamentForm
              isError={isErrorCreate}
              error={errorCreate}
              onCreate={onCreate}
            />
          </DialogWrapper>

          <DataTableWrapper
            isSuccess={isSuccess}
            field={"name"}
            data={data || []}
            columns={columns}
            label={"departaments"}
          />
        </div>
      </div>
    </div>
  );
};

DepartamentsPage.displayName = "departaments-page";

export default DepartamentsPage;
