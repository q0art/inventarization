import { FC } from "react";

import {
  useDeleteMonitorMutation,
  useGetAllMonitorsQuery,
} from "@/entities/monitor";
import { createColumns } from "@/pages/monitors/lib/columns.tsx";
import { CreateMonitorForm } from "@/pages/monitors/ui/create-monitor-form.tsx";
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

const MonitorsPage: FC = () => {
  const { data, isSuccess } = useGetAllMonitorsQuery();
  const [deleteMonitor] = useDeleteMonitorMutation();

  const columns = createColumns(deleteMonitor);

  return (
    <Container>
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                create monitor
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">
                  create monitor
                </DialogTitle>
              </DialogHeader>
              <CreateMonitorForm />
            </DialogContent>
          </Dialog>

          {isSuccess ? (
            data?.length ? (
              <DataTable field="model" columns={columns} data={data} />
            ) : (
              <Alert>
                <AlertTitle>monitors dont exits yet 😭</AlertTitle>
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

MonitorsPage.displayName = "monitors-page";

export default MonitorsPage;
