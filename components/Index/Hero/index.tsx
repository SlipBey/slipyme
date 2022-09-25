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

          <div className="m-0 p-9 relative">
            <div className="relative z-5">
              <div className="container">
                <div className="flex flex-wrap mx-16 my-24 justify-center">
                  <div className="text-center">
                    <h1 className="font-bold text-6xl text-white block mb-5">
                      Slipyme
                    </h1>
                    <h1 className="font-bold text-6xl text-white block mb-5">
                      Farklı Sektörlerde Kaliteli Hizmetler
                    </h1>
                    <p className="font-semibold text-3xl text-gray-200 mb-5">
                      Yazılım, Grafik Tasarım ve Oyun sektörlerinde hizmet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
