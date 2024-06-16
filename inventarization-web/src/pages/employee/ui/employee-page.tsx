import { FC } from "react";
import { useParams } from "react-router-dom";

const EmployeePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return <div>employee page</div>;
};

export default EmployeePage;
