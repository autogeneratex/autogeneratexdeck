
export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  type: 'hero' | 'bullet' | 'process' | 'comparison' | 'cta';
  image?: string;
  accentColor?: string;
  visionaryConcept?: string;
}

export interface DeckState {
  currentSlideIndex: number;
  slides: SlideData[];
}
