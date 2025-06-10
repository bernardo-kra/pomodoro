# Pomodoro App

Um aplicativo moderno para gerenciamento de tempo usando o método Pomodoro, construído com React e TypeScript.

## 🚀 Ambientes

- **Desenvolvimento**: [URL do ambiente de dev]
- **Produção**: [URL do ambiente de produção]

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório
```bash
git clone [URL do seu repositório]
cd pomodoro
```

2. Instale as dependências
```bash
npm install
# ou
yarn
```

3. Inicie o ambiente de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## 📖 Documentação

Para contribuir com o projeto, por favor leia nosso [Guia de Contribuição](CONTRIBUTING.md) que contém:
- Padrões de código
- Fluxo de desenvolvimento
- Guia de estilos
- Padrões de commit
- E muito mais!

## 🌿 Branches

- `main`: Branch de produção, contém o código estável
- `develop`: Branch de desenvolvimento, onde novas features são integradas
- `feature/*`: Branches para desenvolvimento de novas funcionalidades
- `hotfix/*`: Branches para correções urgentes em produção
- `release/*`: Branches para preparação de releases

## 🔄 Fluxo de Desenvolvimento

1. Crie uma nova branch a partir de `develop`:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature
```

2. Desenvolva sua feature e faça commits:
```bash
git add .
git commit -m "feat: descrição da alteração"
```

3. Push para o repositório:
```bash
git push origin feature/nome-da-feature
```

4. Abra um Pull Request para a branch `develop`

## 📝 Padrões de Commit

Seguimos o padrão Conventional Commits:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alteração em documentação
- `style`: Alterações que não afetam o código (espaço, formatação, etc)
- `refactor`: Refatoração de código
- `test`: Adição ou modificação de testes
- `chore`: Alterações em arquivos de build, dependências, etc

## 🚀 Deploy

### Desenvolvimento
1. Merge na branch `develop`
2. Deploy automático no ambiente de desenvolvimento

### Produção
1. Merge na branch `main`
2. Tag com a versão
3. Deploy automático no ambiente de produção

## 📦 Versionamento

Seguimos o padrão Semantic Versioning (MAJOR.MINOR.PATCH):

- MAJOR: Mudanças incompatíveis
- MINOR: Novas funcionalidades (compatível)
- PATCH: Correções de bugs (compatível)

## 👥 Contribuição

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'feat: descrição da feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.
