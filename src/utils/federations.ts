import dsfLogo from "../assets/images/dsflogo.png";
import diuLogo from "../assets/images/diulogo.png";
import divingBgVideo from "../assets/video/diving-bg.mp4";
import iceHockeyBgVideo from "../assets/video/icehockey-bg.mp4";
import archeryBgVideo from "../assets/video/bow-bg.mp4";
import skydivingBgVideo from "../assets/video/skydiving-bg.mp4";
import surfingBgVideo from "../assets/video/surfing-bg.mp4";
import triathlonBgVideo from "../assets/video/triathlon-bg.mp4";

interface SportsFederation {
  id: string;
  name: string;
  description: string;
  logo?: string;
  video?: string;
}

export const sportsFederations: SportsFederation[] = [
  {
    id: "diving",
    name: "Dansk Sportsdykker Forbund",
    description: "Danmarks officielle sportsdykkerforbund under Danmarks Idrætsforbund.",
    logo: dsfLogo,
    video: divingBgVideo,
  },
  {
    id: "icehockey",
    name: "Dansk Ishockey Forbund",
    description:
      "Dansk Ishockey Forbund er det officielle specialforbund for ishockey i Danmark, der fremme ishockey og ishockey-klassen i Danmark.",
    logo: diuLogo,
    video: iceHockeyBgVideo,
  },
  {
    id: "bueskydning",
    name: "Bueskydning Danmark",
    description:
      "Bueskydning Danmark er den øverste faglige myndighed inden for bueskydning i Danmark, med det formål at fremme og udvikle sporten.",
    video: archeryBgVideo,
  },
  {
    id: "skydiving",
    name: "Dansk Faldskærms Union",
    description:
      "Dansk Faldskærms Union er det officielle specialforbund for faldskærm i Danmark, der fremme faldskærm og faldskærm-klassen i Danmark.",
    video: skydivingBgVideo,
  },
  {
    id: "triathlon",
    name: "Dansk Triathlon Forbund",
    description: "Danmarks officielle triathlonforbund under Danmarks Idrætsforbund.",
    video: triathlonBgVideo,
  },
  {
    id: "KFUM ID",
    name: "KFUM ID",
    description:
      "KFUM ID er det officielle specialforbund for KFUM i Danmark, der fremme KFUM og KFUM-klassen i Danmark.",
    video: surfingBgVideo,
  },
];
