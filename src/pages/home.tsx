import { placeHolderImage } from "../assets/img";
import { gitHubFrontpageIcon, linkedInFrontpageIcon } from "../assets/icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex w-100 text-center border flex-column flex-lg-row  z-index-negative height100vh navMargin">
      <div className="col-12 col-lg-3 yellow-colour pt-100px position-relative yellow-frontpage d-flex flex-column justify-content-end align-items-start">
        <img className="portrait-img" src={placeHolderImage} alt="" />
        <div className="ps-3 pb-3 d-none d-lg-block">
          <Link className="cursor-pointer" to="https://linkedin.com">
            <img src={linkedInFrontpageIcon} alt="" />
          </Link>
          <Link to="https://github.com">
            <img className="cursor-pointer" src={gitHubFrontpageIcon} alt="" />
          </Link>
        </div>
      </div>
      <div className="col-12 col-lg-9 pt-100px d-flex flex-column justify-content-center mt-5 mt-lg-0 align-items-center text-start">
        <div className="frontpage-text-container">
          <h1 className="fs-1rem-to-1-25rem yellow-font">Front end developer</h1>
          <h2 className="fs-1-25rem-to-3-25rem">Tor-Håkon Bergseng</h2>
          <p className="fs-1rem-to-1-25rem yellow-font">Some weird slogan going here about me as a person</p>
          <div className="d-flex flex-column">
            <Link className="cursor-pointer mb-3" to="#projects">
              <button className="btn yellow-and-dark-btn fs-1rem-to-1-25rem cursor-pointer text-light">Download CV</button>
            </Link>
            <Link className="cursor-pointer" to="#projects">
              <button className="btn yellow-and-dark-btn fs-1rem-to-1-25rem cursor-pointer text-light">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
