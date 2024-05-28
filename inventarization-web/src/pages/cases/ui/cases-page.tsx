import { FC } from "react";

import { useDeleteCaseMutation, useGetAllCasesQuery } from "@/entities/case";
import { createColumns } from "@/pages/cases/lib/columns.tsx";
import { Alert, AlertTitle } from "@/shared/ui/alert.tsx";
import { Button } from "@/shared/ui/button.tsx";
import { DataTable } from "@/shared/ui/data-table.tsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog.tsx";
import { Container } from "@/widgets/container";

import { CreateCaseForm } from "./create-case-form";

const CasesPage: FC = () => {
  const { data, isSuccess } = useGetAllCasesQuery();
  const [deleteCase] = useDeleteCaseMutation();

  const columns = createColumns(deleteCase);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create case
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">create case</DialogTitle>
              </DialogHeader>
              <CreateCaseForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>cases dont exits yet 😭</AlertTitle>
              </Alert>
            )
          ) : (
            <Alert>
              <AlertTitle>something went wrong 🤕</AlertTitle>
            </Alert>
          )}
        </div>
      </div>
    </Container>
  );
};

CasesPage.displayName = "cases-page";

export default CasesPage;
