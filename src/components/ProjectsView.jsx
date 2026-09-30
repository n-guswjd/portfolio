import Tree from "../assets/tree.png";
import ProjectCard from "./ProjectCard";

function ProjectsView() {
  return (
    <main className="relative flex items-center justify-center min-h-[70vh]">
      <div className="relative">
        <svg
          className="absolute top-[38%] right-[calc(100%-3vw)] -translate-y-1/2 w-[8vw] h-8 overflow-visible pointer-events-none z-20 animate-float-slow"
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
            d="M 155 20 Q 80 -5, 5 20"
            fill="none"
            className="stroke-primary-600"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="155" cy="20" r="10" fill="url(#glow-right)" />
          <circle cx="155" cy="20" r="4" className="fill-primary-600" />
        </svg>

        <svg
          className="absolute top-[28%] left-[calc(100%-3vw)] -translate-y-1/2 w-[8vw] h-8 overflow-visible pointer-events-none z-20 animate-float-reverse"
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
            d="M 5 20 Q 80 -5, 155 20"
            fill="none"
            className="stroke-primary-600"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="5" cy="20" r="10" fill="url(#glow-left)" />
          <circle cx="5" cy="20" r="4" className="fill-primary-600" />
        </svg>

        <img
          src={Tree}
          alt="작업 정원"
          className="w-[24vw] max-w-[300px] h-auto object-contain relative z-10"
        />

        <ProjectCard
          index="첫"
          type="frontend"
          title="첫번째 프로젝트"
          description="프로젝트 내용"
          stack={["React", "TypeScript", "Tailwind CSS", "Storybook"]}
          detail="프로젝트 내용"
          className="absolute top-[60%] right-full -translate-y-1/2 mr-[5vw] z-10 animate-float-slow"
        />

        <ProjectCard
          index="두"
          type="frontend"
          title="두번째 프로젝트"
          description="프로젝트 내용"
          stack={["React", "TypeScript", "Tailwind CSS", "Storybook"]}
          detail="프로젝트 내용"
          className="absolute top-1/2 left-full -translate-y-1/2 ml-[5vw] z-10 animate-float-reverse"
        />
      </div>
    </main>
  );
}

export default ProjectsView;
