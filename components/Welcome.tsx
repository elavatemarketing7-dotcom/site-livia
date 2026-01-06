
import React from 'react';
import { HERO_IMAGES, EXPERT_INFO } from '../constants';
import { ChevronRight, ClipboardList } from 'lucide-react';

interface WelcomeProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGES[0]} 
          alt="Dra. Lívia Faria" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-2 gold-text">Dra. Lívia Faria</h1>
        <p className="text-stone-400 text-lg mb-12 tracking-widest uppercase">Harmonização Facial</p>
        
        <div className="w-full space-y-4">
          <button 
            onClick={onStartQuiz}
            className="w-full gold-gradient text-black font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 premium-shadow transition-transform active:scale-95"
          >
            <ClipboardList className="w-6 h-6" />
            INICIAR AVALIAÇÃO PERSONALIZADA
          </button>
          
          <button 
            onClick={onGoToSite}
            className="w-full border border-stone-700 bg-stone-900/50 text-stone-300 font-medium py-4 px-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors"
          >
            Acessar site direto
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-8 text-stone-500 text-sm">
          Descubra o tratamento ideal para o seu perfil.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
