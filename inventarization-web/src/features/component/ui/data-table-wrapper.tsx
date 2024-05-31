import { ComponentWithBrand } from "@/entities/component";
import { Alert, AlertTitle } from "@/shared/ui/alert";
import { DataTable } from "@/shared/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { FC } from "react";

interface Props {
  isSuccess: boolean;
  data: ComponentWithBrand[];
  columns: ColumnDef<ComponentWithBrand, unknown>[];
  label: string;
}

export const DataTableWrapper: FC<Props> = ({
  isSuccess,
  data,
  columns,
  label,
}) => {
  return isSuccess ? (
    data?.length ? (
      <DataTable field="model" columns={columns} data={data} />
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

DataTableWrapper.displayName = "data-table-wrapper";
