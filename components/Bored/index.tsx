import TXT from '../../lib/strings/constants';
import { toast } from 'react-hot-toast';
import { useLang } from '../../contexts/LangContext';
import shapeshifter from 'classnames';
import { useState } from 'react';
import { quotesPT } from '../../lib/strings/quotes';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';

export function Bored() {
  const { lang } = useLang();
  //const [quoteENIndex, setQuoteENIndex] = useState(0);
  const [quotePTIndex, setQuotePTIndex] = useState(0);
  //uses separate lists of strings by language
  //renders two buttons but always keeps one hidden
  //but at the moment we won't use the EN one
  const [flagModal, setFlagModal] = useState(false);
  const [showModal, hideModal] = useModal(() => (
    <div onClick={hideModal}>
      <ReactModal
        isOpen
        className="flex flex-col h-screen w-screen items-center text-center justify-center"
      >
        <mark className="text-white bg-gradient-to-br from-ORANGE to-ROSE font-mono leading-tight mb-4 px-4">
          (51) 994 321 079
        </mark>
        <div className="border-4 border-ROSE dark:border-CYAN bg-WHATSAPP w-[200px] h-[200px] bg-cover" />

        <mark className="text-white bg-gradient-to-bl from-ROSE to-ORANGE font-mono leading-tight mt-4 px-4">
          tenho certeza que tuas dúvidas
          <br />
          são mais úteis que as minhas.
        </mark>
        <mark className="text-white bg-gradient-to-br from-ORANGE to-ROSE font-mono leading-tight mt-4 px-4">
          me manda um whats dizendo que viu isso!
        </mark>
        <mark className="text-white bg-gradient-to-bl from-ROSE to-ORANGE font-mono leading-tight mt-4 px-4">
          me deixaria empolgado, de verdade.
        </mark>
      </ReactModal>
    </div>
  ));

  return (
    <>
      <a
        className={shapeshifter(
          'fixed z-10 bottom-4 right-4 cursor-pointer font-burtons text-lg bg-gradient-to-r from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD hover:bg-gradient-to-b text-white px-4 py-1 border-none rounded-md transition-colors ease-in-out',
          { 'hidden': lang.iso !== 'PT' || flagModal }
        )}
        onClick={async () => {
          toast(quotesPT[quotePTIndex].saying, {
            duration: 4000,
            icon: quotesPT[quotePTIndex].emoji,
          });
          if (quotePTIndex < quotesPT.length - 1) {
            setQuotePTIndex(quotePTIndex + 1);
          } else {
            setFlagModal(true);
            showModal();
            setQuotePTIndex(0);
          }
        }}
      >
        {TXT('DARE') /*TEDIO*/}
      </a>
      <a
        className={shapeshifter(
          'fixed z-10 bottom-4 right-4 cursor-pointer font-burtons text-lg bg-gradient-to-r from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD hover:bg-gradient-to-b text-white px-4 py-1 border-none rounded-md transition-colors ease-in-out',
          { 'hidden': lang.iso !== 'PT' || !flagModal }
        )}
        onClick={showModal}
      >
        whats
      </a>
    </>
  );
}
