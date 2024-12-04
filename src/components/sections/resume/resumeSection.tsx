import { resumeIllustration, experienceIllustration } from "../../../assets/illustrations";
import { Studies, Work, Skills } from "./elements";

function ResumeSection() {
  return (
    <section id="#resume-section" className="container text-center section-border">
      <div className="text-start">
        <h3 className="my-5 fs-2rem-to-3rem">Resume</h3>
      </div>
      <div className="row d-flex flex-lg-row-reverse my-5 text-center text-lg-start align-items-center">
        <div className="col-12 col-lg-5 text-center">
          <img src={resumeIllustration} alt="" />
        </div>
        <Studies />
      </div>
      <div className="row d-flex my-5 text-center text-lg-end align-items-center">
        <div className="col-12 col-lg-5 text-center">
          <img src={experienceIllustration} alt="" />
        </div>
        <Work />
      </div>
      <Skills />
    </section>
  );
}

export default ResumeSection;
