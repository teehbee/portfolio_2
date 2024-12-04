import { aboutIllustration } from "../../../assets/illustrations";

function AboutSection() {
  return (
    <section id="#about-section" className="container text-center section-border ">
      <div className="row d-flex flex-lg-row-reverse my-5">
        <div className="col-12 col-lg-4 flex-reversed py-5">
          <img src={aboutIllustration} alt="man sitting on desk" />
        </div>
        <div className="col-12 col-lg-8 text-center text-lg-start pe-lg-5">
          <h3 className="mb-4 mt-4 mt-lg-0 fs-2rem-to-3rem">About me</h3>
          <p className="yellow-font fs-1rem-to-1-25rem">Small introduction text about me. Small introduction text about me. Small introduction text about me.</p>
          <p className="yellow-font fs-1rem-to-1-25rem">
            Small introduction text about me. Small introduction text about me. Small introduction text about me.Small introduction text about me. Small introduction text about me. Small introduction
            text about me.Small introduction text about me. Small introduction text about me. Small introduction text about me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
