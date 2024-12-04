import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface contactDataInterface {
  name: string;
  email: string;
  message: string;
}

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
    <div className="col-12 col-md-5 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column text-start">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter full name here" {...register("name")} />
          {errors.name && <p>errors.name.message</p>}
        </div>
        <div className="d-flex flex-column text-start">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter email address here" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column text-start">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message" {...register("message")} />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button className="w-100 mt-3">Send message</button>
      </form>
    </div>
  );
}

export default ContactForm;
