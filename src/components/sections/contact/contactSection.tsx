import { ContactForm, ContactInfo } from "./elements";

function ContactSection() {
  return (
    <section id="#projects-section" className="container text-center section-border mb-5">
      <div className="text-center text-lg-start">
        <h3 className="my-5 fs-2rem-to-3rem">Contact</h3>
      </div>
      <div className="row">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

export default ContactSection;
