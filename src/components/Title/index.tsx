import type { ReactNode } from 'react';
import './Title.css';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
type TitleWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black';
type TitleAlignment = 'left' | 'center' | 'right';
type TitleEffect = 'none' | 'gradient' | 'neon' | 'cosmic' | 'glitch' | 'shadow' | 'outline';
type TitleAnimation = 'none' | 'fade' | 'slide' | 'bounce' | 'wave' | 'typing';
type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TitleWidth = 'auto' | 'full' | 'half' | 'third' | 'quarter';
type TitleSpacing = 'none' | 'tight' | 'normal' | 'relaxed' | 'loose';

interface TitleProps {
  children: ReactNode;
  as?: TitleTag;
  size?: TitleSize;
  weight?: TitleWeight;
  alignment?: TitleAlignment;
  effect?: TitleEffect;
  animation?: TitleAnimation;
  color?: string;
  gradientColors?: string[];
  className?: string;
  id?: string;
  width?: TitleWidth;
  spacing?: TitleSpacing;
  uppercase?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  responsive?: boolean;
}

export function Title({
  children,
  as: Component = 'h1',
  size = 'xl',
  weight = 'bold',
  alignment = 'left',
  effect = 'none',
  animation = 'none',
  color,
  gradientColors,
  className = '',
  id,
  width = 'auto',
  spacing = 'normal',
  uppercase = false,
  italic = false,
  underline = false,
  lineThrough = false,
  responsive = true
}: TitleProps) {
  const getGradientStyle = () => {
    if (effect !== 'gradient' || !gradientColors?.length) return {};
    
    const gradient = gradientColors.length > 1
      ? `linear-gradient(135deg, ${gradientColors.join(', ')})`
      : gradientColors[0];
    
    return {
      background: gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    };
  };

  const getCustomStyle = () => {
    const styles: Record<string, string> = {};
    
    if (color && effect !== 'gradient') {
      styles.color = color;
    }

    return styles;
  };

  const titleClasses = [
    'title',
    `size-${size}`,
    `weight-${weight}`,
    `align-${alignment}`,
    `effect-${effect}`,
    `animation-${animation}`,
    `width-${width}`,
    `spacing-${spacing}`,
    uppercase && 'uppercase',
    italic && 'italic',
    underline && 'underline',
    lineThrough && 'line-through',
    responsive && 'responsive',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component
      className={titleClasses}
      style={{
        ...getGradientStyle(),
        ...getCustomStyle()
      }}
      id={id}
    >
      {effect === 'glitch' && (
        <>
          <span className="glitch-layer" aria-hidden="true">{children}</span>
          <span className="glitch-layer" aria-hidden="true">{children}</span>
        </>
      )}
      {animation === 'typing' && (
        <span className="typing-text">{children}</span>
      )}
      {!['glitch'].includes(effect) && animation !== 'typing' && children}
    </Component>
  );
} 