import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import { HomeHero } from "@/components/Home/Hero";
import { HomeAbout } from "@/components/Home/About";
import { HomeProjects } from "@/components/Home/Project";
// import { HomeProducts } from "@/components/Home/Products";
import { HomeContact } from "@/components/Home/Contact";
import { useLocaleParser } from "@/libs/localeParser";

const HomePage: NextPage = () => {
  const parser = useLocaleParser();

  return (
    <Layout title={parser.get("home")}>
      <HomeHero />
      <HomeAbout />
      <HomeProjects />
      {/* <HomeProducts /> */}
      <HomeContact />
    </Layout>
  );
};

export default HomePage;
