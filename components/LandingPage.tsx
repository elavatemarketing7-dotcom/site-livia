
import React, { useState } from 'react';
import { EXPERT_INFO, HERO_IMAGES, GALLERY_RESULTS, GALLERY_HEART, TRUST_CARDS } from '../constants';
import { MessageCircle, Instagram, MapPin, CheckCircle2, Star, Quote, ChevronRight, Maximize2 } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Image - strategic positioning to not block facial beauty */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGES[0]} 
            alt="Dra. Lívia Faria" 
            className="w-full h-full object-cover object-[center_20%] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 pb-20 max-w-4xl mx-auto w-full">
          <p className="font-signature text-3xl gold-text mb-2">Eu sou a</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-4 leading-none">Dra. Lívia Faria</h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8 max-w-lg leading-relaxed font-light">
            Realçando sua beleza natural através de uma harmonização exclusiva, segura e focada na sua autoestima.
          </p>
          
          <div className="space-y-4">
            <a 
              href={EXPERT_INFO.whatsappUrl}
              className="inline-flex items-center justify-center gap-3 bg-white text-black font-bold py-5 px-10 rounded-full text-lg w-full md:w-auto hover:bg-stone-200 transition-all active:scale-95 premium-shadow"
            >
              <MessageCircle className="w-6 h-6" />
              AGENDAR CONSULTA GRATUITA
            </a>
            <p className="text-stone-400 text-xs text-center md:text-left tracking-widest uppercase">
              ✨ Sem compromisso e focado em você
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Autoridade e Paixão pelo que faço</h2>
            <div className="space-y-4 text-stone-300 font-light leading-relaxed">
              <p>
                Minha missão não é mudar quem você é, mas sim destacar a melhor versão que já existe em você. Atendo em <span className="text-white font-medium">Pará de Minas, Itaúna e São Gonçalo</span>, trazendo o que há de mais moderno na Harmonização Facial.
              </p>
              <p>
                Acredito em procedimentos que respeitam a individualidade, buscando sempre a <strong>naturalidade</strong> e evitando o aspecto "congelado" ou artificial que tanto assusta as pacientes.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                <span className="text-stone-200">Especialista em técnicas de rejuvenescimento</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                <span className="text-stone-200">Atendimento 100% focado no paciente</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                <span className="text-stone-200">Materiais de altíssima qualidade</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src={HERO_IMAGES[3]} 
                alt="Expert no trabalho" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center p-4 text-center">
                <p className="text-xs gold-text font-bold uppercase tracking-widest">Procedimentos Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6 bg-stone-900/30">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="gold-text uppercase tracking-widest text-sm font-bold mb-2">Transformações</p>
          <h2 className="font-serif text-4xl md:text-5xl">Resultados Reais</h2>
          <div className="h-1 w-24 gold-gradient mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_RESULTS.map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-xl bg-stone-800"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-stone-500 text-xs mt-12 italic">
          *Os resultados variam de acordo com o organismo de cada pessoa e o plano de tratamento estabelecido.
        </p>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_CARDS.map((card, idx) => (
              <div key={idx} className="p-8 bg-stone-900 border border-stone-800 rounded-3xl hover:border-[#d4af37] transition-colors group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="font-serif text-xl mb-4">{card.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-stone-900 border-y border-stone-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl mb-8">Deseja uma avaliação profissional sem compromisso?</h2>
          <a 
            href={EXPERT_INFO.whatsappUrl}
            className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Falar agora com a Dra. Lívia
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">O Caminho para a sua melhor versão</h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full gold-gradient text-black flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-medium mb-2">Primeiro Contato</h3>
                <p className="text-stone-400">Clique no botão de WhatsApp e inicie uma conversa. Tiraremos suas dúvidas iniciais sobre os procedimentos.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full gold-gradient text-black flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-medium mb-2">Agendamento</h3>
                <p className="text-stone-400">Marcamos sua primeira consulta gratuita presencial em uma de nossas unidades (Pará de Minas, Itaúna ou São Gonçalo).</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full gold-gradient text-black flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-medium mb-2">Avaliação Personalizada</h3>
                <p className="text-stone-400">Na consulta, eu analisarei sua face de forma técnica e estética, sugerindo o melhor plano para o seu objetivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (BASTIDORES) */}
      <section className="py-24 px-6 bg-stone-900/30">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">A Harmonização de ❤️</h2>
          <p className="text-stone-400 font-light">Momentos de cuidado, carinho e bastidores da Dra. Lívia.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {GALLERY_HEART.map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Bastidor ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMAGES[4]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-8">Sua autoestima não pode esperar.</h2>
          <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo hoje. Garanta sua primeira consulta gratuita e descubra como podemos realçar sua beleza natural.
          </p>
          <a 
            href={EXPERT_INFO.whatsappUrl}
            className="inline-flex items-center justify-center gap-3 gold-gradient text-black font-extrabold py-6 px-12 rounded-full text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-7 h-7" />
            GARANTIR MINHA CONSULTA GRÁTIS
          </a>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 px-6 border-t border-stone-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl mb-2">Dra. {EXPERT_INFO.name}</h2>
          <p className="text-stone-500 mb-8 uppercase tracking-widest text-xs">{EXPERT_INFO.profession}</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-stone-400">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm">{EXPERT_INFO.locations}</span>
            </div>
            <a 
              href={EXPERT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-400 hover:text-[#d4af37] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">@dra.liviafaria</span>
            </a>
          </div>
          
          <div className="font-signature text-3xl gold-text mb-8">Lívia Faria</div>
          
          <p className="text-stone-700 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-auto">
            <img 
              src={selectedImage} 
              alt="Ampliada" 
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl border border-stone-800" 
            />
            <button 
              className="absolute -top-12 right-0 text-white flex items-center gap-2 hover:text-[#d4af37]"
              onClick={() => setSelectedImage(null)}
            >
              FECHAR [X]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
