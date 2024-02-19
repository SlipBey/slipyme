import { useLocaleParser } from "@/libs/localeParser";
import { useRouter } from "next/router";

export const HomeHero: React.FC = () => {
  const router = useRouter();
  const parser = useLocaleParser();

  const ballStyles = [
    { top: "20%", left: "10%", size: "40px", color: "bg-blue-600" },
    { top: "50%", left: "60%", size: "30px", color: "bg-green-600" },
    { top: "70%", left: "30%", size: "25px", color: "bg-purple-600" },
    { top: "20%", left: "70%", size: "40px", color: "bg-amber-600" },
    { top: "75%", left: "80%", size: "35px", color: "bg-pink-600" },
  ];

  return (
    <section className="relative">
      {ballStyles.map((style, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-2xl ${style.color}`}
          style={{
            top: style.top,
            left: style.left,
            width: style.size,
            height: style.size,
          }}
        />
      ))}
      <div className="h-96 w-full p-8 rounded-xl flex items-center justify-center flex-col gap-5 border border-gray-700 relative">
        <div className="text-blue-600 text-xl font-lg">Slipyme Company</div>
        <div className="text-3xl font-lg">{parser.get("homeHeroTitle")}</div>
        <div className="text-md font-lg">{parser.get("homeHeroText")}</div>
        <div className="mt-8">
          <button
            onClick={() => router.push("#about")}
            className="animate-bounce py-2 px-8 border border-blue-600 text-blue-600 font-lg text-lg rounded-lg hover:bg-blue-600 hover:text-white duration-300"
          >
            {parser.get("wwd")}?
          </button>
        </div>
      </div>
    </section>
  );
};
