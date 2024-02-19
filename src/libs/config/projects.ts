import code from "@/assets/icon.svg";
import design from "@/assets/projects/design.svg";
import deprem from "@/assets/projects/slipymedeprem.svg";
import todolist from "@/assets/projects/todolist.svg";
import botlist from "@/assets/projects/botlist.svg";

interface IURLProps {
  link?: string;
  github?: string;
}

export interface ICardProps {
  id: number;
  title: string;
  description: string;
  url: IURLProps;
  image?: string;
}

export const PROJECTS: ICardProps[] = [
  {
    id: 0,
    title: "Slipyme Code",
    description:
      "Slipyme'nin Yazılımcılar için açmış olduğu yazılımcı platformudur. Platformda kod paylaşımları ve yardımlar yapılmaktadır.",
    url: {
      link: "https://code.slipyme.com",
      github: "https://github.com/SlipBey/slipyme",
    },
    image: code,
  },
  {
    id: 1,
    title: "Slipyme Botlist",
    description: "Slipyme'nin Discord Botlist ve Serverlist Projesi!",
    url: { link: "https://botlist.slipyme.com" },
    image: botlist,
  },
  {
    id: 2,
    title: "Slipyme Todolist",
    description: "Slipyme'nin Yenilikçi Todolist Projesi!",
    url: { link: "https://todolist.slipyme.com" },
    image: todolist,
  },
  {
    id: 3,
    title: "Slipyme Deprem",
    description:
      "Depremde ne yapılması gerekir, yardımcı olacak kaynaklar neler? Yardımcı bir kaynak sistemi..",
    url: { link: "https://deprem.slipyme.com" },
    image: deprem,
  },
  {
    id: 4,
    title: "Slipyme Design",
    description:
      "Slipyme'nin Tasarımcılar için kurmuş olduğu tasarımcı platformudur. Platformda hayalinize göre tasarımlar yaptırabilir veya teknik yardımlar alabilirsiniz.",
    url: {
      link: "https://design.slipyme.com",
      github: "https://github.com/SlipBey/slipyme-design-webpage",
    },
    image: design,
  },
];
