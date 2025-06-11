import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { contactSendIcon } from "../../../../assets/icons";
import * as yup from "yup";
import { contactDataInterface } from "../../../interfaces";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [formSent, setFormSent] = useState<null | "success" | "error">(null);

  const contactSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Please enter a valid email address").required("Please enter your email"),
    message: yup.string().required("Please enter a message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<contactDataInterface>({
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
  });

  async function onSubmit(data: contactDataInterface) {
    setIsSending(true);
    setFormSent(null);

    console.log("Sender data til backend:", data);

    try {
      const response = await fetch("https://backend-mail-test.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormSent("success");
        console.log("it worked");
        reset();
      } else {
        setFormSent("error");
      }
    } catch (error) {
      console.error("Sending failed:", error);
      setFormSent("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="col-12 col-md-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column text-start">
          <label className="mt-3" htmlFor="name">
            Name<span className="required-field">*</span>
          </label>
          <input className="contact-input" type="text" id="name" placeholder="Enter full name here" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="d-flex flex-column text-start">
          <label className="mt-3" htmlFor="email">
            Email<span className="required-field">*</span>
          </label>
          <input
            className="contact-input"
            type="text"
            id="email"
            placeholder="Enter email address here"
            {...register("email")}
            onChange={() => {
              clearErrors("email");
            }}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column text-start">
          <label className="mt-3" htmlFor="message">
            Message<span className="required-field">*</span>
          </label>
          <textarea className="contact-input" id="message" placeholder="Type your message" {...register("message")} />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <button type="submit" className="w-100 mt-3 contact-submit-button fw-medium fs-1-25rem">
          {isSending ? "Sending..." : "Send message"} <img src={contactSendIcon} aria-label="Send contact message" />
        </button>
        {formSent === "success" && <p className="text-success mt-2">Message sent successfully!</p>}
        {formSent === "error" && <p className="text-danger mt-2">Failed to send message. Please try again.</p>}
        <div className="text-start pt-3">
          <p>
            Fields marked <span className="required-field">*</span> are mandatory
          </p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
