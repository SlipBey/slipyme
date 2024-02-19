export const JOBS = [
  {
    job: "software",
  },
  {
    job: "designer",
  },
  // {
  //   job: "tester",
  // },
];

export const INPUTS = {
  default: [
    {
      title: "name",
      type: "text",
    },
    {
      title: "old",
      type: "number",
    },
    {
      title: "mail",
      type: "email",
    },
    {
      title: "discord",
      type: "text",
    },
  ],
  designer: [
    {
      title: "interest",
      checkbox: [
        { title: "Photoshop", name: "ps" },
        { title: "Illustrator", name: "ai" },
        { title: "After Effects", name: "ae" },
        { title: "Animation", name: "an" },
        { title: "Premiere", name: "pr" },
        { title: "Diğer", name: "other" },
      ],
    },
  ],
  software: [
    {
      title: "position",
      radio: [
        { title: "Back-end", name: "backend" },
        { title: "Front-end", name: "frontend" },
        { title: "Full-Stack", name: "fullstack" },
      ],
    },
    {
      title: "interest",
      checkbox: [
        { title: "Web Tasarım", name: "web" },
        { title: "Masaüstü Programlama", name: "desktop" },
        { title: "Uygulama Geliştirme", name: "appDev" },
        { title: "Yapay Zeka", name: "ai" },
        { title: "Discord Bot", name: "discordBot" },
        { title: "Gömülü Sistemler", name: "embedded" },
        { title: "Diğer", name: "other" },
      ],
    },
    {
      title: "experience",
      type: "text",
    },
  ],
};
