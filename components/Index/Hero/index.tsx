import { FC } from "react";

export const Hero: FC = () => {
  return (
    <section className="mx-auto" id="home">
      <div className="inline-block w-full h-full">
        <div
          className="w-full min-h-screen -z-1 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <ul className="cubes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div className="m-0 p-8 z-5 top-32 relative text-center">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-white flex flex-col gap-2">
              <div>Slipyme Company</div>
              <div>Farklı Sektörlerde Kaliteli Hizmetler</div>
            </h1>
            <p className="mt-5 font-semibold text-xl md:text-2xl lg:text-3xl text-gray-200">
              Yazılım, Grafik Tasarım ve Oyun sektörlerinde hizmet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
