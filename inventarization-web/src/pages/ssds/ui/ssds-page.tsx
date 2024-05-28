import { FC } from "react";

import { useDeleteSsdMutation, useGetAllSsdsQuery } from "@/entities/ssd";
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
import { CreateSsdForm } from "./create-ssd-form";

const SsdsPage: FC = () => {
  const { data, isSuccess } = useGetAllSsdsQuery();
  const [deleteSsd] = useDeleteSsdMutation();

  const columns = createColumns(deleteSsd);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create ssd
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">create ssd</DialogTitle>
              </DialogHeader>
              <CreateSsdForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>ssds dont exits yet 😭</AlertTitle>
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

SsdsPage.displayName = "ssds-page";

export default SsdsPage;
