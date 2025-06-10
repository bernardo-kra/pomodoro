import type { LucideIcon } from 'lucide-react';

export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TitleWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black';
export type TitleAlignment = 'left' | 'center' | 'right';
export type TitleEffect = 'none' | 'gradient' | 'neon' | 'cosmic' | 'glitch' | 'shadow' | 'outline';
export type TitleAnimation = 'none' | 'fade' | 'slide' | 'bounce' | 'wave' | 'typing';
export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
export type TitleWidth = 'auto' | 'full' | 'half' | 'third' | 'quarter';
export type TitleSpacing = 'none' | 'tight' | 'normal' | 'relaxed' | 'loose';

export type CardSize = 'small' | 'default' | 'big' | 'ultra';
export type CardEffect = 'classic' | 'neon' | 'glass' | 'cosmic';
export type CardMotion = 'tilt' | 'float' | 'bounce' | 'spin' | 'wave' | 'magnetic' | 'pulse' | 'shake';
export type CardClickEffect = 'ripple' | 'expand' | 'compress' | 'flash' | 'bounce';

export interface CardConfig {
  icon: LucideIcon;
  size?: CardSize;
  effect?: CardEffect;
  motion?: CardMotion;
  clickEffect?: CardClickEffect;
  message?: string;
  href?: string;
  target?: string;
  disabled?: boolean;
} 