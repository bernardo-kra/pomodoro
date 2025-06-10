import { Title } from '../Title/Title';
import { IconCards3d } from '../Card3d/IconCards3d';
import type { CardConfig } from '../../types/components';
import './CardSection.css';

interface CardSectionProps {
  title: string;
  description?: string;
  cards: CardConfig[];
}

export function CardSection({ title, description, cards }: CardSectionProps) {
  const handleClick = (message?: string) => {
    if (message) {
      console.log(message);
    }
  };

  return (
    <section className="cards-section" aria-labelledby="section-title">
      <Title 
        as="h2"
        id="section-title"
        size="xl"
        effect="gradient"
        gradientColors={['var(--primary)', 'var(--secondary)']}
      >
        {title}
      </Title>
      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
      <div 
        className="cards-grid"
        role="list"
        aria-label={`${title} cards`}
      >
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index}
              role="listitem"
              className="card-item"
            >
              <IconCards3d
                icon={<Icon aria-hidden="true" />}
                size={card.size}
                effect={card.effect}
                motion={card.motion}
                clickEffect={card.clickEffect}
                onClick={card.message ? () => handleClick(card.message) : undefined}
                href={card.href}
                target={card.target}
                disabled={card.disabled}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
} 