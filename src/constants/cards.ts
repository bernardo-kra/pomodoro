import { 
  Timer, 
  Rocket, 
  Zap, 
  Coffee,
  Brain,
  Music,
  Heart,
  Stars,
  Sparkles,
  Cloud,
  Sun,
  Moon,
  Compass,
  Magnet,
  Bell,
  Vibrate,
  Star,
  Link
} from 'lucide-react';
import type { CardConfig } from '../types/components';

interface CardSection {
  title: string;
  description?: string;
  cards: CardConfig[];
}

export const CARD_SECTIONS: CardSection[] = [
  {
    title: "Tamanhos Diferentes",
    description: "Cards com diferentes tamanhos para diferentes necessidades",
    cards: [
      {
        icon: Timer,
        size: "small",
        effect: "classic",
        motion: "tilt",
        clickEffect: "ripple",
        message: "Timer clicked!"
      },
      {
        icon: Rocket,
        size: "default",
        effect: "classic",
        motion: "tilt",
        clickEffect: "expand",
        message: "Rocket clicked!"
      },
      {
        icon: Zap,
        size: "big",
        effect: "classic",
        motion: "tilt",
        clickEffect: "compress",
        message: "Zap clicked!"
      },
      {
        icon: Coffee,
        size: "ultra",
        effect: "classic",
        motion: "tilt",
        clickEffect: "flash",
        message: "Coffee clicked!"
      }
    ]
  },
  {
    title: "Efeitos Visuais",
    description: "Diferentes estilos visuais para os cards",
    cards: [
      {
        icon: Brain,
        effect: "classic",
        motion: "tilt",
        clickEffect: "ripple"
      },
      {
        icon: Music,
        effect: "neon",
        motion: "tilt",
        clickEffect: "expand"
      },
      {
        icon: Heart,
        effect: "glass",
        motion: "tilt",
        clickEffect: "compress"
      },
      {
        icon: Stars,
        effect: "cosmic",
        motion: "float",
        clickEffect: "flash"
      }
    ]
  },
  {
    title: "Efeitos de Movimento",
    description: "Diferentes animações e interações de movimento",
    cards: [
      {
        icon: Sparkles,
        effect: "classic",
        motion: "tilt",
        clickEffect: "bounce"
      },
      {
        icon: Cloud,
        effect: "classic",
        motion: "float",
        clickEffect: "ripple"
      },
      {
        icon: Sun,
        effect: "classic",
        motion: "bounce",
        clickEffect: "expand"
      },
      {
        icon: Moon,
        effect: "classic",
        motion: "spin",
        clickEffect: "compress"
      },
      {
        icon: Compass,
        effect: "classic",
        motion: "wave",
        clickEffect: "flash"
      }
    ]
  },
  {
    title: "Novos Efeitos de Movimento",
    description: "Efeitos de movimento mais avançados",
    cards: [
      {
        icon: Magnet,
        effect: "classic",
        motion: "magnetic",
        clickEffect: "bounce"
      },
      {
        icon: Bell,
        effect: "classic",
        motion: "pulse",
        clickEffect: "ripple"
      },
      {
        icon: Vibrate,
        effect: "classic",
        motion: "shake",
        clickEffect: "expand"
      }
    ]
  },
  {
    title: "Exemplos de Interatividade",
    description: "Demonstração de diferentes tipos de interação",
    cards: [
      {
        icon: Star,
        effect: "neon",
        motion: "tilt",
        clickEffect: "ripple",
        message: "Star clicked!"
      },
      {
        icon: Link,
        effect: "cosmic",
        motion: "float",
        clickEffect: "expand",
        href: "https://example.com",
        target: "_blank"
      },
      {
        icon: Coffee,
        effect: "glass",
        motion: "bounce",
        clickEffect: "compress",
        disabled: true
      }
    ]
  }
]; 