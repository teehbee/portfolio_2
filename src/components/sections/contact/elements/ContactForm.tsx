import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function ContactForm() {
  return (
    <div className="col-12 col-md-5 border">
      <form action="">
        <div className="d-flex flex-column text-start">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter full name here" />
        </div>
        <div className="d-flex flex-column text-start">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter email address here" />
        </div>
        <div className="d-flex flex-column text-start">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message" />
        </div>
        <button className="w-100 mt-3">Send message</button>
      </form>
    </div>
  );
}

export default ContactForm;
