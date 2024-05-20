import { Table } from "@tanstack/react-table";

import { DataTableViewOptions } from "@/shared/ui/data-table-view-options";
import { Input } from "@/shared/ui/input";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  field: keyof TData;
}

export function DataTableToolbar<TData>({
  table,
  field,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="search..."
          value={
            (table.getColumn(field.toString())?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) =>
            table
              .getColumn(field.toString())
              ?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
