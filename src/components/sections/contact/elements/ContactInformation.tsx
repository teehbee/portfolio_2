import { contactAtIcon, contactPhoneIcon, contactLocationIcon, contactGitHubIcon, contactLinkedInIcon } from "../../../../assets/icons";
import ContactBubble from "./contactBubble";
import { mapsUrl } from "../../../data";

function ContactInfo() {
  return (
    <div className="col-12 col-md-7  mt-4 mt-lg-0 d-flex flex-column justify-content-between border py-lg-5">
      <ContactBubble icon={contactAtIcon} description="contact via email" href="mailto:example@gmail.com" linkText="thbergseng@gmail.com" />
      <ContactBubble icon={contactPhoneIcon} description="contact via email" href="tel:+47148822" linkText="+4747148822" />
      <ContactBubble icon={contactLocationIcon} description="contact via email" href={mapsUrl} linkText="thbergseng@gmail.com" />
      <div className="d-flex">
        <ContactBubble icon={contactGitHubIcon} description="Link to github profile" href="https://github.com/teehbee" linkText="" />
        <ContactBubble icon={contactLinkedInIcon} description="Link to LinkedIn profile" href="https://www.linkedin.com/in/tor-h%C3%A5kon-bergseng-981408250/" linkText="" />
      </div>
    </div>
  );
}

export default ContactInfo;
