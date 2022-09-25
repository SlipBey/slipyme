import { FC } from "react";
import { FiClock, FiDollarSign, FiUsers } from "react-icons/fi";

export const About: FC = () => {
  const About = [
    {
      title: "Bilgili Ekip",
      text: "Yaptıkları işlerin ehli olan kişilerden oluşan ekibimiz.",
      icon: FiUsers,
    },
    {
      title: "Hızlı Teslim",
      text: "Siparişlerinizi olabildiğince hızlı teslim etmeye çalışırız.",
      icon: FiClock,
    },
    {
      title: "Uygun Fiyatlı",
      text: "Piyasaya göre uygun fiyatlara işler yapmaktayız.",
      icon: FiDollarSign,
    },
  ];

  return (
    <section className="relative py-20" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-blue-800 font-bold text-4xl">Hakkımızda</h1>
          <p className="text-gray-700 font-semibold text-medium mt-3">
            Slipyme farklı hizmet sektörlerinde hizmet vererek, bütün hizmetleri
            bir çatı altına toplamak için kurulmuştur.
            <br />
            Şuanlık elimizdeki imkanlar doğrultusunda <b>Yazılım</b>,{" "}
            <b>Grafik Tasarım</b> ve <b>Oyun</b> sektörlerinde hizmet
            vermekteyiz.
            <br />
            İleriki zamanlarda ise daha fazla sektörde hizmet vermeyi
            hedefliyoruz.
          </p>
        </div>

        <div className="mt-8 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {About.map((about, index) => (
              <div className="text-center" key={index}>
                <span className="inline-block p-3 bg-blue-100 rounded-xl">
                  <about.icon className="w-6 h-6 text-blue-600 text-center" />
                </span>
                <h3 className="font-semibold text-xl text-gray-900">
                  {about.title}
                </h3>
                <p className="font-medium text-sm text-gray-800">
                  {about.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
