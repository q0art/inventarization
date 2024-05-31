import { ColumnDef } from "@tanstack/react-table";

import { ComponentWithBrand, UpdateComponentDto } from "@/entities/component";
import { UpdateComponentForm } from "@/features/component";
import { formatDate } from "@/shared/lib/format-date";
import { Button } from "@/shared/ui/button";
import { DataTableColumnHeader } from "@/shared/ui/data-table-column-header";
import { DialogWrapper } from "@/widgets/dialog-wrapper";

interface Props {
  onDelete: (id: string) => void;
  isErrorUpdate: boolean;
  errorUpdate: unknown;
  onUpdate: (data: { id: string; dto: UpdateComponentDto }) => void;
}

export const createTableColumns = ({
  onDelete,
  isErrorUpdate,
  errorUpdate,
  onUpdate,
}: Props) => {
  const _columns: ColumnDef<ComponentWithBrand>[] = [
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
      accessorKey: "model",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="model" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("model")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "manufacturerCode",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="manufacturer code" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("manufacturerCode")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "brand",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="brand name" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue<{ name: string }>("brand").name}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="created at" />
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
        <DataTableColumnHeader column={column} title="updated at" />
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
            <UpdateComponentForm
              id={row.getValue("id")}
              model={row.getValue("model")}
              manufacturerCode={row.getValue("manufacturerCode")}
              brand={row.getValue("brand")}
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
