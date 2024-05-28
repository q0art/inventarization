import { FC } from "react";

import {
  useDeleteHeadphoneMutation,
  useGetAllHeadphonesQuery,
} from "@/entities/headphone";
import { createColumns } from "@/pages/headphones/lib/columns.tsx";
import { CreateHeadphoneForm } from "@/pages/headphones/ui/create-headphone-form.tsx";
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

const HeadphonesPage: FC = () => {
  const { data, isSuccess } = useGetAllHeadphonesQuery();
  const [deleteHeadphone] = useDeleteHeadphoneMutation();

  const columns = createColumns(deleteHeadphone);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create headphone
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">
                  create headphone
                </DialogTitle>
              </DialogHeader>
              <CreateHeadphoneForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>headphones dont exits yet 😭</AlertTitle>
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

HeadphonesPage.displayName = "headphones-page";

export default HeadphonesPage;
