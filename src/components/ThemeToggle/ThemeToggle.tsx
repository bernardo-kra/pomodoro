import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? (
        <Moon className="theme-toggle-icon" />
      ) : (
        <Sun className="theme-toggle-icon" />
      )}
    </button>
  );
} 