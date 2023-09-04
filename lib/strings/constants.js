import { useLang } from "../../contexts/LangContext";
const _ = require("lodash");

export default function TXT(entry) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  DARE: ["tédio?", "bored?"],
  JOKE: [
    "Aspas. Sigo pagando por fita crepe!",
    "Quotes. I'm still paying for masking tape!",
  ],
  ABOUT_HLT_DESC1: [
    "A Helplit é uma edtech graduada no Founder Institute em 2020. Acreditamos nos talentos individuais de cada aprendiz, e propomos através dessa plataforma um ecossistema que formará comunidades de conhecimento colaborativo, fluido e reutilizável.",
    "Helplit is an edtech graduated from the Founder Institute in 2020. We believe in the individual talents of each apprentice, and we propose through this platform an ecosystem that will form communities of collaborative, fluid and reusable knowledge.",
  ],
  ABOUT_HLT_DESC2: [
    "Trabalhamos para desenvolver pessoas de forma integral, fazendo de jornadas técnicas um aprendizado fluido, que considera a participação dos aprendizes através de suas capacidades e investigações. Temos como objetivo a implementação de uma cultura compreensível e escalável de aprendizagem para a vida.",
    "We work to develop people in an integral way, turning technical journeys into fluid learning, which considers the participation of learners through their capabilities and investigations. We aim to implement an coherent and scalable culture of lifelong learning.",
  ],
  ABOUT_HLT_SL_TITLE: [
    "Comece sua jornada de autoconhecimento aqui.",
    "Start your journey of self-discovery here.",
  ],
  ABOUT_HLT_SL_INCENTIVE: [
    "E nos ajude a te oferecer a experiência certa de aprendizagem.",
    "And help us provide you with the right learning experience.",
  ],
  // FOUNDER ABOUT
  ABOUT_FOUNDER_TITLE: [
    "Nossa experiência no Founder Institute.",
    "Our experience in Founder Institute.",
  ],
  ABOUT_FOUNDER_DESC1: [
    "Estamos no processo de completar essa seção.",
    "We're in the process of completing this section.",
  ],
  ABOUT_FOUNDER_DESC2: [
    "Até lá, fique à vontade para entrar em contato :)",
    "Until then, feel free to reach out to us :)",
  ],
  ABOUT_FOUNDER_SL_JOAO_TITLE: [
    "João Marcelo Fantin Lerina | CTO",
    "João Marcelo Fantin Lerina | CTO",
  ],
  ABOUT_FOUNDER_SL_JOAO_INCENTIVE: [
    "Engenheiro de software e alquimista.",
    "Software engineer and alchemist.",
  ],
  ABOUT_FOUNDER_SL_JOAQUIN_TITLE: [
    "Joaquin Cardoso | CCO",
    "Joaquin Cardoso | CCO",
  ],
  ABOUT_FOUNDER_SL_JOAQUIN_INCENTIVE: [
    "Jornalista e cozinheiro hábil.",
    "Journalist and skilled cook.",
  ],
  ABOUT_FOUNDER_SL_ROSANGELA_TITLE: [
    "Rosângela Viegas Maraschin | CEO",
    "Rosângela Viegas Maraschin | CEO",
  ],
  ABOUT_FOUNDER_SL_ROSANGELA_INCENTIVE: [
    "Economista e caça-hypes.",
    "Economist and hype hunter.",
  ],
  // LASALLE ABOUT
  ABOUT_LASALLE_TITLE: [
    "Incubados no LaSalle Tech.",
    "Incubated at LaSalle Tech.",
  ],
  ABOUT_LASALLE_DESC1: [
    "Estamos no processo de completar essa seção.",
    "We're in the process of completing this section.",
  ],
  ABOUT_LASALLE_DESC2: [
    "Até lá, fique à vontade para entrar em contato :)",
    "Until then, feel free to reach out to us :)",
  ],
  // CATALISA ABOUT
  ABOUT_CATALISA_TITLE: [
    "Startup ativa no Catalisa ICT.",
    "Active startup on Catalisa ICT.",
  ],
  ABOUT_CATALISA_DESC1: [
    "Estamos no processo de completar essa seção.",
    "We're in the process of completing this section.",
  ],
  ABOUT_CATALISA_DESC2: [
    "Até lá, fique à vontade para entrar em contato :)",
    "Until then, feel free to reach out to us :)",
  ],
  //MISC
  LANGUAGE: ["Idioma", "Language"],
  SETTINGS_TITLE: ["Configurações", "Settings"],
  THEME: ["Tema", "Theme"],
  OFFICIAL_WEBSITE: ["Site oficial", "Official website"],
  SEE_YA: ["Até mais!", "See ya!"],
  GOOGLE_BTN: ["Entrar com Google", "Join with Google"],
  FOUR_TEMPERAMENTS: ["4 temperamentos", "4 temperaments"],
  ANIMAL_PROFILE: ["Perfil animal", "Animal profile"],
  PSYTESTS_SPOILER: [
    "Testes comportamentais... em breve!",
    "Behavioral tests... coming soon!",
  ],
  LOG_OUT: ["Sair", "Log out"],
  TRUST_THE_PROCESS: ["#ConfiaNoProcesso", "#TrustTheProcess"],
};
