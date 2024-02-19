import { type FC, type ReactNode } from "react";

export interface ISection {
  title: string;
  name: string;
  children: ReactNode;
  id?: string;
}

export const Section: FC<ISection> = ({ title, name, children, id }) => (
  <section className="h-full py-8 text-center" id={id}>
    <div className="space-y-5">
      <h3 className="text-blue-600 text-xl font-lg">{name}</h3>
      <h1 className="text-white text-4xl font-lg">{title}</h1>
    </div>
    <div className="mt-5">{children}</div>
  </section>
);
