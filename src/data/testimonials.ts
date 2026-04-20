export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Carlos is THE definition of state-of-the-art design. The bar is never too high for Carlos, and he pushes his teammates to constantly try harder. Carlos displays a lot of customer obsession and …",
    name: "Valentin Vermersch",
    role: "Angel Investor | GM @Deliverect",
    avatar: "/images/Avatar-Valentin-Vermesh.png",
  },
  {
    quote:
      "I was lucky to work with Carlos in my short time at Yaydoo, and I found a super dedicated professional. There is no impossible task for Comandos — fast, responsible, participative. He knew how to push 9 FinTech projects at the same time, managing the UX and UI team, hiring, training, creating the growth plans of his team.",
    name: "Martín Vivas",
    role: "Corporate Venture Capital",
    avatar: "/images/avatar-MartinVivas.jpeg",
  },
  {
    quote:
      "Excellent professional with great vision and innovative ideas. Quickly grasps the need that raises precise solutions. Responsible and extremely efficient in remote work. His designs and UX allowed us to increase our conversion and user experience.",
    name: "Martín Mendoza del Solar",
    role: "CTO at RebajaTusCuentas.com",
    avatar: "/images/Avatar-martin-RTC.png",
  },
  {
    quote:
      "Comandos is a UX expert, passionate at top-notch usable technology products. His knowledge of how to execute UX process makes him a leading voice — and he is demanding of his peers.",
    name: "Nicolás Mendoza del Solar",
    role: "CEO at RebajaTusCuentas.com",
    avatar: "/images/Avatar-nicolas-rebajatuscuentas.png",
  },
];
