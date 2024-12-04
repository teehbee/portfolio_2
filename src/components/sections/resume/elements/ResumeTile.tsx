import { resumeTileInterface } from "../../../interfaces";

const ResumeTile: React.FC<resumeTileInterface> = ({ resumeIcon, fromYear, toYear, nameOfStudyorPosition, nameOfSchoolOrEmployer }) => {
  return (
    <div className="resume-tile d-flex align-items-center my-4">
      <div>
        <img className="resume-icon" src={resumeIcon} aria-label="resume icon" />
      </div>
      <div className="px-4 py-1 d-flex flex-column justify-content-center align-items-start py-2 py-md-3">
        <p className="dark-gray-font mb-2 fs-0-75rem-to-1rem fw-bold">
          {fromYear} to {toYear}
        </p>
        <p className="dark-gray-font mb-2 fs-1rem-to-1-5rem fw-bold">{nameOfStudyorPosition}</p>
        <p className="dark-gray-font fs-0-75rem-to-1rem fw-bold mb-0">{nameOfSchoolOrEmployer}</p>
      </div>
    </div>
  );
};

export default ResumeTile;
