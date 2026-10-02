import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Globe,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function ProjectDetail({ title, stack, detail }) {
  const {
    status,
    demoUrl,
    githubUrl,
    categories,
    period,
    tabs,
    snippet,
    highlights,
  } = detail;

  const [tab, setTab] = useState(tabs[0].value);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        snippet.map((line) => line.text).join("\n"),
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-primary-800">
            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            {status}
          </span>
        </div>

        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
        >
          <Globe size={16} />
          라이브 데모 바로가기
        </a>
      </div>

      <hr className="border-slate-100" />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
              >
                {category}
              </span>
            ))}
          </div>
          <span className="font-mono text-sm text-subtext">{period}</span>
        </div>

        <DialogTitle className="font-display text-3xl font-bold text-ink">
          {title}
        </DialogTitle>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Tabs
          value={tab}
          onValueChange={setTab}
          className="h-fit flex-col gap-4 rounded-3xl border border-primary-100 p-5"
        >
          <TabsList variant="soft">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value} className="px-4 py-2">
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value}>
              {t.content}
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-2.5">
            <h4 className="flex items-center gap-2 text-sm font-bold text-ink">
              <Layers size={16} className="text-primary-600" />
              사용 기술 스택 (Tech Stack)
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary-100 bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-sm font-bold text-ink">
                <Terminal size={16} className="text-primary-600" />
                로컬 실행 방법 (Getting Started)
              </h4>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-800"
              >
                <Copy size={14} />
                {copied ? "복사됨" : "스니펫 복사"}
              </button>
            </div>

            <div className="rounded-2xl bg-ink p-4 font-mono text-[13px] leading-relaxed">
              {snippet.map((line) => (
                <p
                  key={line.text}
                  className={cn(
                    "break-words",
                    line.tone === "comment" && "mt-2 text-slate-400 first:mt-0",
                    line.tone === "command" && "text-slate-100",
                    line.tone === "run" && "text-primary-400",
                  )}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h4 className="flex items-center gap-2 text-sm font-bold text-ink">
              <Sparkles size={16} className="text-primary-600" />
              주요 구현 (Highlights)
            </h4>
            <ul className="flex flex-col gap-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Check size={12} />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <hr className="border-slate-100" />

      <div className="flex justify-end">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
        >
          GitHub에서 코드 확인
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;
