import { Alert, AlertTitle } from "@/shared/ui/alert";
import { DataTable } from "@/shared/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

interface Props<T> {
  isSuccess: boolean;
  field: keyof T;
  data: T[] | undefined;
  columns: ColumnDef<T, unknown>[];
  label: string;
}

export const DataTableWrapper = <T,>({
  isSuccess,
  field,
  data,
  columns,
  label,
}: Props<T>) => {
  return isSuccess ? (
    data?.length ? (
      <DataTable field={field} data={data} columns={columns} />
    ) : (
      <Alert>
        <AlertTitle className="text-center">
          {label} dont exits yet 😭
        </AlertTitle>
      </Alert>
    )
  ) : (
    <Alert>
      <AlertTitle className="text-center">something went wrong 🤕</AlertTitle>
    </Alert>
  );
};

DataTableWrapper.displayName = "data-wrapper";
