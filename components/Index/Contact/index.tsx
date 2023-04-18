import { FC } from "react";
import { CONFIG } from "@libs/config";
import { Link } from "@components/Utils/Link";

export const Contact: FC = () => {
  return (
    <section className="relative py-20" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-blue-800 font-bold text-4xl">İletişim</h1>
        </div>

        <div className="mt-8">
          <div className="flex filex-direction space-x-5 justify-center">
            {CONFIG.CONTACT.map((contact, index) => (
              <Link href={contact.href} key={index}>
                <contact.icon className="w-8 h-8 text-blue-600 hover:text-blue-500" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
