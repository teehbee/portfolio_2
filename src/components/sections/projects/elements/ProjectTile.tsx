import { projectTileInterface } from "../../../interfaces";
import { playIcon, codeIcon } from "../../../../assets/icons";

const ProjectTile: React.FC<projectTileInterface> = ({ projectImg, projectDescription, liveSiteLink, repositoryLink, projectTitle }) => {
  return (
    <div className="project-tile col-12 col-md-6 col-lg-4 p-3 neg-margin-1rem d-flex flex-column justify-content-between">
      <div className="text-start">
        <p className="pt-2 fs-1rem-to-1-5rem fw-bold">{projectTitle}</p>
      </div>
      <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
        <img className="project-tile-img img-fluid" src={projectImg} alt="screenshot from project" />
      </a>
      <div className="text-md-start">
        <p className="py-2 mb-0 fs-0-75rem-to-1rem fw-bold yellow-font">{projectDescription}</p>
      </div>
      <div className="text-end">
        <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
          <img className="project-tile-icon img-fluid" src={playIcon} aria-label="link to live site" />
        </a>
        <a href={repositoryLink} target="_blank" rel="noopener noreferrer">
          <img className="project-tile-icon img-fluid" src={codeIcon} aria-label="link to repository" />
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;
