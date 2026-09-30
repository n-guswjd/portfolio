import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

function ProjectCard({
  index,
  type,
  title,
  description,
  stack,
  detail,
  className,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "w-[24vw] min-w-[240px] max-w-[420px] h-auto min-h-[220px] rounded-2xl border border-primary-100 bg-white p-5 shadow-sm",
          className,
        )}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-sm font-medium text-primary-700">
            📄 {index}번째 프로젝트
          </span>
          <span className="text-sm text-subtext">{type}</span>
        </div>

        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-subtext mb-3">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {s}
            </span>
          ))}
        </div>

        <hr className="mb-3 border-slate-100" />

        <button
          onClick={() => setOpen(true)}
          className="text-sm font-medium text-primary-600 hover:underline"
        >
          자세히 보기 →
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-subtext">{detail}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProjectCard;
