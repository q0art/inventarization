import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useGetAllBrandsQuery } from "@/entities/brand";
import { CpuWithBrandName, useUpdateCpuMutation } from "@/entities/cpu";
import { CreateCpuSchema } from "@/pages/cpus/model/create-cpu-schema";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";

interface Props
  extends Pick<CpuWithBrandName, "model" | "manufacturerCode" | "brand"> {
  id: string;
}

const UpdateCpuForm: FC<Props> = ({ id, model, manufacturerCode, brand }) => {
  const [updateCpu, { isError, error }] = useUpdateCpuMutation();
  const { data: brands } = useGetAllBrandsQuery();

  const form = useForm({
    resolver: zodResolver(CreateCpuSchema),
    defaultValues: {
      model: model || "",
      manufacturerCode: manufacturerCode || "",
      brandId: brand.id || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateCpuSchema>) => {
    await updateCpu({ id, dto: values });

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
          name={"model"}
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  placeholder="unique cpu model"
                  type="text"
                  className="relative"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-10 text-start" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"manufacturerCode"}
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  placeholder="unique cpu manufacturer code"
                  type="text"
                  className="relative"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-10 text-start" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brandId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? brands?.find((brand) => brand.id === field.value)
                            ?.name
                        : "select brand"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {brands?.map((brand) => (
                          <CommandItem
                            value={brand.name}
                            key={brand.id}
                            onSelect={() => {
                              form.setValue("brandId", brand.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                brand.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {brand.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
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

UpdateCpuForm.displayName = "create-cpu-form";

export { UpdateCpuForm };
