import { useLang } from '../../contexts/LangContext';
const _ = require('lodash');

export default function TXT(entry) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  DARE: ['tédio?', 'bored?'],
  INTRO: [
    'Um provável bom aliado em meio às intempéries da TI.',
    "I'm probably a wise ally midst all the IT craze.",
  ],
  JOKE: [
    'Aspas. Sigo pagando por fita crepe!',
    'Quotes on that. I still pay for masking tape.',
  ],
  THREE_M_P1: ['A metodologia', 'The'],
  ACADEMIC_BEG: [
    'Como bom acadêmico, ouvi exaustivamente que ',
    "As an academic I've heard many times that ",
  ],
  KILLING_ANTS: [
    'não se mata formiga com revólver',
    "you shouldn't kill ants with guns",
  ],
  ALMOST_A_DECADE: [
    '. Com quase uma década de ',
    '. Near my first full decade of ',
  ],
  EXPERIMENTALISM: ['experimentalismo', 'experimentalism'],
  ACADEMIC_END: [
    ' na TI, comprovei na prática que a virtude maior da engenharia é deixar o cliente satisfeito com a menor quantidade de recursos possível. Para isso, dividi minhas especialidades em ',
    " in IT, I saw in practice how solving a client's problem with the least amount of resources possible is the greatest virtue of engineering. In letting this sinking in, I ended up dividing my specialties into ",
  ],
  THREE_INCREMENTAL_LEVELS: [
    'três níveis incrementais',
    'three incremental levels',
  ],
  MURRO: ['MURRO', 'PUNCH'],
  MURRO_JOKE: [
    'Onde "resolver no soco" é o certo.',
    'Just like hitting hardware.',
  ],
  MURRO_HINT: ['zero código + foco em processo', 'no code & process oriented'],
  MARTELO: ['MARTELO', 'HAMMER'],
  MARTELO_JOKE: ['Hora de pendurar uns quadros.', 'Painting hanging time.'],
  MARTELO_HINT: ['identidade visual própria', 'better visual identity'],
  MARRETA: ['MARRETA', 'SLEDGEHAMMER'],
  MARRETA_JOKE: [
    'Evitemos a pren$a hidráulica.',
    "Let's just avoid hydraulic pre$$ure.",
  ],
  MARRETA_HINT: ['plataforma + fluxo de dados', 'platform & bigger dataflow'],
  PARALLAX1: ['Oi! Olha que show.', 'Hey! Check this out.'],
  PARALLAX2: [
    'Tenho uma notícia que pode agradar aos técnicos e curiosos.',
    'I got some news that may interest technical and curious people.',
  ],
  PARALLAX3: [
    'Tô construindo uma biblioteca dos componentes que utilizo nos meus sistemas da web.',
    "I've been building a library with the components I tend to use in my web projects.",
  ],
  PARALLAX4: ['Clique no botão tosco!', 'Click the weird button!'],
  SUPERLIB_BTN: ['conheça a superlib', 'go to superlib'],
  PORTFOLIO_P1: ['bla bla portugues', 'bla bla ingles'],
  PORTFOLIO_P2: ['bla bla portugues 2', 'bla bla ingles 2'],
};
