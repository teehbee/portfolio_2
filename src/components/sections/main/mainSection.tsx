import { portrait } from "../../../assets/img";
import { linkedInFrontpageIcon, gitHubFrontpageIcon } from "../../../assets/icons";
import { Link as ScrollLink } from "react-scroll";
import { linkedInUrl, gitHubUrl } from "../../data";

function MainSection() {
  return (
    <section id="landing-section" className="d-flex w-100 text-center flex-column flex-lg-row  z-index-negative height100vh navMargin">
      <div className="col-12 col-lg-3 yellow-colour pt-100px position-relative yellow-frontpage d-flex flex-column justify-content-end align-items-start">
        <img className="portrait-img" src={portrait} alt="portrait of me" />
        <div className="ps-3 pb-3 d-none d-lg-block">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <img className="cursor-pointer" src={linkedInFrontpageIcon} aria-label="github link" />
          </a>
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
            <img className="cursor-pointer" src={gitHubFrontpageIcon} aria-label="github link" />
          </a>
        </div>
      </div>
      <div className="col-12 col-lg-9 pt-100px d-flex flex-column justify-content-center mt-5 mt-lg-0 align-items-center text-center text-lg-start px-2 px-md-0">
        <div className="frontpage-text-container">
          <h1 className="fs-1rem-to-1-25rem yellow-font">Front end developer</h1>
          <h2 className="fs-1-25rem-to-3-25rem">Tor-Håkon Bergseng</h2>
          <p className="fs-1rem-to-1-25rem yellow-font">Designing with Purpose, Developing with Precision</p>
          <div className="d-flex flex-column flex-lg-row">
            <ScrollLink className="cursor-pointer mb-3 me-2" to="#projects">
              <button className="yellow-and-dark-btn fs-1rem-to-1-25rem cursor-pointer text-light">Download CV</button>
            </ScrollLink>
            <ScrollLink className="cursor-pointer" to="#projects-section">
              <button className="yellow-and-dark-btn fs-1rem-to-1-25rem cursor-pointer text-light">Projects</button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
