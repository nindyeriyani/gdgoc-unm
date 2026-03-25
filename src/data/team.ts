export interface TeamMember {
  name: string;
  division: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  x?: string;
  behance?: string;
  dribbble?: string;
  tiktok?: string;
  youtube?: string;
}

// Data is grouped by pages (slides).
// You can structure pages here to easily contain 1, 2, or 3 people per page that will be automatically rendered in the slider.
export const teamPages: TeamMember[][] = [
  // Lead
  [
    {
      name: "Ekha Mustika Putri",
      division: "Lead",
      image: "/images/team/ekha.png",
      instagram: "https://www.instagram.com/e.ca.mp/",
      linkedin: "http://www.linkedin.com/in/ekha-mustika-putri-",
    },
    {
      name: "Devi Miftahul Jannah",
      division: "Co-Lead",
      image: "/images/team/devi.png",
      instagram: "https://www.instagram.com/smling_04/",
      linkedin: "https://www.linkedin.com/in/devi-miftahul-jannah",
      github: "https://github.com/Ivyyy7",
    },
  ],
  // Relation & Communication
  [
    {
      name: "Nurhidayat",
      division: "Relation & Communication",
      image: "/images/team/dayat.png",
      instagram: "https://www.instagram.com/dayattnr_/",
      linkedin: "https://www.linkedin.com/in/nurhidayat-amnur-7b4525288/",
    },
    {
      name: "Annisa Mujadidah Rasul",
      division: "Relation & Communication",
      image: "/images/team/ninis.png",
      instagram: "https://www.instagram.com/annisamujadidah/",
    },
  ],
  [
    {
      name: "Nurhidayat",
      division: "Relation & Communication",
      image: "/images/team/yayat-cimol.png",
      instagram: "https://www.instagram.com/nurhidayat_marang/",
      linkedin: "https://www.linkedin.com/in/nurhidayat-marang-87b2a9337/",
      github: "https://github.com/yaya12112",
    },
    {
      name: "Ansar",
      division: "Relation & Communication",
      image: "/images/team/ansar.png",
      instagram: "https://www.instagram.com/ansaarr_/",
      linkedin: "https://www.linkedin.com/in/ansar-973077349/",
    },
  ],
  // Event Management
  [
    {
      name: "Muh. Fikra Junian Riswansyah",
      division: "Event Management",
      image: "/images/team/fikra.png",
      instagram: "https://www.instagram.com/fikra_xpx/",
      linkedin:
        "https://www.linkedin.com/in/muh-fikra-junian-riswansyah-423a88356/",
      youtube: "https://youtube.com/@ruebexpx",
    },
    {
      name: "Annisa Nur Imani",
      division: "Event Management",
      image: "/images/team/nuri.png",
      instagram: "https://www.instagram.com/nurichx_/",
      linkedin: "https://www.linkedin.com/in/nicha-chixy-218558325/",
      github: "https://github.com/AnnisaNurImaniB24",
    },
    {
      name: "Nur Hidayat",
      division: "Event Management",
      image: "/images/team/yayat.png",
      instagram: "https://www.instagram.com/yayaxnr",
      linkedin: "https://linkedin.com/in/nurh1dayat",
      github: "https://github.com/nurhidayatdev",
    },
  ],
  [
    {
      name: "Andi Muhammad Kahfi",
      division: "Event Management",
      image: "/images/team/kahfi.png",
      instagram: "https://www.instagram.com/_kahf1/",
    },
    {
      name: "Muh. Fahri Fauzan",
      division: "Event Management",
      image: "/images/team/fauzan.png",
      instagram: "https://www.instagram.com/mfahrifzan/",
      linkedin: "https://id.linkedin.com/in/muh-fahri-fauzan-52922528b/",
    },
    {
      name: "Muh. Zaki Mubarak Ihwan",
      division: "Event Management",
      image: "/images/team/zaki.png",
      instagram: "https://www.instagram.com/zaki.mbrak",
    },
  ],
  // Branding & Design
  [
    {
      name: "Fitria Nur Dina Salam",
      division: "Branding & Design - Content Creator",
      image: "/images/team/dina.png",
      instagram: "https://www.instagram.com/fitrianurdinasalam/",
      linkedin: "https://www.linkedin.com/in/fitria-nur-dina-salam-137443339/",
      tiktok: "http://tiktok.com/@glaudyous",
    },
    {
      name: "Juhariah Ningrum",
      division: "Branding & Design - SM Copywriting",
      image: "/images/team/juju.png",
      instagram: "https://www.instagram.com/jujuhariah._",
      linkedin: "https://www.linkedin.com/in/juhariahningrum",
    },
  ],
  [
    {
      name: "Muh Fahri Azhari",
      division: "Branding & Design - Graphic Design",
      image: "/images/team/fahri.png",
      instagram: "https://www.instagram.com/_fahriazhari/",
      linkedin:
        "https://www.linkedin.com/in/muh-fahri-azhari-ptik-a-697428329/",
      github: "https://github.com/Fahriazhari856",
    },
    {
      name: "Sahrawi Ramadani",
      division: "Branding & Design - Graphic Design",
      image: "/images/team/ara.png",
      instagram: "https://www.instagram.com/shrawirmdhani/",
      linkedin: "https://www.linkedin.com/in/shrawirmdhani/",
      behance: "https://www.behance.net/sahrawiramadani",
    },
    {
      name: "Zakharia Tangke Timbang",
      division: "Branding & Design - Graphic Design",
      image: "/images/team/zaka.png",
      instagram: "https://www.instagram.com/zack_0511/",
      behance: "https://www.behance.net/zakharitangke",
    },
  ],
  // R&D
  [
    {
      name: "Muh. Asmar",
      division: "R&D - UI/UX Design",
      image: "/images/team/asmar.png",
      instagram: "https://www.instagram.com/muh_asmar22",
      linkedin: "https://www.linkedin.com/in/muh-asmar-7a75a734a/",
      dribbble: "https://dribbble.com/Muh_Asmar",
    },
    {
      name: "Nindy Sri Eriyani",
      division: "R&D - Front-End Development",
      image: "/images/team/indy.png",
      linkedin: "https://www.linkedin.com/in/nindysrieriyani/",
      github: "https://github.com/nindyeriyani",
    },
    {
      name: "Offiler Pebrian",
      division: "R&D - Cyber Security",
      image: "/images/team/opi.png",
      instagram: "https://www.instagram.com/offyourbae/",
      linkedin: "https://www.linkedin.com/in/offilerpebrian",
      github: "https://github.com/offilerpebrian",
    },
  ],
  [
    {
      name: "Ahmad",
      division: "R&D - Mobile Development",
      image: "/images/team/ahmad.png",
      instagram: "https://www.instagram.com/qhmd_22/",
      linkedin: "https://www.linkedin.com/in/ahmad-asis",
      github: "https://github.com/qhmd",
    },
    {
      name: "Muhammad Rahyan N",
      division: "R&D - Back-End Development",
      image: "/images/team/rahyan.png",
      instagram: "https://www.instagram.com/rahyan_n/",
      linkedin: "https://www.linkedin.com/in/muhammadrahyan/",
      github: "https://github.com/justrahyan",
    },
    {
      name: "Syahrur Adhe Pratama Putra",
      division: "R&D - Robotics",
      image: "/images/team/adhe.png",
      instagram: "https://www.instagram.com/adhe150/",
      linkedin:
        "https://www.linkedin.com/in/syahrur-adhe-pratama-putra-926983384/",
      github: "https://github.com/Adhe110",
    },
  ],
  [
    {
      name: "Alief Damarjati Sulistyodi",
      division: "R&D - Data Science",
      image: "/images/team/damar.png",
      instagram: "https://www.instagram.com/aliefdamarjati/",
      linkedin: "https://www.linkedin.com/in/aliefdamarjati/",
      github: "https://github.com/aliefdamarjati",
    },
    {
      name: "A Muh Bintang Palinrungi",
      division: "R&D - AI/ML",
      image: "/images/team/bintang.png",
      instagram: "https://www.instagram.com/bintang_palinrungi/",
      linkedin: "http://www.linkedin.com/in/a-muh-bintang-palinrungi",
      github: "https://github.com/Palinrungi",
    },
  ],
  // Finance
  [
    {
      name: "Andi Fitri Novianti",
      division: "Finance",
      image: "/images/team/fitri.png",
      instagram: "https://www.instagram.com/aftt.na0813/",
      linkedin: "https://www.linkedin.com/in/andi-fitri-novianti-484006337/",
      x: "https://x.com/nopiiiiiy",
    },
  ],
];
