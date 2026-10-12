import Tree from "../assets/tree.png";
import PetCareScreen from "../assets/pet-care.gif";
import DearObjetScreen from "../assets/dear-objet.mp4";

import { ChevronDown } from "lucide-react";

import ProjectCard from "./ProjectCard";

const firstProjectShowcase = (
  <div className="flex flex-col gap-3">
    <div className="flex flex-col gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-bold text-ink">
          🔘 버튼 시스템 (Button Variants)
        </h5>
        <a
          href="https://www.figma.com/design/HVjfwS2b8Rlacxdy3u53jo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-primary-100 bg-primary-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary-700 transition-colors hover:bg-primary-100"
        >
          피그마 바로가기 ↗
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded-md border border-pet-care-main-1 bg-pet-care-main-1 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pet-care-main-1/90"
        >
          Primary
        </button>

        <button
          type="button"
          className="rounded-md border border-pet-care-main-1 bg-pet-care-main-1 px-4 py-2 text-sm font-semibold text-white transition-colors"
        >
          Secondary
        </button>

        <button
          type="button"
          className="rounded-md border border-pet-care-main-1 bg-white px-4 py-2 text-sm font-semibold text-pet-care-main-1 transition-colors hover:bg-slate-100"
        >
          Outline
        </button>

        <button
          type="button"
          className="border-b-2 border-b-pet-care-main-1 bg-white px-4 py-2 text-sm font-semibold text-pet-care-main-1"
        >
          User Tab
        </button>

        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-md border border-pet-care-gray-3 bg-pet-care-main-2 px-4 py-2 text-sm font-semibold text-pet-care-gray-3"
        >
          Disabled
        </button>
      </div>
    </div>

    <div className="flex flex-col gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-bold text-ink">
          🌈 토큰 컬러 팔레트 (Design Tokens)
        </h5>
        <span className="font-mono text-xs text-subtext">All 12 Tokens</span>
      </div>

      <div className="max-h-40 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid grid-cols-4 gap-2.5">
          <div className="flex h-16 items-end rounded-lg bg-pet-care-main-1 p-2 font-mono text-[11px] font-semibold text-white">
            main-1
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-main-2 p-2 font-mono text-[11px] font-semibold text-pet-care-gray-7">
            main-2
          </div>
          <div className="flex h-16 items-end rounded-lg border border-gray-200 bg-pet-care-gray-1 p-2 font-mono text-[11px] font-semibold text-pet-care-gray-7">
            gray-1
          </div>
          <div className="flex h-16 items-end rounded-lg border border-gray-200 bg-pet-care-gray-2 p-2 font-mono text-[11px] font-semibold text-pet-care-gray-7">
            gray-2
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-gray-3 p-2 font-mono text-[11px] font-semibold text-pet-care-gray-7">
            gray-3
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-gray-4 p-2 font-mono text-[11px] font-semibold text-pet-care-gray-7">
            gray-4
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-gray-5 p-2 font-mono text-[11px] font-semibold text-white">
            gray-5
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-gray-6 p-2 font-mono text-[11px] font-semibold text-white">
            gray-6
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-gray-7 p-2 font-mono text-[11px] font-semibold text-white">
            gray-7
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-blue-1 p-2 font-mono text-[11px] font-semibold text-white">
            blue-1
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-blue-2 p-2 font-mono text-[11px] font-semibold text-white">
            blue-2
          </div>
          <div className="flex h-16 items-end rounded-lg bg-pet-care-red p-2 font-mono text-[11px] font-semibold text-white">
            red
          </div>
        </div>
      </div>
    </div>
  </div>
);

const firstProjectDetail = {
  status: "배포 완료",
  demoUrl: "https://n-guswjd.github.io/PetCare_client/",
  githubUrl: "https://github.com/n-guswjd/PetCare_client",
  categories: ["개인 프로젝트"],
  period: "2025.09 — 2025.10",
  tabs: [
    {
      value: "screen",
      label: "🖥\u00A0화면 미리보기",
      content: (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary-300" />
            <span className="ml-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-[11px] text-subtext">
              pet-care-2025.vercel.app
            </span>
          </div>

          <img
            src={PetCareScreen}
            alt="PetCare 화면 미리보기"
            className="block w-full"
          />
        </div>
      ),
    },
    {
      value: "showcase",
      label: "🎨\u00A0디자인 시스템 & 토큰",
      content: firstProjectShowcase,
    },
  ],
  snippet: [
    { tone: "comment", text: "# 1. 저장소 복제 및 패키지 설치" },
    {
      tone: "command",
      text: "git clone https://github.com/n-guswjd/PetCare_client.git",
    },
    { tone: "command", text: "npm install" },
    { tone: "comment", text: "# 2. 스토리북 컴포넌트 구동" },
    { tone: "run", text: "npm run storybook" },
  ],
  highlights: [
    "기획,디자인 개발까지 혼자 진행한 개인 프로젝트",
    "반응형 토큰 기반의 재사용 가능한 UI 컴포넌트 라이브러리",
  ],
};

