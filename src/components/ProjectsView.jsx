import Tree from "../assets/tree.png";

function ProjectsView() {
  return (
    <main className="flex items-center justify-center min-h-[70vh]">
      <img
        src={Tree}
        alt="작업 정원"
        className="w-[50vw] max-w-[650px] h-auto object-contain"
      />
    </main>
  );
}

export default ProjectsView;
