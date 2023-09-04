/* eslint-disable react/no-unescaped-entities */
import shapeshifter from 'classnames';
import { TypeAnimation } from 'react-type-animation';
import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { GiBrazilFlag } from 'react-icons/gi';
import { useState } from 'react';
import alchemist from '../public/alchemist.png';
import Image from 'next/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { FrameworkIcon } from '../components/FrameworkIcon';
import { useLang } from '../contexts/LangContext';

import TXT from '../lib/strings/constants';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { lang, toggleLang } = useLang();

  return (
    <div className={darkMode ? 'dark select-none' : 'select-none'}>
      <Head>
        <title>JMFANT•IN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-PAPER px-4 dark:bg-IRON md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-4 md:py-10 mb-12 flex justify-between items-center dark:text-white">
            <h1 className="font-burtons pt-2 text-2xl">
              JMFANT
              <span className="mr-1 text-lg text-ORANGE dark:text-EMERALD">
                •
              </span>
              IN
            </h1>
            <ul className="flex items-center">
              <li>
                {lang.iso === 'PT' ? (
                  <GiBrazilFlag
                    onClick={toggleLang}
                    className="bg-gradient-to-r from-IRON text-white to-IRON dark:from-white dark:text-IRON dark:to-white hover:from-EMERALD hover:text-amber-300 hover:to-sky-600 hover:dark:from-EMERALD hover:dark:text-amber-300 hover:dark:to-sky-600  px-1 max-h-8 rounded-md cursor-pointer text-4xl transition-colors ease-in-out"
                  />
                ) : (
                  <LiaFlagUsaSolid
                    onClick={toggleLang}
                    className="text-ROSE dark:text-CYAN cursor-pointer text-4xl hover:text-ORANGE dark:hover:text-EMERALD transition-colors ease-in-out"
                  />
                )}
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-ROSE dark:text-CYAN cursor-pointer text-2xl hover:text-ORANGE dark:hover:text-EMERALD transition-colors ease-in-out ml-4 md:ml-8"
                />
              </li>
              <li>
                <a
                  className="font-burtons text-lg bg-gradient-to-r from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD hover:bg-gradient-to-b text-white px-4 py-1 border-none rounded-md transition-colors ease-in-out ml-4 md:ml-8"
                  href="#"
                >
                  {TXT('DARE')}
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="leading-none text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-burtons text-4xl py-2 font-medium  md:text-5xl">
              JO
              <span className="border-t-4 border-ORANGE dark:border-EMERALD">
                A
              </span>
              O MARCELO
              <br />
              <p className="text-5xl md:text-6xl">fantin lerina</p>
            </h2>
            <h3 className="py-2 font-medium text-rose-600 dark:text-cyan-400 text-lg md:text-2xl opacity-80">
              <div
                className={shapeshifter('inline-block', {
                  'hidden': lang.iso !== 'PT',
                })}
              >
                <TypeAnimation
                  className="inline-block"
                  sequence={[
                    '💾 engenheiro de software ',
                    2000,
                    '🖼 artista digital ',
                    2000,
                    '🥚 essencialista ',
                    2000,
                    '🤡 startupeiro revolts ',
                    2000,
                    '🖨 tele-sobrinho ',
                    2000,
                    '🦴 goleiro aposentado ',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div
                className={shapeshifter('inline-block', {
                  'hidden': lang.iso !== 'EN',
                })}
              >
                <TypeAnimation
                  className="inline-block "
                  sequence={[
                    '💾 software engineer ',
                    2000,
                    '🖼 digital artist ',
                    2000,
                    '🥚 essentialist ',
                    2000,
                    '🤡 cynical founder ',
                    2000,
                    '🖨 1-800-NEPHEW ',
                    2000,
                    '🦴 retired goalkeeper ',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </h3>
            <p className="text-md py-5 leading-tight text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Te acompanho nos apertos dessa TI
              <br />
              que parece loucura ao se ver de fora.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 mb-10 md:mb-28 text-ROSE dark:text-cyan-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-br rotate-45 from-transparent to-ROSE dark:from-transparent dark:to-cyan-700 w-48 h-48 relative overflow-hidden md:h-96 md:w-96">
              <Image alt="" src={alchemist} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-white ">
              A metodologia{' '}
              <mark className="px-2 bg-rose-400 dark:bg-cyan-600 dark:text-white">
                "3M"
              </mark>
            </h3>
            <p className="text-md py-2 leading-tight text-gray-800 dark:text-gray-200">
              Aspas. Sigo pagando por fita crepe!{' '}
              <span
                className={shapeshifter('text-ROSE dark:text-CYAN font-bold', {
                  'hidden': lang.iso !== 'EN',
                })}
              >
                Initials are lost in translation though. ¯\_(ツ)_/¯
              </span>
            </p>
            <p className="text-md py-2 leading-tight text-gray-800 dark:text-gray-200">
              Como bom acadêmico, ouvi exaustivamente que{' '}
              <span className="text-ROSE dark:text-CYAN font-bold">
                não se mata formiga com revólver
              </span>
              . Com quase uma década de{' '}
              <span className="text-ROSE dark:text-CYAN font-bold">
                experimentalismo
              </span>{' '}
              na TI, comprovei na prática que a virtude maior da engenharia é
              deixar o cliente satisfeito com a menor quantidade de recursos
              possível. Para isso, dividi minhas especialidades em{' '}
              <span className="text-ROSE dark:text-CYAN font-bold">
                três níveis incrementais
              </span>
              :
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex flex-col items-center text-center shadow-lg px-10 py-5 rounded-xl my-10  dark:bg-white flex-1">
              <FrameworkIcon level="murro" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                <mark className="px-2 py-1 bg-gradient-to-br from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD text-white">
                  MURRO
                </mark>
              </h3>
              <p className="pt-2 border-b-2 border-ORANGE dark:border-EMERALD">
                Onde "resolver no soco" é o certo.
              </p>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN py-4 font-semibold">
                zero código + foco em processo
              </h4>
              <p className="text-IRON font-medium font-mono">
                Glide
                <br />
                Notion
                <br />
                IA
              </p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg px-10 py-5 rounded-xl my-10 dark:bg-white flex-1">
              <FrameworkIcon level="martelo" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                <mark className="px-2 py-1 bg-gradient-to-bl from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD text-white">
                  MARTELO
                </mark>
              </h3>
              <p className="pt-2 border-b-2 border-ORANGE dark:border-EMERALD">
                Pendurar uns quadros faz bem.
              </p>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN py-4 font-semibold">
                site próprio + identidade visual
              </h4>
              <p className="text-IRON font-medium font-mono">
                React
                <br />
                Tailwind
                <br />
                Firebase
              </p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg px-10 py-5 rounded-xl my-10 dark:bg-white flex-1">
              <FrameworkIcon level="marreta" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                <mark className="px-2 py-1 bg-gradient-to-tr from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD text-white">
                  MARRETA
                </mark>
              </h3>
              <p className="pt-2 border-b-2 border-ORANGE dark:border-EMERALD">
                Acima disso, é pren$a hidráulica.
              </p>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN py-4 font-semibold">
                plataforma + fluxo de dados
              </h4>
              <p className="text-IRON font-medium font-mono">
                as anteriores +<br />
                Flutterflow
                <br />
                AWS
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
