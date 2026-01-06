
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, HERO_IMAGES, EXPERT_INFO } from '../constants';
import { QuizAnswer } from '../types';
import { ArrowLeft } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: QuizAnswer[]) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = {
      question: QUIZ_QUESTIONS[currentStep].question,
      answer: option
    };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => onComplete(newAnswers), 300);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-[#0a0a0a]">
      {/* Background Hero Focus */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <img src={HERO_IMAGES[1]} alt="" className="w-full h-full object-cover scale-110 blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-lg bg-stone-900/90 border border-stone-800 p-8 pt-16 rounded-3xl shadow-2xl backdrop-blur-xl mt-10">
        
        {/* Floating Framed Photo */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <div className="relative w-32 h-32 rounded-full p-1 gold-gradient animate-float premium-shadow">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-stone-900 bg-stone-800">
              <img 
                src={HERO_IMAGES[5]} 
                alt="Dra. Lívia Faria" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online Badge */}
            <div className="absolute bottom-1 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-stone-900 shadow-lg">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
            </div>
          </div>
        </div>

        {/* Header inside Quiz */}
        <div className="text-center mb-8">
          <span className="font-signature text-2xl gold-text block mb-1">Dra. {EXPERT_INFO.name}</span>
          <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
            <div 
              className="h-full gold-gradient transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-stone-500 text-xs mt-2 uppercase tracking-widest">Avaliação em andamento • {currentStep + 1}/{QUIZ_QUESTIONS.length}</p>
        </div>

        <div className="min-h-[280px] flex flex-col justify-center">
          <h2 className="text-2xl font-serif text-white mb-8 text-center leading-relaxed px-2">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="grid gap-3">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-5 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-[#d4af37] hover:bg-stone-800 transition-all active:scale-[0.98] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-stone-200 font-medium group-hover:text-white transition-colors">{option}</span>
                  <div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center group-hover:border-[#d4af37]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] scale-0 group-hover:scale-100 transition-transform"></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button 
            onClick={currentStep === 0 ? onCancel : () => setCurrentStep(currentStep - 1)}
            className="text-stone-500 text-sm flex items-center gap-1 hover:text-stone-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {currentStep === 0 ? 'Cancelar' : 'Anterior'}
          </button>
          
          <button 
            onClick={onCancel}
            className="text-[#d4af37] text-sm font-medium hover:underline opacity-60 hover:opacity-100 transition-opacity"
          >
            Pular para o site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
