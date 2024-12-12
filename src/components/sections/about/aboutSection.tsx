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
          <p className="yellow-font fs-1rem-to-1-25rem">As a passionate front-end developer and designer, I love combining creativity and functionality to craft clever, user-friendly websites. Based in Valdres, Norway, my work is often inspired by the stunning nature surrounding me.</p>
          <p className="yellow-font fs-1rem-to-1-25rem">With a fresh education in web development and design, I bring a modern, responsive approach to every project. I focus on clean, intuitive interfaces that enhance user experience, while incorporating unique design elements drawn from the world around me. I’m excited to create innovative digital solutions that leave a lasting impression..</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
