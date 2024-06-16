import { FC } from "react";
import { useParams } from "react-router-dom";

const DesktopPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return <div>desktop page</div>;
};

export default DesktopPage;
