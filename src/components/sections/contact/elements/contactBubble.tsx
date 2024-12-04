import { contactBubbleInterface } from "../../../interfaces";

const ContactBubble: React.FC<contactBubbleInterface> = ({ icon, description, href, linkText }) => {
  return (
    <div className=" d-flex ">
      <div className="contact-bubble d-flex align-items-center">
        <a className="mb-0 fw-medium text-decoration-none" href={href}>
          <img className="contact-bubble-icon" src={icon} alt={description} />
          {linkText}
        </a>
        <p className=""></p>
      </div>
    </div>
  );
};

export default ContactBubble;
