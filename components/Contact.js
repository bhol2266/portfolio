import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";
import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formdata) => {
    window.location.href = `mailto:bhola2266@gmail?subject=${formdata.Subject}&body=Hi, my nmae is ${formdata.Name}. ${formdata.Message} (${formdata.Email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left lg:flex-row max-w-7xl px-10 just mx-auto items-center justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl mx-auto ">
        Contact me
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-2xl font-semibold text-center">
          I have got just what you need. {""}
          <span className="decoration-[#F7AB0A] underline">Lets Talk.</span>
        </h4>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center sapce-x-4 justify-center space-x-5">
            <FaPhone className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+91-9108825914</p>
          </div>
          <div className="flex items-center sapce-x-4 justify-center space-x-5">
            <FaEnvelope className="text-[#F7AB0A] h-7 w-7 animate" />
            <p className="text-xl">bhola2266@gmail.com</p>
          </div>
          <div className="flex items-center sapce-x-4 justify-center space-x-5">
            <FaMapMarked className="text-[#F7AB0A] h-7 w-7 animate-" />
            <p className="text-xl">Brigade Road, Bangalore 560090, India </p>
          </div>
        </div>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("Name")}
            className="contactInput"
            type="text"
            placeholder="Name"
            id="Name"
            name="Name"
            required
          />
          <input
            {...register("Email")}
            className="contactInput"
            type="email"
            placeholder="Email"
            id="Email"
            name="Email"
            required
          />
        </div>
        <input
          {...register("Subject")}
          className="contactInput"
          type="text"
          placeholder="Subject"
          id="Subject"
          name="Subject"
          required
        />

        <textarea
          {...register("Message")}
          className="contactInput"
          placeholder="Message"
          id="Message"
          name="Message"
          required
        ></textarea>

        <input
          className="bg-[#F7AB0A] py-4 rounded-md text-black font-bold text-lg"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Contact;
