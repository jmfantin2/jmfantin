import Image from 'next/image';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import { GiFirePunch, GiClawHammer, GiThorHammer } from 'react-icons/gi';

export function ProjectCard() {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1">
        <GiClawHammer className="m-2 md:m-4 z-10 absolute border-2 border-white text-white text-5xl md:text-6xl p-2 md:p-3 bg-gradient-to-br from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD rounded-full" />
        <mark className="z-10 relative bottom-6 md:bottom-4 py-1 px-4 bg-black border-white text-white font-mono">
          numen527 webpage
        </mark>
        <a href="https://numen527.vercel.app" target="_blank" rel="noreferrer">
          <Image
            alt=""
            className=" rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={web1}
          />
        </a>
      </div>
      <div className="basis-1/3 flex-1 ">
        <GiFirePunch className="m-2 md:m-4 z-10 absolute border-2 border-white text-white text-5xl md:text-6xl p-2 md:p-3 bg-gradient-to-br from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD rounded-full" />
        <mark className="z-10 relative bottom-6 md:bottom-4 py-1 px-4 bg-[#ff7f51] border-white text-white font-mono">
          lits da helplit
        </mark>
        <a href="https://helplit.glide.page" target="_blank" rel="noreferrer">
          <Image
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={web2}
          />
        </a>
      </div>
    </div>
  );
}