const secondProjectShowcase = (
  <div className="flex flex-col gap-3">
    <div className="flex flex-col gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-bold text-ink">
          🔘 버튼 시스템 (Button Variants)
        </h5>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded-lg border-2 border-daer-objet-blue-100 bg-daer-objet-blue-100 px-3 py-1.5 text-sm font-semibold text-daer-objet-white transition-all duration-200 hover:border-daer-objet-blue-200 hover:bg-daer-objet-blue-200 active:scale-95 active:border-daer-objet-blue-200 active:bg-daer-objet-blue-200"
        >
          Primary
        </button>

        <button
          type="button"
          className="rounded-lg border-2 border-daer-objet-gray-900 bg-daer-objet-white px-3 py-1.5 text-sm font-semibold text-daer-objet-gray-900 transition-all duration-200 hover:border-daer-objet-gray-900 hover:bg-daer-objet-gray-100 hover:text-daer-objet-gray-900 active:scale-95 active:border-daer-objet-gray-900 active:bg-daer-objet-gray-200 active:text-daer-objet-gray-900"
        >
          Secondary Light
        </button>

        <button
          type="button"
          className="rounded-lg border-2 border-daer-objet-gray-900 bg-daer-objet-gray-900 px-3 py-1.5 text-sm font-semibold text-daer-objet-white transition-all duration-200 hover:border-daer-objet-gray-700 hover:bg-daer-objet-gray-700 hover:text-daer-objet-white active:scale-95 active:border-daer-objet-black active:bg-daer-objet-black active:text-daer-objet-white"
        >
          Secondary Dark
        </button>

        <button
          type="button"
          className="text-daer-objet-black transition-all duration-200 disabled:text-daer-objet-gray-200"
        >
          <ChevronDown className="h-5 w-5" />
        </button>

        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-lg border-2 border-daer-objet-gray-200 bg-daer-objet-gray-200 px-3 py-1.5 text-sm font-semibold text-daer-objet-gray-500 transition-all duration-200"
        >
          Disabled
        </button>
      </div>
    </div>

    <div className="flex flex-col gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-bold text-ink">
          🌈 토큰 컬러 팔레트 (Design Tokens)
        </h5>
        <span className="font-mono text-xs text-subtext">All 10 Tokens</span>
      </div>

      <div className="max-h-40 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid grid-cols-5 gap-2.5">
          <div className="flex h-16 items-end rounded-lg bg-daer-objet-blue-100 p-2 font-mono text-[10px] font-semibold text-white">
            blue-100
          </div>
          <div className="flex h-16 items-end rounded-lg bg-daer-objet-blue-200 p-2 font-mono text-[10px] font-semibold text-white">
            blue-200
          </div>
          <div className="flex h-16 items-end rounded-lg border border-slate-200 bg-daer-objet-gray-100 p-2 font-mono text-[10px] font-semibold text-daer-objet-gray-900">
            gray-100
          </div>
          <div className="flex h-16 items-end rounded-lg border border-slate-200 bg-daer-objet-gray-200 p-2 font-mono text-[10px] font-semibold text-daer-objet-gray-900">
            gray-200
          </div>
          <div className="flex h-16 items-end rounded-lg bg-daer-objet-gray-300 p-2 font-mono text-[10px] font-semibold text-daer-objet-gray-900">
            gray-300
          </div>
          <div className="flex h-16 items-end rounded-lg bg-daer-objet-gray-500 p-2 font-mono text-[10px] font-semibold text-white">
            gray-500
          </div>
          <div className="flex h-16 items-end rounded-lg bg-daer-objet-gray-700 p-2 font-mono text-[10px] font-semibold text-white">
            gray-700
          </div>
          <div className="flex h-16 items-end rounded-lg bg-daer-objet-gray-900 p-2 font-mono text-[10px] font-semibold text-white">
            gray-900
          </div>
          <div className="flex h-16 items-end rounded-lg bg-daer-objet-black p-2 font-mono text-[10px] font-semibold text-white">
            black
          </div>
          <div className="flex h-16 items-end rounded-lg border border-slate-200 bg-daer-objet-white p-2 font-mono text-[10px] font-semibold text-daer-objet-gray-900">
            white
          </div>
        </div>
      </div>
    </div>
  </div>
);

