import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TXT from '../lib/strings/constants';

export function SuperlibParallax() {
  return (
    <Parallax pages={4} className="no-scrollbar">
      <ParallaxLayer>
        <h2 className="mt-20 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-4xl py-2  md:text-5xl px-10">
          {TXT('PARALLAX1')}
        </h2>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2}>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-4xl py-2  md:text-5xl px-10">
          {TXT('PARALLAX2')}
        </h2>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2}>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-4xl py-2  md:text-5xl px-10">
          {TXT('PARALLAX3')}
        </h2>
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-base py-2 px-10 opacity-10">
          {TXT('PARALLAX4')}
        </h2>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-lg py-2 px-10 opacity-20">
          {TXT('PARALLAX4')}
        </h2>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-xl py-2 px-10 opacity-40">
          {TXT('PARALLAX4')}
        </h2>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-2xl py-2 px-10 opacity-60">
          {TXT('PARALLAX4')}
        </h2>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-3xl py-2 px-10 opacity-80">
          {TXT('PARALLAX4')}
        </h2>
        <h2 className="leading-tight text-transparent bg-clip-text bg-gradient-to-b from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN font-poppins font-bold text-4xl py-2 px-10">
          {TXT('PARALLAX4')}
        </h2>
        <a
          href="https://superlib.jmfant.in"
          target="_blank"
          rel="noreferrer"
          className=" m-10 flex p-10 bg-gradient-to-br from-ORANGE to-ROSE dark:from-EMERALD dark:to-CYAN rounded-2xl justify-center items-center text-center font-burtons font-bold text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl hover:opacity-90"
        >
          {TXT('SUPERLIB_BTN')}
        </a>
      </ParallaxLayer>
    </Parallax>
  );
}
