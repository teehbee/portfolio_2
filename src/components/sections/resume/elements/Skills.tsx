import { htmlIcon, cssIcon, jsIcon, bootstrapIcon, reactIcon, figmaIcon } from "../../../../assets/icons";

import SkillsTile from "./SkillsTile";
function Skills() {
  return (
    <div className="text-center">
      <h4 className="yellow-font fs-1-5rem-to-2rem my-5">Skills</h4>
      <div className="row row-gap-3 mx-auto d-flex justify-content-center">
        <SkillsTile skillIcon={htmlIcon} skillTitle={"HTML"} />
        <SkillsTile skillIcon={cssIcon} skillTitle={"CSS"} />
        <SkillsTile skillIcon={jsIcon} skillTitle={"JS"} />
        <SkillsTile skillIcon={bootstrapIcon} skillTitle={"Bootstrap"} />
        <SkillsTile skillIcon={reactIcon} skillTitle={"React"} />
        <SkillsTile skillIcon={figmaIcon} skillTitle={"Figma"} />
      </div>
    </div>
  );
}

export default Skills;
