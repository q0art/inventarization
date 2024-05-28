import { ColumnDef } from "@tanstack/react-table";
import { Pencil, X } from "lucide-react";

import { KeyboardWithBrandName } from "@/entities/keyboard";
import { UpdateKeyboardForm } from "@/pages/keyboards/ui/update-keyboard-form.tsx";
import { formatDate } from "@/shared/lib/format-date";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { DataTableColumnHeader } from "@/shared/ui/data-table-column-header";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

const createColumns = (onDelete: (id: string) => void) => {
  const _columns: ColumnDef<KeyboardWithBrandName>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <Pencil className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">
                  update keyboard
                </DialogTitle>
              </DialogHeader>
              <UpdateKeyboardForm
                id={row.getValue("id")}
                model={row.getValue("model")}
                manufacturerCode={row.getValue("manufacturerCode")}
                brand={row.getValue("brand")}
              />
            </DialogContent>
          </Dialog>
          <Button variant="ghost" onClick={() => onDelete(row.getValue("id"))}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return _columns;
};

export { createColumns };
