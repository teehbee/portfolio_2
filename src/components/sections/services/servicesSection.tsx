import { codeIcon, translationIcon } from "../../../assets/icons";

function ServicesSection() {
  return (
    <section id="#projects-section" className="container text-center section-border">
      <div className="text-start">
        <h3 className="my-5 fs-2rem-to-3rem">Services</h3>
      </div>
      <div className="text-center d-flex justify-content-center justify-content-lg-start">
        <div className="services-tile d-flex flex-column align-items-center justify-content-center">
          <img className="services-icon" src={codeIcon} aria-label="service icon" />
          <p className="mb-0 dark-gray-font fs-0-75rem-to-1-25rem">Web design</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
