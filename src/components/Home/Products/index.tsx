import { ProjectPage } from "@/components/Globals/Project";
import { ICardProps, PRODUCTS } from "@/libs/config/products";
import { useLocaleParser } from "@/libs/localeParser";
import { useState } from "react";

export const HomeProducts: React.FC = () => {
  const parser = useLocaleParser();

  const [selected, setSelected] = useState<number>(0);

  const [products, setProducts] = useState<ICardProps>();

  return (
    <ProjectPage
      title={parser.get("products")}
      name={parser.get("wwd")}
      id="products"
      selected={selected}
      setSelected={setSelected}
      projects={PRODUCTS}
      project={products}
      setProject={setProducts}
    />
  );
};
