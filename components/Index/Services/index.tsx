import { FC } from "react";
import { FaLaptopCode, FaDiscord } from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "@components/Utils/Link";

export const Services: FC = () => {
  const Service = [
    {
      name: "Web Tabanlı Sistemler",
      text: "İstediğiniz bir websitesini tasarlar ve kodlarız ayrıca web tabanlı oyunlar, uygulamalar ve programlar kodlamaktayız.",
      icon: AiOutlineGlobal,
    },
    {
      name: "Gömülü Sistemler",
      text: "Platformu fark etmeksizin her türlü masaüstü ve mobil uygulama geliştirmekteyiz.",
      icon: FaLaptopCode,
    },
    {
      name: "Discord Uygulamaları",
      text: "Discord için uygulama ve botlar geliştirmekteyiz.",
      icon: FaDiscord,
    },
    {
      name: "Photoshop Hizmeti",
      text: "İstediğiniz fotoğrafları veya tasarımları istediğiniz şekillerde düzenleyebiliriz.",
      icon: SiAdobephotoshop,
    },
    {
      name: "Tasarım Hizmeti",
      text: "İstediğiniz bir logoyu, banneri, veya herhangi bir tasarımı sizin için tasarlayabiliriz.",
      icon: SiAdobeillustrator,
    },
    {
      name: "After Effects Hizmeti",
      text: "İstediğiniz bir gifi tasarlayabiliriz veya istediğiniz bir videoya efekt eklemesi ve düzenlemesi yapabiliriz.",
      icon: SiAdobeaftereffects,
    },
  ];

  return (
    <section className="relative py-20" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-blue-800 font-bold text-4xl">Hizmetlerimiz</h1>
          <p className="mt-3 text-gray-700 font-semibold text-lg">
            Kendi projelerimiz haricinde de bulunduğumuz sektörler için ürün
            hizmetimiz de bulunmaktadır.
            <br />
            Sizden gelecek iş teklifleri veya istediğiniz bir ürün varsa bizimle{" "}
            <Link
              href="/#iletisim"
              className="text-blue-500 hover:text-blue-600"
            >
              iletişim
            </Link>{" "}
            kurabilirsiniz.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {Service.map((service, idx) => (
              <div className="border-2 shadow-xl p-5 rounded-lg" key={idx}>
                <service.icon className="text-blue-500 text-4xl mx-auto mt-3" />
                <h1 className="mt-2 font-semibold text-xl">{service.name}</h1>
                <p className="text-md font-semibold">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
