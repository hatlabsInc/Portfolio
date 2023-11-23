import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

const Footer = ({}) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(!showContactForm);
  };
  function ContactForm() {
    const [state, handleSubmit] = useForm("mleyyrgw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
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
            <Button type="primary" onClick={handleContactClick} >Contact Us</Button>
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
