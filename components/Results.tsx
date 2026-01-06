
import React from 'react';
import { EXPERT_INFO, HERO_IMAGES } from '../constants';
import { QuizAnswer } from '../types';
import { MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface ResultsProps {
  answers: QuizAnswer[];
  onContinue: () => void;
}

const Results: React.FC<ResultsProps> = ({ answers, onContinue }) => {
  const formatWhatsAppMessage = () => {
    let message = `Olá Dra. Lívia, acabei de realizar minha avaliação no seu site! Aqui estão meus resultados:\n\n`;
    answers.forEach((a, i) => {
      message += `*${i + 1}. ${a.question}*\nR: ${a.answer}\n\n`;
    });
    message += `Gostaria de agendar minha consulta gratuita!`;
    return encodeURIComponent(message);
  };

  const whatsappLink = `${EXPERT_INFO.whatsappUrl}&text=${formatWhatsAppMessage()}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl mt-4">
        {/* Persuasive Header */}
        <div className="p-6 text-center gold-gradient text-black">
          <h2 className="font-bold text-xl uppercase tracking-tighter">Perfil Compatível</h2>
          <p className="text-sm font-medium">Você é a Paciente Ideal</p>
        </div>

        {/* Hero Focus */}
        <div className="relative aspect-[4/5] w-full bg-stone-800 overflow-hidden">
          <img 
            src={HERO_IMAGES[2]} 
            alt="Dra. Lívia Faria" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-0 right-0 px-8 text-center">
            <p className="text-white text-lg leading-tight font-serif italic">
              "Com base nas suas respostas, o meu método consegue entregar exatamente a naturalidade e segurança que você procura."
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="p-6 space-y-3">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 rounded-2xl animate-pulse shadow-lg transition-transform active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            ENVIAR MINHA AVALIAÇÃO DRA
          </a>

          <a 
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full border border-stone-700 bg-stone-800 text-stone-200 font-bold py-4 rounded-2xl transition-transform active:scale-95"
          >
            CHAMAR NO WHATSAPP SEM COMPROMISSO
          </a>

          <button 
            onClick={onContinue}
            className="flex items-center justify-center gap-2 w-full text-stone-500 py-3 text-sm hover:text-stone-300 transition-colors"
          >
            NÃO ENVIAR E CONTINUAR NO SITE
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
