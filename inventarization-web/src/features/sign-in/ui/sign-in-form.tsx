import { FC, useState } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { RouterState } from "@/shared/types/router-state";
import { setAuth, useSignInMutation } from "@/entities/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/features/sign-in/model/sign-in-schema.ts";
import { z } from "zod";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button.tsx";
import { PasswordToggle } from "@/widgets/password-toggle";

const SignInForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state }: Location<RouterState> = useLocation();

  const [signIn] = useSignInMutation();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log({ ...values });

    const { accessToken } = await signIn(values).unwrap();

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

        <Button type="submit">sign in</Button>
      </form>
    </Form>
  );
};

SignInForm.displayName = "sign-in-form";

export { SignInForm };
