import ResumeTile from "./ResumeTile";
import { workIcon } from "../../../../assets/icons";

function Work() {
  return (
    <div className="col-12 col-lg-7">
      <h4 className="yellow-font fs-1-5rem-to-2rem my-5">Experience</h4>
      <ResumeTile resumeIcon={workIcon} fromYear={"September 2020"} toYear={"December 2022"} nameOfStudyorPosition={"Motorman"} nameOfSchoolOrEmployer={"Osterøy ferjeselskap AS"} />
      <ResumeTile resumeIcon={workIcon} fromYear={"September 2011"} toYear={"September 2020"} nameOfStudyorPosition={"Able seaman"} nameOfSchoolOrEmployer={"Norled AS"} />
      <ResumeTile resumeIcon={workIcon} fromYear={"July 2007"} toYear={"July 2009"} nameOfStudyorPosition={"Able seaman apprentice"} nameOfSchoolOrEmployer={"Ugland Marine Management AS"} />
    </div>
  );
}

export default Work;
