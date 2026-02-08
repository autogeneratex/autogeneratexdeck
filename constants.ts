
import { SlideData } from './types';

export const THEME = {
  black: '#000000',
  red: '#FF1E1E',
  white: '#FFFFFF',
  gray: '#1A1A1A'
};

export const INITIAL_SLIDES: SlideData[] = [
  {
    id: 'intro',
    title: 'AUTO GENX',
    subtitle: 'The Blueprint for High-Ticket Detailing Success',
    content: ['Scaling Mobile Detailers to Ceramic, PPF, and Tint Mastery'],
    type: 'hero',
    accentColor: THEME.red
  },
  {
    id: 'problem',
    title: 'The Mobile Detailer Plateau',
    subtitle: 'Why most businesses stay stuck at $40-$100 jobs',
    content: [
      'Low barrier to entry creates hyper-competition',
      'Physical burnout from high-volume, low-margin labor',
      'Lack of recurring high-ticket revenue streams',
      'No system to build deep trust with premium clients'
    ],
    type: 'bullet',
    visionaryConcept: 'Burnout isn\'t a badge of honor; it\'s the price of a model that doesn\'t scale.'
  },
  {
    id: 'strategy-overview',
    title: 'Our 3-Pillar Strategy',
    subtitle: 'The AutoGenX Growth Loop',
    content: [
      '1. Content Foundation: Authority and Trust',
      '2. Meta Ads Funnel: Qualified Lead Generation',
      '3. Sales Mastery: High-Ticket Conversion'
    ],
    type: 'process'
  },
  {
    id: 'content',
    title: 'Pillar 1: Content as the Foundation',
    subtitle: 'Building Trust Before the Call',
    content: [
      'Proven Video Ideas & Scripts tailored for detailing',
      'Educational hooks that solve premium client pain points',
      'Behind-the-scenes footage to showcase expertise',
      'Turning social media into a pre-sale trust machine'
    ],
    type: 'bullet',
    visionaryConcept: 'Trust is the ultimate currency in high-ticket detailing. Content is how you mint it.'
  },
  {
    id: 'ads',
    title: 'Pillar 2: The Meta Ads Funnel',
    subtitle: 'Targeting Clients Who Want Quality over Price',
    content: [
      'Running ads directly to high-performing content',
      'Advanced Retargeting: Stay top-of-mind for 30+ days',
      'Qualified Lead Filtering: No more "tire kickers"',
      'Scalable Predictability: Turn spend into appointments'
    ],
    type: 'bullet',
    visionaryConcept: 'Ads don\'t create desire; they find the people who already have it and guide them to you.'
  },
  {
    id: 'sales',
    title: 'Pillar 3: Point of Sale Mastery',
    subtitle: 'Maximizing Every Opportunity',
    content: [
      'Proven strategies to increase average ticket size',
      'The "High-Ticket" Pivot: Moving from Wash to Ceramic',
      'Handling objections for $2,000+ packages',
      'Training your team to sell value, not time'
    ],
    type: 'bullet',
    visionaryConcept: 'You aren\'t selling a coating. You\'re selling the confidence of a permanent showroom finish.'
  },
  {
    id: 'comparison',
    title: 'Traditional vs. AutoGenX',
    subtitle: 'A New Era of Detailing',
    content: [
      'Volume-Based Chaos vs. High-Ticket Focus',
      'Hope-Based Marketing vs. Data-Driven Funnels',
      'Price Wars vs. Authority Positioning'
    ],
    type: 'comparison'
  },
  {
    id: 'cta',
    title: 'Let\'s Scale Your Business',
    subtitle: 'Ready for the High-Ticket Shift?',
    content: [
      'Book your implementation session today',
      'Limited partner spots available'
    ],
    type: 'cta'
  }
];
