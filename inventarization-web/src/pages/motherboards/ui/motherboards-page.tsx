import { FC } from "react";

import {
  useDeleteMotherboardMutation,
  useGetAllMotherboardsQuery,
} from "@/entities/motherboard";
import { Alert, AlertTitle } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { DataTable } from "@/shared/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Container } from "@/widgets/container/ui/container";

import { createColumns } from "../lib/columns";
import { CreateMotherboardForm } from "./create-motherboard-form";

const MotherboardsPage: FC = () => {
  const { data, isSuccess } = useGetAllMotherboardsQuery();
  const [deleteMotherboard] = useDeleteMotherboardMutation();

  const columns = createColumns(deleteMotherboard);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create motherboard
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">
                  create motherboard
                </DialogTitle>
              </DialogHeader>
              <CreateMotherboardForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>motherboards dont exits yet 😭</AlertTitle>
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

MotherboardsPage.displayName = "motherboards-page";

export default MotherboardsPage;
