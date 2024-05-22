import { FC } from "react";

import { useDeleteCpuMutation, useGetAllCpusQuery } from "@/entities/cpu";
import { createColumns } from "@/pages/cpus/lib/columns.tsx";
import { CreateCpuForm } from "@/pages/cpus/ui/create-cpu-form.tsx";
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

const CpuPage: FC = () => {
  const { data, isSuccess } = useGetAllCpusQuery();
  const [deleteCpu] = useDeleteCpuMutation();

  const columns = createColumns(deleteCpu);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create cpu
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">create cpu</DialogTitle>
              </DialogHeader>
              <CreateCpuForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>cpus dont exits yet 😭</AlertTitle>
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

CpuPage.displayName = "cpu-page";

export default CpuPage;