const secondProjectDetail = {
  status: "배포 전",
  // demoUrl: "",
  // githubUrl: "",
  categories: ["팀 프로젝트", "프론트엔드"],
  period: "2025.9 — 2026.05",
  tabs: [
    {
      value: "screen",
      label: "🖥\u00A0화면 미리보기",
      content: (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary-300" />
            <span className="ml-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-[11px] text-subtext">
              daer-objet.vercel.app
            </span>
          </div>

          <video
            src={DearObjetScreen}
            autoPlay
            loop
            muted
            playsInline
            className="block w-full object-cover"
          />
        </div>
      ),
    },
    {
      value: "showcase",
      label: "🎨\u00A0디자인 시스템 & 토큰",
      content: secondProjectShowcase,
    },
  ],
  snippet: [
    // 추후 업데이트 예정
    // { tone: "comment", text: "# 1. 저장소 복제 및 패키지 설치" },
    // {
    //   tone: "command",
    //   text: "git clone ",
    // },
    // { tone: "command", text: "npm install" },
    // { tone: "comment", text: "# 2. 개발 서버 실행" },
    // { tone: "run", text: "npm run dev" },
  ],
  highlights: [
    // "소품샵 관리를 위한 실시간 알림 및 통계 웹 플랫폼",
    // "Redux Toolkit과 WebSocket(STOMP)을 활용한 반응형 프론트엔드 구축",
  ],
};

function ProjectsView() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center">
      <div className="relative">
        <svg
          className="pointer-events-none absolute top-[38%] right-[calc(100%-3vw)] z-20 h-8 w-[8vw] -translate-y-1/2 animate-float-slow overflow-visible"
          viewBox="0 0 160 40"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="glow-left" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            d="M 155 20 Q 80 -5, 5 20"
            fill="none"
            className="stroke-primary-600"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="155" cy="20" r="10" fill="url(#glow-left)" />
          <circle cx="155" cy="20" r="4" className="fill-primary-600" />
        </svg>

        <svg
          className="pointer-events-none absolute top-[28%] left-[calc(100%-3vw)] z-20 h-8 w-[8vw] -translate-y-1/2 animate-float-reverse overflow-visible"
          viewBox="0 0 160 40"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="glow-right" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            d="M 5 20 Q 80 -5, 155 20"
            fill="none"
            className="stroke-primary-600"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="5" cy="20" r="10" fill="url(#glow-right)" />
          <circle cx="5" cy="20" r="4" className="fill-primary-600" />
        </svg>

        <img
          src={Tree}
          alt="작업 정원"
          className="relative z-10 h-auto w-[24vw] max-w-[300px] object-contain"
        />

        <ProjectCard
          index="첫"
          type="design, frontend"
          title="동물병원 웹 플랫폼"
          description="기획, 디자인, 개발까지 혼자 진행한 개인 프로젝트"
          stack={[
            "React19",
            "TypeScript",
            "Tailwind CSS v4",
            "Storybook v10",
            "Vite",
            "React Router v7",
            "Radix UI",
            "CVA",
            "Lucide Icons",
            "Vitest",
            "Playwright",
            "ESLint v9",
          ]}
          detail={firstProjectDetail}
          className="absolute right-full top-[60%] z-10 mr-[5vw] -translate-y-1/2 animate-float-slow"
        />

        <ProjectCard
          index="두"
          type="frontend"
          title="소품샵 관리 플랫폼"
          description="디자이너1, 프론트엔드2, 백엔드3명이 함께한 팀 프로젝트"
          stack={[
            "React19",
            "TypeScript",
            "Redux Toolkit",
            "React Kakao Maps SDK",
            "React Calendar",
            "Lucide Icons",
            "Storybook v9",
            "ESLint & Prettier",
          ]}
          detail={secondProjectDetail}
          className="absolute left-full top-1/2 z-10 ml-[5vw] -translate-y-1/2 animate-float-reverse"
        />
      </div>
    </main>
  );
}

export default ProjectsView;
