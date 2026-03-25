export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export const events: EventItem[] = [
  {
    id: "juaragcp",
    title: "#JuaraGCP",
    description:
      "JuaraGCP adalah program pembelajaran cloud computing bagi developer Indonesia melalui Qwiklabs. Ikuti pelatihannya, kuasai teknologi cloud, dan bersiaplah meraih sertifikasi GCP untuk mengembangkan kariermu di dunia digital.",
    image: "/images/google-cloud.png",
    imagePosition: "right",
  },
  {
    id: "DevFest",
    title: "DevFest",
    description:
      "DevFest adalah festival teknologi yang mempertemukan para developer, pelajar, dan profesional untuk belajar, berbagi, dan berkolaborasi melalui berbagai sesi inspiratif dari para ahli.",
    image: "/images/devest.png",
    imagePosition: "left",
  },
];
