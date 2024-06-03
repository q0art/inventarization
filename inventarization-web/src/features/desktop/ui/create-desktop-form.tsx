import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CreateDesktopSchema } from "@/features/desktop";
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
import { CreateDesktopDto } from "@/entities/desktop";
import {
  useGetAllCasesQuery,
  useGetAllCoolersQuery,
  useGetAllCpusQuery,
  useGetAllGpusQuery,
  useGetAllMotherboardsQuery,
  useGetAllRamsQuery,
  useGetAllSsdsQuery,
} from "@/entities/component";

interface Props {
  isError: boolean;
  error: unknown;
  onCreate: (dto: CreateDesktopDto) => void;
}

export const CreateDesktopForm: FC<Props> = ({ isError, error, onCreate }) => {
  const { data: cpus } = useGetAllCpusQuery();
  const { data: gpus } = useGetAllGpusQuery();
  const { data: rams } = useGetAllRamsQuery();
  const { data: ssds } = useGetAllSsdsQuery();
  const { data: motherboards } = useGetAllMotherboardsQuery();
  const { data: cases } = useGetAllCasesQuery();
  const { data: coolers } = useGetAllCoolersQuery();

  const form = useForm({
    resolver: zodResolver(CreateDesktopSchema),
    defaultValues: {
      name: "",
      cpuId: "",
      gpuId: "",
      ramId: "",
      ssdId: "",
      motherboardId: "",
      caseId: "",
      coolerId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateDesktopSchema>) => {
    onCreate(values);

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
                  placeholder="unique model"
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
          name="cpuId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? cpus?.find((cpu) => cpu.id === field.value)?.model
                        : "select cpu"}
                      <ChevronsUpDown className="icon ml-2 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {cpus?.map((cpu) => (
                          <CommandItem
                            value={cpu.model}
                            key={cpu.id}
                            onSelect={() => {
                              form.setValue("cpuId", cpu.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "icon mr-2",
                                cpu.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {cpu.model}
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

        <FormField
          control={form.control}
          name="gpuId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? gpus?.find((gpu) => gpu.id === field.value)?.model
                        : "select gpu"}
                      <ChevronsUpDown className="icon ml-2 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {gpus?.map((gpu) => (
                          <CommandItem
                            value={gpu.model}
                            key={gpu.id}
                            onSelect={() => {
                              form.setValue("gpuId", gpu.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "icon mr-2",
                                gpu.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {gpu.model}
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

        <FormField
          control={form.control}
          name="ramId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? rams?.find((ram) => ram.id === field.value)?.model
                        : "select ram"}
                      <ChevronsUpDown className="icon ml-2 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {rams?.map((ram) => (
                          <CommandItem
                            value={ram.model}
                            key={ram.id}
                            onSelect={() => {
                              form.setValue("ramId", ram.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "icon mr-2",
                                ram.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {ram.model}
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

        <FormField
          control={form.control}
          name="ssdId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? ssds?.find((ssd) => ssd.id === field.value)?.model
                        : "select ssd"}
                      <ChevronsUpDown className="icon ml-2 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {ssds?.map((ssd) => (
                          <CommandItem
                            value={ssd.model}
                            key={ssd.id}
                            onSelect={() => {
                              form.setValue("ssdId", ssd.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "icon mr-2",
                                ssd.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {ssd.model}
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

        <FormField
          control={form.control}
          name="motherboardId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? motherboards?.find(
                            (motherboard) => motherboard.id === field.value,
                          )?.model
                        : "select motherboard"}
                      <ChevronsUpDown className="icon ml-2 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {motherboards?.map((motherboard) => (
                          <CommandItem
                            value={motherboard.model}
                            key={motherboard.id}
                            onSelect={() => {
                              form.setValue("motherboardId", motherboard.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "icon mr-2",
                                motherboard.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {motherboard.model}
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

        <FormField
          control={form.control}
          name="caseId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? cases?.find((_case) => _case.id === field.value)
                            ?.model
                        : "select case"}
                      <ChevronsUpDown className="icon ml-2 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {cases?.map((_case) => (
                          <CommandItem
                            value={_case.model}
                            key={_case.id}
                            onSelect={() => {
                              form.setValue("caseId", _case.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "icon mr-2",
                                _case.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {_case.model}
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

        <FormField
          control={form.control}
          name="coolerId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? coolers?.find((cooler) => cooler.id === field.value)
                            ?.model
                        : "select cooler"}
                      <ChevronsUpDown className="icon ml-2 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="search..." />
                    <CommandEmpty>not found</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {coolers?.map((cooler) => (
                          <CommandItem
                            value={cooler.model}
                            key={cooler.id}
                            onSelect={() => {
                              form.setValue("coolerId", cooler.id);
                            }}
                          >
                            <Check
                              className={cn(
                                "icon mr-2",
                                cooler.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {cooler.model}
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

CreateDesktopForm.displayName = "create-desktop-form";
