/* eslint-disable react/no-unescaped-entities */
import shapeshifter from 'classnames';
import { TypeAnimation } from 'react-type-animation';
import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import alchemist from '../public/alchemist.png';
import Image from 'next/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { FrameworkIcon } from '../components/FrameworkIcon';
import { Navigator } from '../components/Navigator';
import { Bored } from '../components/Bored';
import { useLang } from '../contexts/LangContext';
import { useTheme } from '../contexts/ThemeContext';

import TXT from '../lib/strings/constants';

export default function Home() {
  const { lang } = useLang();
  const { theme } = useTheme();

  return (
    <div
      className={theme.title === 'DARK' ? 'dark select-none' : 'select-none'}
    >
      <Head>
        <title>JMFANT•IN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-PAPER px-4 dark:bg-IRON md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navigator /> <Bored />
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
              {TXT('INTRO')}
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 mb-10 md:mb-28 text-ROSE dark:text-cyan-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-br rotate-45 from-transparent to-ROSE dark:from-transparent dark:to-cyan-700 w-48 h-48 relative overflow-y-hidden md:h-96 md:w-96">
              <Image alt="" src={alchemist} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-white ">
              {TXT('THREE_M_P1') + ' '}
              <mark className="px-2 bg-rose-400 dark:bg-cyan-600 dark:text-white">
                "3M"
              </mark>
              {lang.iso === 'EN' ? ' methodology.' : null}
            </h3>
            <p className="text-md py-2 leading-tight text-gray-800 dark:text-gray-200">
              {TXT('JOKE') + ' '}
            </p>
            <p className="text-md py-2 leading-tight text-gray-800 dark:text-gray-200">
              {TXT('ACADEMIC_BEG')}
              <span className="text-ROSE dark:text-CYAN font-bold">
                {TXT('KILLING_ANTS')}
              </span>
              {TXT('ALMOST_A_DECADE')}
              <span className="text-ROSE dark:text-CYAN font-bold">
                {TXT('EXPERIMENTALISM')}
              </span>
              {TXT('ACADEMIC_END')}
              <span className="text-ROSE dark:text-CYAN font-bold">
                {TXT('THREE_INCREMENTAL_LEVELS')}
              </span>
              :
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex flex-col items-center text-center shadow-lg px-10 py-5 rounded-xl my-10  dark:bg-white flex-1">
              <FrameworkIcon level="murro" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                <mark className="px-2 py-1 bg-gradient-to-br from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD text-white">
                  {TXT('MURRO')}
                </mark>
              </h3>
              <p className="pt-2 border-b-2 border-ORANGE dark:border-EMERALD">
                {TXT('MURRO_JOKE')}
              </p>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN py-4 font-semibold">
                {TXT('MURRO_HINT')}
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
                  {TXT('MARTELO')}
                </mark>
              </h3>
              <p className="pt-2 border-b-2 border-ORANGE dark:border-EMERALD">
                {TXT('MARTELO_JOKE')}
              </p>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN py-4 font-semibold">
                {TXT('MARTELO_HINT')}
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
                  {TXT('MARRETA')}
                </mark>
              </h3>
              <p className="pt-2 border-b-2 border-ORANGE dark:border-EMERALD">
                {TXT('MARRETA_JOKE')}
              </p>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN py-4 font-semibold">
                {TXT('MARRETA_HINT')}
              </h4>
              <p className="text-IRON font-medium font-mono">
                {lang.iso === 'PT' ? 'as anteriores ' : 'the former '}+<br />
                Flutterflow
                <br />
                AWS
              </p>
            </div>
          </div>

          <p
            className={shapeshifter('text-ROSE dark:text-CYAN', {
              'hidden': lang.iso !== 'EN',
            })}
          >
            Initials are lost in translation though. ¯\_(ツ)_/¯
          </p>
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
