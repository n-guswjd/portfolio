import ProjectCard from "./ProjectCard";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

export const First = {
  args: {
    index: "첫",
    type: "frontend",
    title: "동물병원 웹 플랫폼",
    description: "기획,디자인,개발까지 전반적인 웹 플랫폼 개발",
    stack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    detail: "프로젝트 내용",
  },
};

export const Second = {
  args: {
    index: "두",
    type: "frontend",
    title: "두번째 프로젝트",
    description: "프로젝트 내용",
    stack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    detail: "프로젝트 내용",
  },
};
