import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSendIcon } from "../../../../assets/icons";
import * as yup from "yup";
import { contactDataInterface } from "../../../interfaces";

function ContactForm() {
  const contactSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email().required("Please enter a valid email address"),
    message: yup.string().required("Please enter a message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactDataInterface>({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data: contactDataInterface) {
    console.log(data);
  }

  return (
    <div className="col-12 col-md-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column text-start">
          <p className="fw-bold">Contact form is not functional at this time!</p>
          <label className="mt-3" htmlFor="name">
            Name
          </label>
          <input className="contact-input" type="text" id="name" placeholder="Enter full name here" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="d-flex flex-column text-start">
          <label className="mt-3" htmlFor="email">
            Email
          </label>
          <input className="contact-input" type="text" id="email" placeholder="Enter email address here" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column text-start">
          <label className="mt-3" htmlFor="message">
            Message
          </label>
          <textarea className="contact-input" id="message" placeholder="Type your message" {...register("message")} />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button className="w-100 mt-3 contact-submit-button fw-medium fs-1-25rem">
          Send message <img src={contactSendIcon} alt="" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
