import { ProjectTile } from "./elements";

function ProjectsSection() {
  return (
    <section id="#projects-section" className="container text-center section-border">
      <div className="text-start">
        <h3 className="my-5 fs-2rem-to-3rem">Projects</h3>
      </div>
      <div className="row d-flex justify-content-between gap-3 px-3 px-md-0">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </section>
  );
}

export default ProjectsSection;
