import { useGetDesktopByIdQuery } from "@/entities/desktop";
import { FC } from "react";
import { useParams } from "react-router-dom";

const DesktopPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  const { data: desktop, isSuccess } = useGetDesktopByIdQuery(id);

  return (
    <div className="container">
      <div className="py-3">
        <div className="flex flex-col items-center justify-center gap-3">
          {desktop && isSuccess ? (
            <div
              key={desktop.id}
              className="flex flex-col items-start justify-between gap-6 rounded-md border-[1px] border-zinc-500 p-6"
            >
              <h3>name: {desktop.name}</h3>
              <h3>cpu model: {desktop.cpu.model}</h3>
              <h3>gpu model: {desktop.gpu.model}</h3>
              <h3>motherboard model: {desktop.motherboard.model}</h3>
              <h3>ram model: {desktop.ram.model}</h3>
              <h3>ssd model: {desktop.ssd.model}</h3>
              <h3>case model: {desktop.case.model}</h3>
              <h3>cooler model: {desktop.cooler.model}</h3>
            </div>
          ) : (
            <p>not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

DesktopPage.displayName = "desktop-page";

export default DesktopPage;
