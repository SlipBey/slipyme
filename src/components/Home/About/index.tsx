/* eslint-disable @typescript-eslint/no-explicit-any */

import { Section } from "@/components/Layout/Section";
import website from "@/assets/technology/website.svg";
import mobile from "@/assets/technology/mobile.svg";
import program from "@/assets/technology/program.svg";
import micro from "@/assets/technology/micro.svg";
import { CustomImage } from "@/components/Globals/CustomImage";
import { useLocaleParser } from "@/libs/localeParser";

export const HomeAbout: React.FC = () => {
  const parser = useLocaleParser();

  const services = [
    {
      text: "web",
      icon: website,
    },
    {
      text: "mobile",
      icon: mobile,
    },
    {
      text: "program",
      icon: program,
    },
    {
      text: "micro",
      icon: micro,
    },
  ];

  return (
    <Section
      title={parser.get("about")}
      name={parser.get("aboutTitle")}
      id="about"
    >
      <div className="flex flex-col gap-5">
        <div className="text-lg">
          <p>{parser.get("homeAboutText1")}</p>
          <p>{parser.get("homeAboutText2")}</p>
        </div>
        <div className="rounded-lg p-5 border border-blue-600 backdrop-blur-3xl bg-gray-900/70 w-full flex justify-center">
          <div className="flex flex-col md:flex-row gap-5 md:gap-24">
            {services.map((service, idx) => (
              <div
                className="flex flex-col gap-1 justify-center items-center"
                key={idx}
              >
                <div className="w-16 h-16">
                  <CustomImage className="" src={service.icon} alt="" />
                </div>
                <div className="text-lg">{parser.get(service.text as any)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
