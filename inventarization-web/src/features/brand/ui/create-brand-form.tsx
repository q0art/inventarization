import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CreateBrandSchema } from "@/features/brand";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { CreateBrandDto } from "@/entities/brand";

interface Props {
  isError: boolean;
  error: unknown;
  onCreate: (dto: CreateBrandDto) => void;
}

export const CreateBrandForm: FC<Props> = ({ isError, error, onCreate }) => {
  const form = useForm({
    resolver: zodResolver(CreateBrandSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateBrandSchema>) => {
    await onCreate(values);

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
          name={"name"}
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  placeholder="unique brand name"
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
              {/* @ts-ignore */}
              {error?.data?.message || "something went wrong 🤕"}
            </span>
          </div>
        )}

        <Button variant="outline" type="submit">
          create
        </Button>
      </form>
    </Form>
  );
};

CreateBrandForm.displayName = "create-brand-form";
