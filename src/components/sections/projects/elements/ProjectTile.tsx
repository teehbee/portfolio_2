import { Link } from "react-router-dom";
import { projectPlaceHolder } from "../../../../assets/img";
import { playIcon, codeIcon } from "../../../../assets/icons";

function ProjectTile() {
  return (
    <div className="project-tile col-12 col-md-6 col-lg-4 p-3 neg-margin-1rem">
      <div className="text-start">
        <p className="pt-2 fs-1rem-to-1-5rem fw-bold">Name of project</p>
      </div>
      <img className="project-tile-img img-fluid" src={projectPlaceHolder} alt="screenshot from project" />
      <div className="text-md-start">
        <p className="py-2 mb-0 fs-0-75rem-to-1rem fw-bold yellow-font">Short project description Short project description Short project description Short project description</p>
      </div>
      <div className="text-end">
        <Link to="/">
          <img className="project-tile-icon img-fluid" src={playIcon} aria-label="link to live site" />
        </Link>
        <Link to="/">
          <img className="project-tile-icon img-fluid" src={codeIcon} aria-label="link to repository" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectTile;
