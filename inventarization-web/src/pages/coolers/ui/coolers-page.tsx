import { FC } from "react";

import {
  useDeleteCoolerMutation,
  useGetAllCoolersQuery,
} from "@/entities/cooler";
import { createColumns } from "@/pages/coolers/lib/columns.tsx";
import { CreateCoolerForm } from "@/pages/coolers/ui/create-cooler-form.tsx";
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

const CoolersPage: FC = () => {
  const { data, isSuccess } = useGetAllCoolersQuery();
  const [deleteCooler] = useDeleteCoolerMutation();

  const columns = createColumns(deleteCooler);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create cooler
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">create cooler</DialogTitle>
              </DialogHeader>
              <CreateCoolerForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>coolers dont exits yet 😭</AlertTitle>
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

CoolersPage.displayName = "coolers-page";

export default CoolersPage;
