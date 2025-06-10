import { useState, useEffect, useCallback } from 'react';
import type { ReactNode, MouseEvent } from 'react';
import type { CardSize, CardEffect, CardMotion, CardClickEffect } from '../../types/components';
import '../../styles/IconCards3d.css';

type IconSize = 'small' | 'default' | 'big' | 'ultra' | 'custom';
type ElementType = HTMLDivElement | HTMLAnchorElement;

interface IconCards3dProps {
  icon: ReactNode;
  backgroundColor?: string;
  iconColor?: string;
  size?: CardSize;
  iconSize?: IconSize;
  customIconSize?: string;
  effect?: CardEffect;
  motion?: CardMotion;
  clickEffect?: CardClickEffect;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
}

export function IconCards3d({ 
  icon, 
  backgroundColor = 'var(--primary)',
  iconColor = 'var(--text-over-primary)',
  size = 'default',
  iconSize = 'default',
  customIconSize,
  effect = 'classic',
  motion = 'tilt',
  clickEffect,
  onClick,
  href,
  target,
  disabled = false
}: IconCards3dProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let animationFrame: number;
    if (motion === 'wave' && isHovered) {
      const animate = () => {
        const time = Date.now() * 0.003;
        setRotation({
          x: Math.sin(time) * 10,
          y: Math.cos(time) * 10,
          z: 0
        });
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [motion, isHovered]);

  useEffect(() => {
    if (motion === 'pulse' && isHovered) {
      const pulseInterval = setInterval(() => {
        setIsPulsing(prev => !prev);
      }, 1000);
      return () => clearInterval(pulseInterval);
    }
  }, [motion, isHovered]);

  useEffect(() => {
    if (motion === 'shake' && isHovered) {
      const shakeInterval = setInterval(() => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 200);
      }, 2000);
      return () => clearInterval(shakeInterval);
    }
  }, [motion, isHovered]);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
        setRipples([]);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  const handleMouseMove = useCallback((e: MouseEvent<ElementType>) => {
    if (disabled) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const mouseX = (x / rect.width) * 2;
    const mouseY = (y / rect.height) * 2;
    
    switch (motion) {
      case 'tilt':
        setRotation({
          x: (y / (rect.height / 2)) * -15,
          y: (x / (rect.width / 2)) * 15,
          z: 0
        });
        setIconPosition({
          x: mouseX * 15,
          y: mouseY * 15
        });
        break;
      
      case 'float':
        setPosition({
          x: x * 0.1,
          y: y * 0.1
        });
        setIconPosition({
          x: mouseX * 20,
          y: mouseY * 20
        });
        break;
      
      case 'bounce':
        setPosition({
          x: 0,
          y: isHovered ? -20 : 0
        });
        setIconPosition({
          x: 0,
          y: isHovered ? -10 : 0
        });
        break;
      
      case 'spin':
        setRotation({
          x: 0,
          y: isHovered ? 180 : 0,
          z: 0
        });
        break;

      case 'magnetic':
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = Math.sqrt(rect.width * rect.width / 4 + rect.height * rect.height / 4);
        const strength = (1 - distance / maxDistance) * 40;
        setIconPosition({
          x: (x / distance) * strength || 0,
          y: (y / distance) * strength || 0
        });
        break;

      case 'pulse':
      case 'shake':
        setIconPosition({
          x: mouseX * 10,
          y: mouseY * 10
        });
        break;
    }
  }, [motion, isHovered, disabled]);

  const handleClickEffect = useCallback((e: MouseEvent<ElementType>) => {
    if (!clickEffect || disabled) return;
    
    setIsClicked(true);

    if (clickEffect === 'ripple') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipples(prev => [...prev, { x, y, id: Date.now() }]);
    }
  }, [clickEffect, disabled]);

  const handleClick = useCallback((e: MouseEvent<ElementType>) => {
    if (disabled) return;
    
    handleClickEffect(e);
    if (onClick) onClick();
  }, [onClick, handleClickEffect, disabled]);

  const handleMouseEnter = useCallback(() => {
    if (!disabled) {
      setIsHovered(true);
    }
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0, z: 0 });
    setPosition({ x: 0, y: 0 });
    setIconPosition({ x: 0, y: 0 });
    setIsHovered(false);
    setIsPulsing(false);
    setIsShaking(false);
  }, []);

  const getMotionStyles = useCallback(() => {
    const transform = [
      `translate3d(${position.x}px, ${position.y}px, 0)`,
      `rotateX(${rotation.x}deg)`,
      `rotateY(${rotation.y}deg)`,
      `rotateZ(${rotation.z}deg)`,
      isClicked && clickEffect === 'compress' ? 'scale(0.95)' : '',
      isClicked && clickEffect === 'expand' ? 'scale(1.05)' : ''
    ].filter(Boolean).join(' ');

    return {
      transform,
      transition: motion === 'wave' ? 'none' : 'all var(--animation-speed-fast) ease-out'
    };
  }, [position, rotation, isClicked, clickEffect, motion]);

  const getIconStyles = useCallback(() => {
    const transform = [
      `translate3d(${iconPosition.x}px, ${iconPosition.y}px, 40px)`,
      motion === 'spin' && isHovered ? 'rotateY(180deg)' : '',
      isPulsing ? 'scale(1.2)' : '',
      isShaking ? 'rotate(-10deg)' : '',
      isClicked && clickEffect === 'bounce' ? 'translateY(-20px)' : ''
    ].filter(Boolean).join(' ');

    return {
      transform,
      color: iconColor,
      transition: ['wave', 'pulse', 'shake'].includes(motion) ? 'none' : 'all var(--animation-speed-fast) ease-out'
    };
  }, [iconPosition, motion, isHovered, isPulsing, isShaking, isClicked, clickEffect, iconColor]);

  const CardWrapper = href ? 'a' : 'div';

  return (
    <CardWrapper 
      className={`icon-card-3d-wrapper size-${size} motion-${motion} ${disabled ? 'disabled' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      href={href}
      target={target}
      role={onClick || href ? 'button' : undefined}
      tabIndex={onClick || href ? 0 : undefined}
    >
      <div 
        className={`icon-card-3d effect-${effect} ${clickEffect ? `click-${clickEffect}` : ''} ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{ 
          ...getMotionStyles(),
          backgroundColor: effect === 'cosmic' ? 'transparent' : backgroundColor
        }}
      >
        <div 
          className={`icon-wrapper icon-size-${iconSize} ${isPulsing ? 'pulsing' : ''} ${isShaking ? 'shaking' : ''}`} 
          style={{
            ...getIconStyles(),
            fontSize: iconSize === 'custom' && customIconSize ? customIconSize : undefined
          }}
        >
          {icon}
        </div>
        <div className="card-shadow"></div>
        {effect === 'neon' && <div className="neon-glow"></div>}
        {effect === 'glass' && <div className="glass-reflection"></div>}
        {effect === 'cosmic' && (
          <>
            <div className="cosmic-background"></div>
            <div className="cosmic-stars"></div>
            <div className="cosmic-glow"></div>
          </>
        )}
        {clickEffect === 'ripple' && ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          />
        ))}
        {clickEffect === 'flash' && <div className="flash-overlay" />}
      </div>
    </CardWrapper>
  );
} 