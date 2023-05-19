import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (formdata) => {
    try {
      // Make a POST request to the API route
      await axios.post("/api/sendEmail", {Name:formdata.Name, Email:formdata.Email, Message:formdata.Message });

      // Email sent successfully
    alert("We have received your message!");
    } catch (error) {
      // Error occurred while sending the email
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left lg:flex-row  px-4 sm:px-10  mx-auto items-center justify-evenly lg:justify-around ">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-lg md:text-xl 2xl:text-2xl mx-auto ">
        Contact me
      </h3>

      <div className=" flex flex-col space-y-10 pt-[90px] lg:pt-0">
        <h4 className="text-2xl xl:text-2xl 3xl:text-[32px] font-semibold text-center">
          I have got just what you need. {""}
          <span className="decoration-[#F7AB0A] underline">Lets Talk.</span>
        </h4>
        <div className="flex flex-col space-y-2 xl:space-y-4">
          <div className="flex items-center sapce-x-4 justify-center space-x-5">
            <FaPhone className="text-[#F7AB0A] xl:h-7 xl:w-7 w-5 h-5  animate-pulse" />
            <p className="text-md lg:text-xl 2xl:text-2xl 3xl:text-[29px]">
              +91-9108825914
            </p>
          </div>
          <div className="flex items-center sapce-x-4 justify-center space-x-5">
            <FaEnvelope className="text-[#F7AB0A] lg:h-7  lg:w-7 w-6 h-6  animate" />
            <p className="text-md lg:text-xl 2xl:text-2xl 3xl:text-[29px]">
              bhola2266@gmail.com
            </p>
          </div>
          <div className="flex items-center sapce-x-4 justify-center space-x-5">
            <FaMapMarked className="text-[#F7AB0A] lg:h-7  lg:w-7 w-6 h-6  animate-" />
            <p className="text-sm lg:text-xl 2xl:text-2xl 3xl:text-[29px]">
              Brigade Road, Bangalore 560090, India{" "}
            </p>
          </div>
        </div>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2  w-full sm:w-[400px]   xl:w-[600px] "
      >
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
          className="bg-[#F7AB0A] py-2 xl:py-4 rounded-md text-black font-bold text-lg"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Contact;
