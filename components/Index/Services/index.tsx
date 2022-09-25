import { FC } from "react";
import { FaMobile, FaLaptopCode } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

export const Services: FC = () => {
  const Service = [
    {
      name: "Website",
      text: "SEO'ya uygun, %99 Responsive, Sade ve kullanışlı arayüzlere sahip websiteleri yapmaktayız.",
      icon: AiOutlineGlobal,
    },
    {
      name: "Masaüstü Programlama",
      text: "Platformu fark etmeksiniz istediğiniz masaüstü uygulamasını tasarlar/kodlarız. Dilerseniz websitenizi programa uyarlarız.",
      icon: FaLaptopCode,
    },
    {
      name: "Mobil Uygulama",
      text: "Mobil uygulamalar için şuanlık PWA ile geliştirmeler yapmaktayız.",
      icon: FaMobile,
    },
  ];

  return (
    <section className="relative py-20 bg-gray-100" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-blue-800 font-bold text-4xl">Hizmetlerimiz</h1>
          <p className="mt-3 text-xl font-semibold text-gray-800">
            Yazılım sektörü için yardımcı kaynaklar, kod paylaşım sistemi,
            yazılımcı forumu gibi projelerde bulunduk.
            <br />
            Tasarım sektörü için faaliyetlerimiz yakın bir zamanda hayata
            geçirilecektir.
            <br />
            Farklı alanları kendi bünyemiz içerisinde dahil ettikçe yaptığımız
            faaliyetleri bir o kadar arttırmak hedefindeyiz.
            <br />
            Ancak bunlar haricinde siz kullanıcılarımız için güvenlik bir
            alışveriş ortamı sunma hedefindeyiz. Şuanda yapım aşamasında olan
            sipariş modülümüz sayesinde istediğiniz gibi Slipyme'den ürün
            alabilir ve yaptırabilirsiniz.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-5">
            {Service.map((service, idx) => (
              <div className="bg-gray-200 p-2 rounded-lg" key={idx}>
                <service.icon className="text-blue-500 w-8 h-8 mx-auto mt-3" />
                <h1 className="mt-2 font-semibold text-lg">{service.name}</h1>
                <p className="text-semibold">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
