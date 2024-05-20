import { FC } from "react";

import {
  useDeleteDepartamentMutation,
  useGetAllDepartamentsQuery,
} from "@/entities/departament";
import { CreateDepartamentForm } from "@/pages/departaments/ui/create-departament-form.tsx";
import { Alert, AlertTitle } from "@/shared/ui/alert.tsx";
import { Button } from "@/shared/ui/button";
import { DataTable } from "@/shared/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Container } from "@/widgets/container";

import { createColumns } from "../lib/columns";

const DepartamentPage: FC = () => {
  const { data, isSuccess } = useGetAllDepartamentsQuery();
  const [deleteDepartament] = useDeleteDepartamentMutation();

  const columns = createColumns(deleteDepartament);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create departament
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">
                  create departament
                </DialogTitle>
              </DialogHeader>
              <CreateDepartamentForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="name" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>departaments dont exits yet 😭</AlertTitle>
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

DepartamentPage.displayName = "departament-page";

export default DepartamentPage;
