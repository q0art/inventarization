import { FC } from "react";

import { useDeleteMouseMutation, useGetAllMousesQuery } from "@/entities/mouse";
import { createColumns } from "@/pages/mouses/lib/columns.tsx";
import { CreateMouseForm } from "@/pages/mouses/ui/create-mouse-form.tsx";
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

const MousesPage: FC = () => {
  const { data, isSuccess } = useGetAllMousesQuery();
  const [deleteMouse] = useDeleteMouseMutation();

  const columns = createColumns(deleteMouse);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create mouse
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">create mouse</DialogTitle>
              </DialogHeader>
              <CreateMouseForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>mouses dont exits yet 😭</AlertTitle>
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

MousesPage.displayName = "mouses-page";

export default MousesPage;
