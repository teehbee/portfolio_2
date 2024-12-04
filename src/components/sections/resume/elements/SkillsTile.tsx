import { skillTileInterface } from "../../../interfaces";

const SkillsTile: React.FC<skillTileInterface> = ({ skillIcon, skillTitle }) => {
  return (
    <div className="skills-tile col-2 mx-2 d-flex flex-column align-items-center justify-content-around pt-3">
      <img className="skill-icon" src={skillIcon} alt="" />
      <p className="fs-0-75rem-to-1rem-lg">{skillTitle}</p>
    </div>
  );
};

export default SkillsTile;
