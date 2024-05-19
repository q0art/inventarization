import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { SignUpForm } from "@/features/sign-up";
import { Button } from "@/shared/ui/button.tsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

const SignUpPage: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/auth/sign-in");
  };

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>sign up 🔥</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter>
        <div className="text-center">
          <Button onClick={onClick} variant="link">
            already have an account? sign in
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

SignUpPage.displayName = "sign-up-page";

export default SignUpPage;
