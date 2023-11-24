import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

const Footer = ({}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(!showContactForm);
  };
  function ContactForm() {
    const [state, handleSubmit] = useForm("mleyyrgw");
  
    if (state.succeeded) {
        setFormSubmitted(true);
        return <p>We will get back to you soon :)</p>;
    }
    return (
      <form
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      //action="https://formspree.io/f/mleyyrgw"
      method="post"
      className="max-w-md mx-auto bg-zinc-100 p-6 rounded-md shadow-lg mt-20"
      onSubmit={handleSubmit}
    >
      <fieldset id="fs-frm-inputs">
        <div className="mb-4">
          <label htmlFor="full-name" className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email-address" className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email-address"
            placeholder="email@domain.tld"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Aenean lacinia bibendum nulla sed consectetur..."
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline resize-none"
          />
        </div>
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
      </fieldset>
      <input
        type="submit"
        value="Submit"
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
      />
    </form>
    );
  };
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 flex flex-col items-center text-center">
        <div>
          {/* <h1 className="text-2xl text-bold">Contact.</h1> */}
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Let&apos;s work
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold mb-3">
              together
            </h1>
            {!showContactForm && !formSubmitted &&  (
              <Button type="primary" onClick={handleContactClick}>
                Contact Us
              </Button>
            )}
            {showContactForm && <ContactForm />}
            <div className="mt-20 ">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-xs mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Hatlabs</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
