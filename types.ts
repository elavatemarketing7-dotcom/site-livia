
export enum AppState {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
  LANDING = 'LANDING'
}

export interface QuizAnswer {
  question: string;
  answer: string;
}

export interface ImageAsset {
  url: string;
  alt: string;
}
