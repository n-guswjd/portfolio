import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

function ProjectCard({ index, type, title, description, stack, detail }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-[420px] rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-700">
            📄 {index}번째 프로젝트
          </span>
          <span className="text-sm text-subtext">{type}</span>
        </div>

        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-subtext mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {s}
            </span>
          ))}
        </div>

        <hr className="mb-4 border-slate-100" />

        <div className="flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="text-sm font-medium text-primary-600 hover:underline flex items-center gap-1"
          >
            자세히 보기 →
          </button>
        </div>
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
