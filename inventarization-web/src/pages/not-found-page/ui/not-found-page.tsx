import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card.tsx";
import { Button } from "@/shared/ui/button.tsx";
import { useNavigate } from "react-router-dom";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="text-center">
        <CardHeader>
          <CardTitle>oops page not found 😢</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={onClick} variant={"link"}>
            back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

NotFoundPage.displayName = "not-found-page";

export default NotFoundPage;
