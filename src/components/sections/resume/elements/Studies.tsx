import ResumeTile from "./ResumeTile";
import { studentIcon } from "../../../../assets/icons";

function Studies() {
  return (
    <div className="col-12 col-lg-7">
      <h4 className="yellow-font fs-1-5rem-to-2rem my-5">Education</h4>
      <ResumeTile resumeIcon={studentIcon} fromYear={"January 2022"} toYear={"January 2024"} nameOfStudyorPosition={"Front-end development"} nameOfSchoolOrEmployer={"Noroff school of technology and digital media, online"} />
      <ResumeTile resumeIcon={studentIcon} fromYear={"August 2009"} toYear={"July 2010"} nameOfStudyorPosition={"Supplementary general studies"} nameOfSchoolOrEmployer={"Nes secondary school"} />
      <ResumeTile resumeIcon={studentIcon} fromYear={"August 2006"} toYear={"July 2007"} nameOfStudyorPosition={"Maritime studies"} nameOfSchoolOrEmployer={"Etterstad secondary school"} />
      <ResumeTile resumeIcon={studentIcon} fromYear={"August 2005"} toYear={"July 2006"} nameOfStudyorPosition={"Electrician studies"} nameOfSchoolOrEmployer={"Nes secondary school"} />
    </div>
  );
}

export default Studies;
