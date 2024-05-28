import { FC } from "react";

import {
  useDeleteKeyboardMutation,
  useGetAllKeyboardsQuery,
} from "@/entities/keyboard";
import { createColumns } from "@/pages/keyboards/lib/columns.tsx";
import { CreateKeyboardForm } from "@/pages/keyboards/ui/create-keyboard-form.tsx";
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

const KeyboardsPage: FC = () => {
  const { data, isSuccess } = useGetAllKeyboardsQuery();
  const [deleteKeyboard] = useDeleteKeyboardMutation();

  const columns = createColumns(deleteKeyboard);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create keyboard
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">
                  create keyboard
                </DialogTitle>
              </DialogHeader>
              <CreateKeyboardForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>keyboards dont exits yet 😭</AlertTitle>
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

KeyboardsPage.displayName = "keyboards-page";

export default KeyboardsPage;
