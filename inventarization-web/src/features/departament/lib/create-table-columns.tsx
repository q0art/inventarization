import { ColumnDef } from "@tanstack/react-table";

import { formatDate } from "@/shared/lib/format-date";
import { Button } from "@/shared/ui/button";
import { DataTableColumnHeader } from "@/shared/ui/data-table-column-header";

import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { Departament, UpdateDepartamentDto } from "@/entities/departament";
import { UpdateDepartamentForm } from "@/features/departament";

interface Props {
  onDelete: (id: string) => void;
  isErrorUpdate: boolean;
  errorUpdate: unknown;
  onUpdate: (data: { id: string; dto: UpdateDepartamentDto }) => void;
}

export const createTableColumns = ({
  onDelete,
  isErrorUpdate,
  errorUpdate,
  onUpdate,
}: Props) => {
  const _columns: ColumnDef<Departament>[] = [
    {
      accessorKey: "id",
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {Number(row.id) + 1}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="name" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("name")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="createdAt" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {formatDate(row.getValue("createdAt"))}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="updatedAt" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {formatDate(row.getValue("updatedAt"))}
            </span>
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <DialogWrapper label="update">
            <UpdateDepartamentForm
              id={row.getValue("id")}
              name={row.getValue("name")}
              isError={isErrorUpdate}
              error={errorUpdate}
              onUpdate={onUpdate}
            />
          </DialogWrapper>

          <Button
            variant="outline"
            onClick={() => onDelete(row.getValue("id"))}
          >
            delete
          </Button>
        </div>
      ),
    },
  ];

  return _columns;
};
