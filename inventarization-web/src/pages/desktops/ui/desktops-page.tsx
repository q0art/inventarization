import {
  useCreateDesktopMutation,
  useDeleteDesktopMutation,
  useGetAllDesktopsQuery,
  useUpdateDesktopMutation,
} from "@/entities/desktop";
import { CreateDesktopForm, UpdateDesktopForm } from "@/features/desktop";
import { cn } from "@/shared/lib/cn";
import { Button, buttonVariants } from "@/shared/ui/button";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { LinkIcon } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

const DesktopsPage: FC = () => {
  const { data: desktops, isSuccess } = useGetAllDesktopsQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateDesktopMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateDesktopMutation();
  const [onDelete] = useDeleteDesktopMutation();

  console.log(desktops);

  return (
    <div className="container">
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <DialogWrapper label="create">
            <CreateDesktopForm
              isError={isErrorCreate}
              error={errorCreate}
              onCreate={onCreate}
            />
          </DialogWrapper>

          {desktops?.length && isSuccess ? (
            desktops.map((desktop) => (
              <div
                key={desktop.id}
                className="flex w-1/2 items-center justify-between rounded-md border-[1px] border-zinc-500 p-3"
              >
                <Link
                  to={`/desktops/${desktop.id}`}
                  className={cn(
                    "flex items-center gap-3",
                    buttonVariants({
                      variant: "ghost",
                    }),
                  )}
                >
                  <LinkIcon className="icon" />
                  <h3>{desktop.name}</h3>
                </Link>

                <div className="flex items-center gap-3">
                  <DialogWrapper label="update">
                    <UpdateDesktopForm
                      name={desktop.name}
                      cpuId={desktop.cpu.id}
                      gpuId={desktop.gpu.id}
                      ramId={desktop.ram.id}
                      ssdId={desktop.ssd.id}
                      motherboardId={desktop.motherboard.id}
                      caseId={desktop.case.id}
                      coolerId={desktop.cooler.id}
                      id={desktop.id}
                      isError={isErrorUpdate}
                      error={errorUpdate}
                      onUpdate={onUpdate}
                    />
                  </DialogWrapper>

                  <Button
                    variant="outline"
                    onClick={() => onDelete(desktop.id)}
                  >
                    delete
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>no content</p>
          )}
        </div>
      </div>
    </div>
  );
};

DesktopsPage.displayName = "desktops-page";

export default DesktopsPage;
