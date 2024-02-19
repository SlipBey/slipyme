/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "@/components/Globals/Link";
import { CONTACT, SOCIAL } from "@/libs/config/contact";
import { useLocaleParser } from "@/libs/localeParser";
import { formatPhoneNumber, onContactSubmit } from "@/libs/utils/contact";
import { useState } from "react";

export const HomeContact: React.FC = () => {
  const parser = useLocaleParser();

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <section className="h-full py-8 text-center" id="contact">
      <div className="border rounded-lg border-gray-700 md:p-16 p-12 flex md:flex-row flex-col gap-12 lg:justify-between">
        <div className="flex flex-col gap-3 lg:max-w-1/2 text-left">
          <h1 className="sm:text-3xl lg:text-5xl text-blue-600 font-semibold uppercase text-center lg:text-left">
            {parser.get("contact")}
          </h1>
          <div className=""></div>
          <div className="flex flex-col gap-5">
            {CONTACT.map((contact, idx) => (
              <div
                className="flex md:flex-row flex-col gap-3 items-center"
                key={idx}
              >
                <div className="p-2 rounded-lg border border-gray-800">
                  <contact.icon className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h5>{parser.get(contact.title as any)}:</h5>
                  <h5>{contact.text}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            {SOCIAL.map((social, idx) => (
              <Link href={social.href} key={idx}>
                <social.icon className="text-3xl text-gray-600 hover:text-blue-600 duration-300" />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:max-w-1/2">
          <form onSubmit={onContactSubmit}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col text-left">
                <label>{parser.get("name")}</label>
                <input
                  type="text"
                  placeholder={parser.get("nameInput")}
                  name="name"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col text-left w-full">
                  <label>{parser.get("mail")}</label>
                  <input
                    type="email"
                    placeholder={parser.get("mailInput")}
                    name="email"
                  />
                </div>
                <div className="flex flex-col text-left w-full">
                  <label>{parser.get("phone")}</label>
                  <input
                    type="tel"
                    placeholder={parser.get("phoneInput")}
                    name="phone"
                    pattern="\d{0,3} \d{0,3} \d{0,4}"
                    maxLength={12}
                    minLength={12}
                    onChange={handleChange}
                    value={phoneNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <label>{parser.get("message")}</label>
                <textarea
                  placeholder={parser.get("messageInput")}
                  rows={4}
                  name="message"
                  required
                />
              </div>
              <div>
                <button type="submit" className="bg-blue-600">
                  {parser.get("send")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
