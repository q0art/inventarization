import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { SignInForm } from "@/features/sign-in";
import { Button } from "@/shared/ui/button.tsx";
import { useNavigate } from "react-router-dom";

const SignInPage: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/auth/sign-up");
  };

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter>
        <div>
          <Button onClick={onClick} variant="link">
            dont't have an account yet? sign up
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

SignInPage.displayName = "sign-in-page";

export default SignInPage;
