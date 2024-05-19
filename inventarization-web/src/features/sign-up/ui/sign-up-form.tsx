import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

import { setAuth, useSignUpMutation } from "@/entities/auth";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { RouterState } from "@/shared/types/router-state";
import { Button } from "@/shared/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { PasswordToggle } from "@/widgets/password-toggle";

import { signUpSchema } from "./../model/sign-up-schema";

const SignUpForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state }: Location<RouterState> = useLocation();

  const [signUp, { isError, error }] = useSignUpMutation();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const { email, password } = values;
    const { accessToken } = await signUp({ email, password }).unwrap();

    if (accessToken) {
      dispatch(setAuth({ accessToken }));
      navigate(state?.from?.pathname || "/", { replace: true });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  {...field}
                  placeholder="your.email@email.com"
                  type="email"
                  className="relative"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-10 text-start" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <PasswordToggle
                isOpen={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="absolute bottom-0 right-0 top-0 z-10 my-auto"
              />

              <FormControl>
                <Input
                  {...field}
                  placeholder={isOpen ? "123456" : "******"}
                  type={isOpen ? "text" : "password"}
                  className="relative"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-10 text-start" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem className="relative">
              <PasswordToggle
                isOpen={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="absolute bottom-0 right-0 top-0 z-10 my-auto"
              />

              <FormControl>
                <Input
                  {...field}
                  placeholder={isOpen ? "123456" : "******"}
                  type={isOpen ? "text" : "password"}
                  className="relative"
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 left-0 right-0 top-10 text-start" />
            </FormItem>
          )}
        />

        {isError && (
          <div className="rounded-md border-[1px] border-neutral-500 bg-red-500 px-5 py-3 text-center">
            {/*@ts-expect-error*/}
            <span className="text-neutral-100">{error?.data.message}</span>
          </div>
        )}

        <Button type="submit">sign up</Button>
      </form>
    </Form>
  );
};

SignUpForm.displayName = "sign-up-form";

export { SignUpForm };
