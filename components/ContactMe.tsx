"use client"

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string
}
 
const ContactMe = () => {

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:addysrivats@gmail.com?subject=${formData.subject}&body=${formData.message}`
      }

  return (
    <div className="h-screen relative flex flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 pt-20">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-indigo-400">Let's talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-indigo-400 h-7 w-7" />
            <p className="text-2xl">+91 9840742924</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-indigo-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">addysrivats@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-indigo-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">23/83 Tulsi Apartments</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto" autoComplete="off">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactButton" type="text" />
            <input {...register('email')} placeholder="Email" className="contactButton" type="email"/>
          </div>
          <input {...register('subject')} placeholder="Subject" className="contactButton" type="text" />
          <textarea {...register('message')}  placeholder="Message" className="contactButton"/>
          <button type="submit" className="py-5 px-10 rounded-md text-white font-bold text-lg bg-indigo-400">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
