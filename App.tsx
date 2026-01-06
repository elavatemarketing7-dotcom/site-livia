
import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, ShieldCheck, Heart, UserCheck, MessageCircle, MapPin, 
  ChevronRight, ClipboardList, ArrowLeft, ArrowRight, Maximize2, 
  CheckCircle2, Instagram, Loader2, Quote, Star 
} from 'lucide-react';

// --- TYPES & ENUMS ---
export enum AppState { WELCOME, QUIZ, ANALYZING, RESULTS, LANDING }
interface QuizAnswer { question: string; answer: string; }

// --- CONSTANTS ---
const INSTAGRAM_PROMPT = encodeURIComponent("Olá Dra. Lívia! Vi seu trabalho no Instagram e gostaria de saber mais sobre a harmonização facial e agendar uma avaliação.");

const EXPERT_INFO = {
  name: 'Lívia Faria',
  profession: 'Harmonização Facial',
  locations: 'Pará de Minas / Itaúna / São Gonçalo',
  whatsappBaseUrl: 'https://wa.me/5537998704506',
  whatsappDirectUrl: `https://wa.me/5537998704506?text=${INSTAGRAM_PROMPT}`,
  instagram: 'https://www.instagram.com/draliviafaria/',
};

const IMAGES = {
  hero: [
    'https://i.imgur.com/VC3NE09.png', 
    'https://i.imgur.com/8Pl2mY5.png', 
    'https://i.imgur.com/ssh1nEi.png', 
    'https://i.imgur.com/S2Cz7UI.png', 
    'https://i.imgur.com/DylDWIo.png', 
    'https://i.imgur.com/mHB21rv.png'
  ],
  results: [
    'https://i.imgur.com/9IBfTk1.png', 'https://i.imgur.com/cyeoLOE.png', 'https://i.imgur.com/ezZFkN4.png', 
    'https://i.imgur.com/l7kXm7F.png', 'https://i.imgur.com/RYcnhsw.png', 'https://i.imgur.com/kUYGfcz.png', 
    'https://i.imgur.com/Bou3CPr.png', 'https://i.imgur.com/I2kqZ3R.png', 'https://i.imgur.com/IFSKnfA.png', 
    'https://i.imgur.com/4F1cHVY.png', 'https://i.imgur.com/QzKJ3H5.png', 'https://i.imgur.com/JOMU7Bx.png', 
    'https://i.imgur.com/ZZHJPrv.png', 'https://i.imgur.com/xkRX75u.png', 'https://i.imgur.com/LgpxmH7.png', 
    'https://i.imgur.com/NKn6rIO.png'
  ],
  heart: [
    'https://i.imgur.com/sQg9StM.png', 'https://i.imgur.com/fQhHQkL.png', 'https://i.imgur.com/hq5NrxH.png', 
    'https://i.imgur.com/98YV2m7.png', 'https://i.imgur.com/J3AT4wP.png', 'https://i.imgur.com/h2xDW5z.png', 
    'https://i.imgur.com/Q5q8lw2.png', 'https://i.imgur.com/9wv63XV.png', 'https://i.imgur.com/9F7ubsg.png', 
    'https://i.imgur.com/bhuuT0v.png'
  ]
};

const QUIZ_QUESTIONS = [
  { q: "O que mais te incomoda hoje ao se olhar no espelho?", options: ["Rugas e linhas de expressão", "Falta de volume nos lábios", "Perda do contorno facial", "Sinto que pareço cansada(o)"] },
  { q: "Você já realizou algum procedimento de harmonização?", options: ["Nunca realizei", "Sim, já realizei e amei", "Sim, mas não tive o resultado esperado", "Apenas procedimentos básicos"] },
  { q: "Qual o seu principal objetivo com o tratamento?", options: ["Rejuvenescimento natural", "Correção de assimetrias", "Prevenir o evelhecimento", "Sentir minha autoestima renovada"] },
  { q: "O quanto você valoriza a naturalidade?", options: ["Extremamente, não quero parecer artificial", "Valorizo, mas quero mudanças visíveis", "Prefiro resultados mais marcantes", "Confio na avaliação da Dra."] }
];

const TRUST_CARDS = [
  { icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />, title: 'Naturalidade', desc: 'Resultados sutis que preservam sua essência.' },
  { icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />, title: 'Segurança', desc: 'Protocolos rigorosos e os melhores materiais.' },
  { icon: <UserCheck className="w-6 h-6 md:w-8 md:h-8" />, title: 'Honestidade', desc: 'Indico apenas o necessário para sua beleza.' },
  { icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />, title: 'Cuidado', desc: 'Atendimento próximo e humano.' }
];

// --- COMPONENTS ---

