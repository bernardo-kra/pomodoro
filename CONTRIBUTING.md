# Guia de Contribuição - Pomodoro App

## 📚 Índice
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Fluxo Git](#fluxo-git)
- [Criando Componentes](#criando-componentes)
- [Estilos e Temas](#estilos-e-temas)
- [Tipos e Interfaces](#tipos-e-interfaces)
- [Testes](#testes)
- [Commits e Pull Requests](#commits-e-pull-requests)

## 🏗️ Estrutura do Projeto

```
src/
  ├── components/       # Componentes React reutilizáveis
  ├── constants/       # Constantes e configurações
  ├── contexts/        # Contextos React
  ├── hooks/          # Hooks customizados
  ├── services/       # Serviços e integrações
  ├── styles/         # Estilos globais e temas
  ├── types/          # Tipos TypeScript
  ├── utils/          # Funções utilitárias
  ├── __tests__/      # Testes
  ├── assets/         # Recursos estáticos
  ├── App.tsx         # Componente principal
  └── main.tsx        # Ponto de entrada
```

## 🔧 Padrões de Desenvolvimento

### Nomenclatura
- **Componentes**: PascalCase (ex: `CardSection.tsx`)
- **Arquivos de estilo**: Mesmo nome do componente (ex: `CardSection.css`)
- **Hooks**: camelCase com prefixo 'use' (ex: `useTheme.ts`)
- **Tipos/Interfaces**: PascalCase (ex: `CardConfig`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `CARD_SECTIONS`)

### Estrutura de Componentes
1. Cada componente deve ter sua própria pasta:
```
ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.css
  └── index.ts         # Para exportação
```

2. Template básico de componente:
```typescript
import { type ReactNode } from 'react';
import './ComponentName.css';

interface ComponentNameProps {
  children?: ReactNode;
  // outras props...
}

export function ComponentName({ children, ...props }: ComponentNameProps) {
  return (
    <div className="component-name">
      {children}
    </div>
  );
}
```

## 🌿 Fluxo Git

### 1. Iniciando uma Nova Feature
```bash
# Atualize a branch develop
git checkout develop
git pull origin develop

# Crie uma nova branch
git checkout -b feature/nome-da-feature
```

### 2. Durante o Desenvolvimento
```bash
# Faça commits frequentes
git add .
git commit -m "feat: descrição da alteração"

# Mantenha sua branch atualizada
git pull origin develop
```

### 3. Finalizando a Feature
```bash
# Push para o repositório
git push origin feature/nome-da-feature

# Crie um Pull Request para develop no GitHub
```

### Padrões de Commit
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Manutenção

## 🎨 Criando Componentes

### 1. Criação da Estrutura
```bash
mkdir src/components/NomeComponente
touch src/components/NomeComponente/NomeComponente.tsx
touch src/components/NomeComponente/NomeComponente.css
touch src/components/NomeComponente/index.ts
```

### 2. Definição de Tipos
Em `src/types/components.ts`:
```typescript
export interface NomeComponenteProps {
  // props do componente
}
```

### 3. Implementação do Componente
```typescript
import { type ReactNode } from 'react';
import type { NomeComponenteProps } from '../../types/components';
import './NomeComponente.css';

export function NomeComponente({ ...props }: NomeComponenteProps) {
  return (
    // implementação
  );
}
```

### 4. Estilos
Em `NomeComponente.css`:
```css
.nome-componente {
  /* Use variáveis CSS do tema */
  color: var(--text-primary);
  background: var(--bg-primary);
  /* ... */
}
```

## 🎨 Estilos e Temas

### Variáveis CSS Disponíveis
```css
:root {
  /* Cores */
  --primary: #...;
  --secondary: #...;
  --accent: #...;
  
  /* Texto */
  --text-primary: #...;
  --text-secondary: #...;
  
  /* Backgrounds */
  --bg-primary: #...;
  --bg-secondary: #...;
  
  /* Espaçamentos */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Outros */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  
  /* Animações */
  --transition-base: 0.3s ease;
}
```

### Uso do Tema
```typescript
function MeuComponente() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`meu-componente theme-${theme}`}>
      {/* ... */}
    </div>
  );
}
```

## 🧪 Testes

### 1. Criando Testes
Em `src/__tests__/components/NomeComponente.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { NomeComponente } from '../../components/NomeComponente';

describe('NomeComponente', () => {
  it('should render correctly', () => {
    render(<NomeComponente />);
    // assertions...
  });
});
```

### 2. Executando Testes
```bash
# Todos os testes
npm test

# Testes específicos
npm test NomeComponente
```

## 📝 Commits e Pull Requests

### Commits
```bash
# Formato
git commit -m "tipo: descrição curta"

# Exemplos
git commit -m "feat: adiciona componente Card"
git commit -m "fix: corrige estilo do botão"
```

### Pull Requests
1. Título: Mesmo formato dos commits
2. Descrição:
   ```markdown
   ## Descrição
   Breve descrição das alterações

   ## Mudanças
   - Item 1
   - Item 2

   ## Screenshots (se aplicável)
   
   ## Checklist
   - [ ] Testes adicionados/atualizados
   - [ ] Documentação atualizada
   - [ ] Build passa localmente
   ```

## 🚀 Deploy

### Desenvolvimento
1. Merge na `develop`
2. Deploy automático no ambiente de dev

### Produção
1. Merge na `main`
2. Tag com versão
3. Deploy automático em produção

## 📦 Versionamento
Seguimos [Semantic Versioning](https://semver.org/):
- MAJOR: Mudanças incompatíveis
- MINOR: Novas funcionalidades (compatível)
- PATCH: Correções de bugs (compatível)

## ❓ Dúvidas Comuns

### Como adicionar uma nova variável de tema?
1. Adicione em `src/styles/theme.css`
2. Documente no README
3. Atualize este guia

### Como criar um novo tipo de card?
1. Adicione o tipo em `src/types/components.ts`
2. Atualize as constantes em `src/constants/cards.ts`
3. Implemente os estilos necessários

### Como contribuir com documentação?
1. Crie uma branch `docs/descricao`
2. Atualize os arquivos relevantes
3. Abra um PR para `develop` 