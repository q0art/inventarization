import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useUpdateDepartamentMutation } from "@/entities/departament";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { UpdateDepartamentSchema } from "./../model/update-departament-schema";

interface Props {
  id: string;
  prevName: string;
}

const UpdateDepartamentForm: FC<Props> = ({ id, prevName }) => {
  const [updateDepartament, { isError, error }] =
    useUpdateDepartamentMutation();

  const form = useForm({
    resolver: zodResolver(UpdateDepartamentSchema),
    defaultValues: {
      name: prevName,
    },
  });

  const onSubmit = async (values: z.infer<typeof UpdateDepartamentSchema>) => {
    await updateDepartament({ id, dto: values });

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  placeholder="unique departament name"
                  type="text"
                  className="relative"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-10 text-start" />
            </FormItem>
          )}
        />

        {isError && (
          <div className="rounded-md border-[1px] border-neutral-500 bg-red-500 px-5 py-3 text-center">
            <span className="text-neutral-100">
              {/*@ts-ignore*/}
              {error?.data.message}
            </span>
          </div>
        )}

        <Button variant="outline" type="submit">
          update
        </Button>
      </form>
    </Form>
  );
};

UpdateDepartamentForm.displayName = "update-departament-form";

export { UpdateDepartamentForm };
