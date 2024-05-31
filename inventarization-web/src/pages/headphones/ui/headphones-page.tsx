import {
  useCreateHeadphoneMutation,
  useDeleteHeadphoneMutation,
  useGetAllHeadphonesQuery,
  useUpdateHeadphoneMutation,
} from "@/entities/component";
import { CreateComponentForm, createTableColumns } from "@/features/component";
import { DataTableWrapper } from "@/features/component";
import { DialogWrapper } from "@/widgets/dialog-wrapper";
import { FC } from "react";

const HeadphonesPage: FC = () => {
  const { data, isSuccess } = useGetAllHeadphonesQuery();
  const [onCreate, { isError: isErrorCreate, error: errorCreate }] =
    useCreateHeadphoneMutation();
  const [onUpdate, { isError: isErrorUpdate, error: errorUpdate }] =
    useUpdateHeadphoneMutation();
  const [onDelete] = useDeleteHeadphoneMutation();

  const columns = createTableColumns({
    onDelete,
    isErrorUpdate,
    errorUpdate,
    onUpdate,
  });

  return (
    <div className="container">
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <DialogWrapper label="create">
            <CreateComponentForm
              isError={isErrorCreate}
              error={errorCreate}
              onCreate={onCreate}
            />
          </DialogWrapper>

          <DataTableWrapper
            isSuccess={isSuccess}
            data={data || []}
            columns={columns}
            label={"headphones"}
          />
        </div>
      </div>
    </div>
  );
};

HeadphonesPage.displayName = "headphones-page";

export default HeadphonesPage;
