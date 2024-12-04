import ResumeTile from "./ResumeTile";
import { studentIcon } from "../../../../assets/icons";

function Studies() {
  return (
    <div className="col-12 col-lg-7">
      <h4 className="yellow-font fs-1-5rem-to-2rem my-5">Education</h4>
      <ResumeTile resumeIcon={studentIcon} fromYear={"2022"} toYear={"2022"} nameOfStudyorPosition={"study program"} nameOfSchoolOrEmployer={"Name of school"} />
      <ResumeTile resumeIcon={studentIcon} fromYear={"2022"} toYear={"2022"} nameOfStudyorPosition={"study program"} nameOfSchoolOrEmployer={"Name of school"} />
      <ResumeTile resumeIcon={studentIcon} fromYear={"2022"} toYear={"2022"} nameOfStudyorPosition={"study program"} nameOfSchoolOrEmployer={"Name of school"} />
    </div>
  );
}

export default Studies;
