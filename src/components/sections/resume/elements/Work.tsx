import ResumeTile from "./ResumeTile";
import { workIcon } from "../../../../assets/icons";

function Work() {
  return (
    <div className="col-12 col-lg-7">
      <h4 className="yellow-font fs-1-5rem-to-2rem my-5">Experience</h4>
      <ResumeTile resumeIcon={workIcon} fromYear={"2022"} toYear={"2022"} nameOfStudyorPosition={"study program"} nameOfSchoolOrEmployer={"Name of school"} />
      <ResumeTile resumeIcon={workIcon} fromYear={"2022"} toYear={"2022"} nameOfStudyorPosition={"study program"} nameOfSchoolOrEmployer={"Name of school"} />
      <ResumeTile resumeIcon={workIcon} fromYear={"2022"} toYear={"2022"} nameOfStudyorPosition={"study program"} nameOfSchoolOrEmployer={"Name of school"} />
    </div>
  );
}

export default Work;
