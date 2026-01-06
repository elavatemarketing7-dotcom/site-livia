
import React from 'react';
import { Sparkles, ShieldCheck, Heart, UserCheck, MessageCircle, MapPin } from 'lucide-react';

export const EXPERT_INFO = {
  name: 'Lívia Faria',
  profession: 'Harmonização Facial',
  locations: 'Pará de Minas / Itaúna / São Gonçalo',
  whatsappUrl: 'https://wa.me/5537998704506',
  instagram: 'https://www.instagram.com/draliviafaria/',
};

export const HERO_IMAGES = [
  'https://i.imgur.com/VC3NE09.png',
  'https://i.imgur.com/8Pl2mY5.png',
  'https://i.imgur.com/ssh1nEi.png',
  'https://i.imgur.com/S2Cz7UI.png',
  'https://i.imgur.com/DylDWIo.png',
  'https://i.imgur.com/mHB21rv.png',
];

export const GALLERY_RESULTS = [
  'https://i.imgur.com/9IBfTk1.png',
  'https://i.imgur.com/cyeoLOE.png',
  'https://i.imgur.com/ezZFkN4.png',
  'https://i.imgur.com/l7kXm7F.png',
  'https://i.imgur.com/RYcnhsw.png',
  'https://i.imgur.com/kUYGfcz.png',
  'https://i.imgur.com/Bou3CPr.png',
  'https://i.imgur.com/I2kqZ3R.png',
  'https://i.imgur.com/IFSKnfA.png',
  'https://i.imgur.com/4F1cHVY.png',
  'https://i.imgur.com/QzKJ3H5.png',
  'https://i.imgur.com/JOMU7Bx.png',
  'https://i.imgur.com/ZZHJPrv.png',
  'https://i.imgur.com/xkRX75u.png',
  'https://i.imgur.com/LgpxmH7.png',
  'https://i.imgur.com/NKn6rIO.png',
];

export const GALLERY_HEART = [
  'https://i.imgur.com/sQg9StM.png',
  'https://i.imgur.com/fQhHQkL.png',
  'https://i.imgur.com/hq5NrxH.png',
  'https://i.imgur.com/98YV2m7.png',
  'https://i.imgur.com/J3AT4wP.png',
  'https://i.imgur.com/h2xDW5z.png',
  'https://i.imgur.com/Q5q8lw2.png',
  'https://i.imgur.com/9wv63XV.png',
  'https://i.imgur.com/9F7ubsg.png',
  'https://i.imgur.com/bhuuT0v.png',
];

export const TRUST_CARDS = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#d4af37]" />,
    title: 'Naturalidade',
    description: 'Resultados sutis que preservam sua essência e traços únicos.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#d4af37]" />,
    title: 'Segurança Total',
    description: 'Protocolos rigorosos e os melhores materiais do mercado mundial.'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-[#d4af37]" />,
    title: 'Avaliação Honesta',
    description: 'Indico apenas o necessário para realçar sua beleza natural.'
  },
  {
    icon: <Heart className="w-8 h-8 text-[#d4af37]" />,
    title: 'Cuidado Humano',
    description: 'Atendimento próximo, tirando todas as suas dúvidas com calma.'
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "O que mais te incomoda hoje ao se olhar no espelho?",
    options: ["Rugas e linhas de expressão", "Falta de volume nos lábios", "Perda do contorno facial", "Sinto que pareço cansada(o)"]
  },
  {
    id: 2,
    question: "Você já realizou algum procedimento de harmonização facial?",
    options: ["Nunca realizei", "Sim, já realizei e amei", "Sim, mas não tive o resultado esperado", "Apenas procedimentos básicos"]
  },
  {
    id: 3,
    question: "Qual o seu principal objetivo com o tratamento?",
    options: ["Rejuvenescimento natural", "Correção de assimetrias", "Prevenir o envelhecimento", "Sentir minha autoestima renovada"]
  },
  {
    id: 4,
    question: "O quanto você valoriza a naturalidade nos resultados?",
    options: ["Extremamente, não quero parecer artificial", "Valorizo, mas quero mudanças visíveis", "Prefiro resultados mais marcantes", "Confio na avaliação da Dra."]
  }
];
