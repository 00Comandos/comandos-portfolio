export type Client = {
  name: string;
  logo: string;
  website?: string;
};

export const clients: readonly Client[] = [
  { name: "Stori", logo: "/images/logo-stori.png", website: "https://www.storicard.com" },
  { name: "Karta", logo: "/images/Logo-Karta.svg" },
  { name: "Truora", logo: "/images/Truora-Logo.svg", website: "https://www.truora.com" },
  { name: "RebajaTusCuentas", logo: "/images/RebajaTusCuentas-Logotipo.svg", website: "https://rebajatuscuentas.com" },
  { name: "Yaydoo", logo: "/images/yaydoo-logo.svg" },
  { name: "Kriptos", logo: "/images/kriptos-logo.svg", website: "https://www.kriptos.io" },
];
