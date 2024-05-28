import { FC } from "react";

import {
  useDeleteMousepadMutation,
  useGetAllMousepadsQuery,
} from "@/entities/mousepad";
import { createColumns } from "@/pages/mousepads/lib/columns.tsx";
import { CreateMousepadForm } from "@/pages/mousepads/ui/create-mousepad-form.tsx";
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

const MousepadsPage: FC = () => {
  const { data, isSuccess } = useGetAllMousepadsQuery();
  const [deleteMousepad] = useDeleteMousepadMutation();

  const columns = createColumns(deleteMousepad);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create mousepad
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">
                  create mousepad
                </DialogTitle>
              </DialogHeader>
              <CreateMousepadForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>mousepads dont exits yet 😭</AlertTitle>
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

MousepadsPage.displayName = "mousepads-page";

export default MousepadsPage;