const Welcome = ({ onStart, onSkip }: any) => (
  <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#0a0a0a]">
    <div className="absolute inset-0 z-0">
      <img 
        src={IMAGES.hero[0]} 
        alt="Dra. Lívia Faria" 
        className="w-full h-full object-cover object-top opacity-100" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
    </div>
    <div className="relative z-10 w-full max-w-md">
      <h1 className="font-serif text-5xl md:text-7xl mb-2 gold-text drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">Dra. {EXPERT_INFO.name}</h1>
      <p className="text-white tracking-[0.3em] uppercase text-[10px] md:text-xs mb-10 md:mb-12 font-bold drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] opacity-90">Harmonização Facial Premium</p>
      
      <div className="space-y-3 md:space-y-4">
        <button onClick={onStart} className="w-full gold-gradient text-black font-black py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 premium-shadow active:scale-95 transition-transform text-sm md:text-base">
          <ClipboardList className="w-5 h-5 md:w-6 md:h-6" /> INICIAR AVALIAÇÃO PERSONALIZADA
        </button>
        
        <a 
          href={EXPERT_INFO.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 backdrop-blur-md border border-white/20 active:scale-95 transition-all text-sm md:text-base shadow-xl"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" /> FALAR COM A DRA. AGORA
        </a>

        <button onClick={onSkip} className="w-full text-stone-400 py-2 flex items-center justify-center gap-2 hover:text-white transition-colors text-[11px] md:text-xs font-medium uppercase tracking-widest">
          Acessar site direto <ChevronRight size={14} />
        </button>
      </div>
    </div>
  </div>
);

const Quiz = ({ onComplete, onCancel }: any) => {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<QuizAnswer[]>([]);

  const handleSelect = (option: string) => {
    const newAns = [...ans, { question: QUIZ_QUESTIONS[step].q, answer: option }];
    setAns(newAns);
    if (step < QUIZ_QUESTIONS.length - 1) setStep(step + 1);
    else onComplete(newAns);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={IMAGES.hero[1]} className="w-full h-full object-cover blur-sm" />
      </div>
      <div className="relative z-10 w-full max-w-lg bg-stone-900/95 border border-stone-800 p-6 md:p-10 pt-20 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 gold-gradient animate-float premium-shadow">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-stone-900 bg-stone-800">
              <img src={IMAGES.hero[5]} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-2 bg-green-500 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-stone-900 shadow-lg">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden mb-2">
            <div className="h-full gold-gradient transition-all duration-500" style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }} />
          </div>
          <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">Passo {step + 1} de {QUIZ_QUESTIONS.length}</p>
        </div>
        <h2 className="text-xl md:text-2xl font-serif mb-8 text-center leading-snug">{QUIZ_QUESTIONS[step].q}</h2>
        <div className="grid gap-2.5 mb-8">
          {QUIZ_QUESTIONS[step].options.map((opt, i) => (
            <button key={i} onClick={() => handleSelect(opt)} className="w-full text-left p-4 rounded-xl bg-stone-800/40 border border-stone-700 hover:border-[#d4af37] hover:bg-stone-800 active:scale-[0.98] transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-stone-200 text-sm md:text-base group-hover:text-white">{opt}</span>
                <div className="w-4 h-4 rounded-full border border-stone-600 group-hover:border-[#d4af37] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-[10px] md:text-xs">
          <button 
            onClick={() => step > 0 && setStep(step - 1)} 
            className="text-stone-500 flex items-center gap-1 hover:text-white transition-colors py-2"
          >
            <ArrowLeft size={14}/> Anterior
          </button>

          <a 
            href={EXPERT_INFO.whatsappDirectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-500 font-bold hover:text-green-400 transition-colors py-2 border-x border-stone-800 px-4"
          >
            <MessageCircle size={14} /> Falar com Dra.
          </a>

          <button 
            onClick={onCancel} 
            className="text-[#d4af37] font-bold hover:text-[#f9e29d] transition-colors py-2"
          >
            Pular quiz
          </button>
        </div>
      </div>
    </div>
  );
};

const Analyzing = ({ onFinish }: any) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Iniciando análise facial...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    const statuses = ["Identificando pontos de tensão...", "Analisando proporção áurea...", "Verificando disponibilidade...", "Gerando plano de beleza personalizada..."];
    const statusInterval = setInterval(() => {
      setStatus(prev => {
        const idx = statuses.indexOf(prev);
        return statuses[(idx + 1) % statuses.length];
      });
    }, 900);

    return () => { clearInterval(timer); clearInterval(statusInterval); };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a0a]">
      <div className="w-full max-w-sm text-center">
        <div className="mb-12 relative inline-block">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-stone-800 flex items-center justify-center relative z-10 bg-[#0a0a0a]">
            <Loader2 className="w-10 h-10 text-[#d4af37] animate-spin" />
          </div>
          <div className="absolute -inset-4 gold-gradient opacity-20 blur-2xl rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-2xl font-serif mb-4 gold-text italic">Analisando seu Perfil...</h2>
        <p className="text-stone-400 mb-12 h-6 text-sm italic">{status}</p>
        <div className="relative h-2 w-full bg-stone-900 rounded-full overflow-hidden border border-stone-800">
          <div className="absolute top-0 left-0 h-full gold-gradient shadow-[0_0_20px_rgba(212,175,55,0.6)]" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-4 text-[10px] text-stone-600 uppercase tracking-[0.2em] font-black">{progress}% Processado</p>
      </div>
    </div>
  );
};

const Results = ({ answers, onNext }: any) => {
  const formatMsg = () => {
    let m = `Olá Dra. Lívia! Realizei a avaliação no site:\n\n`;
    answers.forEach((a: any, i: number) => m += `*${i+1}. ${a.question}*\nR: ${a.answer}\n\n`);
    m += `Gostaria de agendar minha consulta!`;
    return encodeURIComponent(m);
  };

  const whatsappLink = `${EXPERT_INFO.whatsappBaseUrl}?text=${formatMsg()}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-800">
        <div className="p-4 text-center gold-gradient text-black font-black uppercase text-[10px] tracking-widest">Resultado: Perfil Compatível</div>
        <div className="relative aspect-[4/5]"><img src={IMAGES.hero[2]} className="w-full h-full object-cover" /></div>
        <div className="p-6 md:p-8 space-y-4">
          <p className="text-center italic text-stone-300 leading-relaxed font-serif text-sm md:text-base">"Seu perfil é ideal para o meu método de harmonização natural. Vamos realçar seus traços?"</p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white py-4 md:py-5 rounded-2xl font-black shadow-lg animate-pulse active:scale-95 transition-all"
          >
            <MessageCircle size={24} /> ENVIAR MINHA AVALIAÇÃO
          </a>
          <button onClick={onNext} className="w-full text-stone-500 text-[10px] font-bold hover:text-white transition-colors uppercase tracking-widest">CONTINUAR PARA O SITE COMPLETO</button>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [zoom, setZoom] = useState<string|null>(null);

  return (
    <div className="bg-[#0a0a0a] selection:bg-[#d4af37] selection:text-black scroll-smooth">
      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero[0]} 
            alt="Dra. Lívia Faria" 
            className="w-full h-full object-cover object-top opacity-100" 
            style={{ filter: 'brightness(0.95) contrast(1.02)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto pb-10 md:pb-20">
          <div className="max-w-xl">
            <p className="font-signature text-3xl md:text-4xl gold-text mb-2 drop-shadow-lg">Dra.</p>
            <h1 className="font-serif text-5xl md:text-8xl mb-6 leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] text-white">Lívia Faria</h1>
            <p className="text-white text-base md:text-xl mb-8 leading-relaxed max-w-md font-medium drop-shadow-[0_2px_15px_rgba(0,0,0,1)] opacity-90">Realçando sua beleza natural através de uma harmonização exclusiva e segura.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={EXPERT_INFO.whatsappDirectUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-black font-extrabold py-4 md:py-5 px-8 md:px-10 rounded-full premium-shadow active:scale-95 transition-all hover:bg-stone-100 shadow-2xl text-sm md:text-base"
              >
                <MessageCircle size={20} /> AGENDAR CONSULTA GRATUITA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOBRE */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/50 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-bold">
              Expertise & Autoridade
            </div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">Autoridade e Paixão <br/><span className="gold-text">pela Naturalidade</span></h2>
            <div className="space-y-4 text-stone-400 leading-relaxed font-light text-base md:text-lg">
              <p>Minha missão é destacar a melhor versão que já existe em você. Atendo com excelência em <b>Pará de Minas, Itaúna e São Gonçalo</b>.</p>
              <p>Acredito em procedimentos que respeitam sua individualidade, buscando sempre a naturalidade sem exageros.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {TRUST_CARDS.map((c, i) => (
                <div key={i} className="p-5 md:p-6 bg-stone-900/50 border border-stone-800 rounded-2xl group hover:border-[#d4af37] transition-all">
                  <div className="text-[#d4af37] mb-3 group-hover:scale-110 transition-transform">{c.icon}</div>
                  <h4 className="text-[11px] md:text-xs font-bold mb-1 uppercase tracking-tighter">{c.title}</h4>
                  <p className="text-[10px] md:text-xs text-stone-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 gold-gradient opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-[3rem]"></div>
            <img src={IMAGES.hero[3]} className="relative rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-stone-800 w-full" />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-stone-900 border border-stone-800 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl">
               <div className="flex text-[#d4af37] mb-1 gap-0.5"><Star size={10}/><Star size={10}/><Star size={10}/><Star size={10}/><Star size={10}/></div>
               <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Atendimento VIP</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-stone-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="gold-text uppercase tracking-[0.3em] text-[10px] font-black mb-2">Portfolio de Casos</p>
            <h2 className="font-serif text-3xl md:text-5xl">Transformações Reais</h2>
            <div className="h-1 w-16 md:w-20 gold-gradient mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {IMAGES.results.map((img, i) => (
              <div key={i} onClick={() => setZoom(img)} className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative bg-stone-800 shadow-lg">
                <img src={img} alt={`Resultado ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <Maximize2 size={24} className="text-white scale-50 group-hover:scale-100 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESSO */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Sua Jornada <br/><span className="gold-text">Exclusiva</span></h2>
            <p className="text-stone-500 font-light text-sm md:text-base leading-relaxed">Passo a passo pensado para seu conforto e segurança total em cada etapa.</p>
          </div>
          <div className="md:col-span-2 space-y-10 relative">
            <div className="absolute left-6 md:left-6 top-0 bottom-0 w-px bg-stone-800 -z-10 hidden sm:block"></div>
            {[
              { t: 'Primeiro Contato', d: 'Inicie uma conversa no WhatsApp para tirar suas dúvidas iniciais.' },
              { t: 'Agendamento VIP', d: 'Marcamos sua consulta presencial em uma de nossas unidades exclusivas.' },
              { t: 'Avaliação & Plano', d: 'Realizo a análise técnica facial e definimos o plano ideal para você.' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start group">
                <div className="w-12 h-12 rounded-full gold-gradient text-black flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">{i+1}</div>
                <div className="pt-1">
                  <h3 className="text-lg md:text-xl font-serif mb-1">{step.t}</h3>
                  <p className="text-stone-500 font-light text-sm md:text-base">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A HARMONIZAÇÃO DE ❤️ (BASTIDORES) */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-stone-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="gold-text uppercase tracking-[0.3em] text-[10px] font-black mb-2">Nos Bastidores</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-3">A Harmonização de ❤️</h2>
            <p className="text-stone-400 font-light text-sm italic max-w-md mx-auto leading-relaxed">
              Momentos de cuidado, carinho e a excelência que entregamos a cada paciente.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
            {IMAGES.heart.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setZoom(img)} 
                className="aspect-square rounded-xl overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition-all duration-700 relative group shadow-xl"
              >
                <img src={img} alt={`Bastidores ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero[4]} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0a0a0a]/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-7xl mb-6 md:mb-10 leading-tight">Sua beleza merece <br/>o melhor cuidado.</h2>
          <p className="text-lg md:text-2xl text-stone-300 mb-10 md:mb-14 font-light max-w-2xl mx-auto leading-relaxed">Garanta sua avaliação e descubra o potencial da sua beleza com a harmonização facial premium.</p>
          <a 
            href={EXPERT_INFO.whatsappDirectUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 gold-gradient text-black font-black py-5 md:py-6 px-10 md:px-14 rounded-full text-base md:text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle size={24} /> AGENDAR AGORA NO WHATSAPP
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:py-20 px-6 md:px-12 border-t border-stone-900 bg-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-serif text-3xl md:text-4xl mb-1 gold-text tracking-tighter">Dra. {EXPERT_INFO.name}</div>
          <p className="text-stone-600 text-[10px] uppercase tracking-[0.4em] mb-10">{EXPERT_INFO.profession}</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12">
            <div className="flex items-center gap-2 text-stone-500 text-sm"><MapPin size={14} className="text-[#d4af37]"/> {EXPERT_INFO.locations}</div>
            <a href={EXPERT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-500 text-sm hover:text-[#d4af37] transition-colors"><Instagram size={14}/> @draliviafaria</a>
          </div>
          <div className="font-signature text-3xl md:text-4xl gold-text mb-8 opacity-40">Lívia Faria</div>
          <p className="text-stone-800 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {zoom && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setZoom(null)}>
          <div className="relative max-w-4xl w-full">
            <img src={zoom} className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-stone-800" />
            <button className="absolute -top-10 right-0 text-white flex items-center gap-2 font-bold hover:text-white text-xs" onClick={() => setZoom(null)}>FECHAR [X]</button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [state, setState] = useState(AppState.WELCOME);
  const [ans, setAns] = useState<QuizAnswer[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state]);

  switch (state) {
    case AppState.WELCOME: 
      return <Welcome onStart={() => setState(AppState.QUIZ)} onSkip={() => setState(AppState.LANDING)} />;
    case AppState.QUIZ: 
      return <Quiz onComplete={(a:any) => { setAns(a); setState(AppState.ANALYZING); }} onCancel={() => setState(AppState.LANDING)} />;
    case AppState.ANALYZING: 
      return <Analyzing onFinish={() => setState(AppState.RESULTS)} />;
    case AppState.RESULTS: 
      return <Results answers={ans} onNext={() => setState(AppState.LANDING)} />;
    default: 
      return <LandingPage />;
  }
}
