import { FC } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/shared/ui/table";
import { Brand } from "@/entities/brand";
import { formatDate } from "@/shared/lib/format-date";
import { Button } from "@/shared/ui/button";
import { Pen, X } from "lucide-react";

interface Props {
  brands: Brand[] | undefined;
}

export const BrandsTable: FC<Props> = ({ brands }) => {
  return (
    <Table>
      <TableBody>
        {brands?.map((brand) => (
          <TableRow key={brand.id}>
            <TableCell>{brand.name}</TableCell>
            <TableCell>{formatDate(brand.updatedAt)}</TableCell>
            <TableCell>{formatDate(brand.createdAt)}</TableCell>

            <TableCell>
              <Button variant={"ghost"}>
                <Pen className="icon" />
              </Button>
              <Button onClick={() => deleteBrand(brand.id)} variant={"ghost"}>
                <X className="icon" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

BrandsTable.displayName = "brands-table";
