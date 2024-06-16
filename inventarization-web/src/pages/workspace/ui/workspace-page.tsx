import { FC } from "react";
import { useParams } from "react-router-dom";

const WorkspacePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return <div>Workspace page</div>;
};

export default WorkspacePage;
