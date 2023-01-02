import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";

type Input = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {};

const Contact = (props: Props) => {
  const details = [
    { icon: FaPhoneAlt, text: "+234 701 779 0950" },
    { icon: FaEnvelope, text: "gidnwokpor@gmail.com" },
    { icon: MdLocationPin, text: "West Africa" },
  ];
  const { register, handleSubmit } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    window.location.href = `mailto:gidnwokpor@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name} and I am reaching out to you after checking out your portfolio."${data.message}" ${data.email}`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative max-w-full overflow-hidden lg:flex-row text-left justify-evenly mx-auto items-center z-0"
    >
      <h2 className="absolute top-[55px] lg:top-[80px] tracking-[20px] text-[#a1bbdf] text-xl lg:text-2xl uppercase text-center dark:text-gray-500">
        Contact
      </h2>

      <div className="flex flex-col space-y-5">
        <h4 className="lg:text-[24px] leading-[30px] font-semibold text-center">
          I have got just what you need,{" "}
          <span className="text-purple dark:text-[#8eb1e2]">
            Let&apos;s talk.
          </span>
        </h4>

        <div className="space-y-3">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 justify-center"
            >
              <detail.icon className="text-purple dark:text-[#8eb1e2]" />

              <p className="font-semibold text-[14px] lg:text-[16px]">
                {detail.text}
              </p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[80%] lg:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput w-[50%]"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="text"
              className="contactInput w-[50%]"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-purple py-3 rounded-md text-white font-bold text-[14px] lg:text-[16px]"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
