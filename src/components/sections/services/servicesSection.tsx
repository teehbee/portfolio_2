import { ServicesTile } from "./elements";
import { codeIcon, translationIcon } from "../../../assets/icons";

function ServicesSection() {
  return (
    <section id="#services-section" className="container text-center section-border">
      <div className="text-start">
        <h3 className="my-5 fs-2rem-to-3rem">Services</h3>
      </div>
      <div className="text-center text-lg-start my-5">
        <p className="yellow-font fw-bold fs-1rem-to-1-5rem">These are some of the services I can offer. Feel free to contact me if these suit your needs.</p>
      </div>
      <div className="text-center d-flex justify-content-center justify-content-lg-start flex-row gap-3">
        <ServicesTile servicesIcon={codeIcon} servicesTitle="Web-design" />
        <ServicesTile servicesIcon={translationIcon} servicesTitle="Translations" />
      </div>
    </section>
  );
}

export default ServicesSection;
