import './styles/App.css';
import { ThemeToggle } from './components/ThemeToggle';
import { CardSection } from './components/CardSection';
import { Title } from './components/Title';
import { CARD_SECTIONS } from './constants/cards';

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <main className="app-container">
        <header className="app-header">
          <Title
            size="4xl"
            effect="gradient"
            alignment="center"
          >
            Pomodoro App
          </Title>
          <Title
            as="p"
            size="lg"
            effect="gradient"
            gradientColors={['var(--text-primary)', 'var(--text-secondary)']}
            alignment="center"
            weight="regular"
            className="app-description"
          >
            Gerencie seu tempo com estilo usando o método Pomodoro
          </Title>
        </header>
        <section className="cards-container">
          {CARD_SECTIONS.map((section, index) => (
            <CardSection
              key={index}
              title={section.title}
              description={section.description}
              cards={section.cards}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
