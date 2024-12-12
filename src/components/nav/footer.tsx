import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="container my-5 text-center">
      <p className="text-center">&copy; Tor-Håkon Bergseng</p>
      <ScrollLink to={"landing-section"} className="btn footer-link">
        To the top
      </ScrollLink>
    </footer>
  );
};

export default Footer;
