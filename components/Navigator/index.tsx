import { BsFillMoonStarsFill } from 'react-icons/bs';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { FaSun } from 'react-icons/fa';
import { GiBrazilFlag } from 'react-icons/gi';
import { useLang } from '../../contexts/LangContext';
import { useTheme } from '../../contexts/ThemeContext';
import TXT from '../../lib/strings/constants';

export function Navigator() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="py-4 md:py-10 mb-12 flex justify-between items-center dark:text-white">
      <h1 className="font-burtons pt-2 text-2xl">
        JMFANT
        <span className="mr-1 text-lg text-ORANGE dark:text-EMERALD">•</span>
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
          {theme.title === 'DARK' ? (
            <BsFillMoonStarsFill
              onClick={() => toggleTheme()}
              className="text-CYAN cursor-pointer text-2xl hover:text-EMERALD transition-colors ease-in-out ml-4 md:ml-8"
            />
          ) : (
            <FaSun
              onClick={() => toggleTheme()}
              className="text-ROSE cursor-pointer text-3xl hover:text-ORANGE transition-colors ease-in-out ml-4 md:ml-8"
            />
          )}
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
  );
}
