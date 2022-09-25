import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Hero } from "@components/Index/Hero";
import { About } from "@components/Index/About";
import { Services } from "@components/Index/Services";
import { Project } from "@components/Index/Project";
import { Contact } from "@components/Index/Contact";

const HomePage: NextPage = () => {
  return (
    <Layout title="Anasayfa">
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
    </Layout>
  );
};

export default HomePage;
