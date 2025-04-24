import dsfLogo from "../assets/images/dsflogo.png";

interface SportsFederation {
  id: string;
  name: string;
  description: string;
  logo?: string;
  color: string;
}

export const sportsFederations: SportsFederation[] = [
  {
    id: "diving",
    name: "Dansk Sportsdykker Forbund",
    description: "Danmarks officielle sportsdykkerforbund under Danmarks Idrætsforbund.",
    logo: dsfLogo,
    color: "brightblue",
  },
  {
    id: "swimming",
    name: "Dansk Svømmeunion",
    description: "Danmarks officielle svømmeunion under Danmarks Idrætsforbund.",
    color: "blue-500",
  },
  {
    id: "sailing",
    name: "Dansk Sejlunion",
    description: "Danmarks officielle sejlunion under Danmarks Idrætsforbund.",
    color: "indigo-600",
  },
  {
    id: "rowing",
    name: "Dansk Forening for Rosport",
    description: "Danmarks officielle roforbund under Danmarks Idrætsforbund.",
    color: "red-600",
  },
  {
    id: "triathlon",
    name: "Dansk Triathlon Forbund",
    description: "Danmarks officielle triathlonforbund under Danmarks Idrætsforbund.",
    color: "green-600",
  },
  {
    id: "canoekayak",
    name: "Dansk Kano og Kajak Forbund",
    description: "Danmarks officielle kano og kajak forbund under Danmarks Idrætsforbund.",
    color: "yellow-600",
  },
];
