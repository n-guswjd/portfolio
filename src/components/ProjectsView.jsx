import Tree from "../assets/tree.png";
import ProjectCard from "./ProjectCard";

function ProjectsView() {
  return (
    <main className="relative flex items-center justify-center min-h-[70vh]">
      <div className="relative">
        <img
          src={Tree}
          alt="작업 정원"
          className="w-[24vw] max-w-[300px] h-auto object-contain"
        />

        <ProjectCard
          index="첫"
          type="frontend"
          title="동물병원 웹 플랫폼"
          description="기획,디자인,개발까지 전반적인 웹 플랫폼 개발"
          stack={["React", "TypeScript", "Tailwind CSS", "Storybook"]}
          detail="프로젝트 내용"
          className="absolute top-1/2 right-full -translate-y-1/2 mr-[7vw]"
        />

        <ProjectCard
          index="두"
          type="frontend"
          title="두번째 프로젝트"
          description="프로젝트 내용"
          stack={["React", "TypeScript", "Tailwind CSS", "Storybook"]}
          detail="프로젝트 내용"
          className="absolute top-1/2 left-full -translate-y-1/2 ml-[7vw]"
        />
      </div>
    </main>
  );
}

export default ProjectsView;
