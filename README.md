# Semi-New Lions

**React + Vite + Tailwind + Zod + TanStack Query + Axios**  
Projeto de teste para vaga de Desenvolvedor Frontend na Lions Semi Novos.


## 📋 Sobre o Projeto

O **Semi-New Lions** é uma aplicação frontend construída com React e Vite, com foco em desempenho, escalabilidade e boas práticas.  
Esta aplicação demonstra habilidades em desenvolvimento frontend moderno através de uma simulação de plataforma para concessionária de veículos semi-novos.

### ✨ Destaques do Projeto
- **Arquitetura escalável** com separação clara de responsabilidades
- **Experiência do usuário** refinada com acessibilidade, animações e feedback visual
- **Código robusto** com validação de tipos, formulários e estado assíncrono
- **Performance otimizada** com lazy loading e build eficiente

## 🛠️ Tecnologias Utilizadas

### **Core**
- **React 19** – Biblioteca principal de UI com hooks e componentes funcionais
- **TypeScript** – Tipagem estática para maior segurança do código
- **Vite 5** – Ferramenta de build rápida com HMR e otimizações
- **Tailwind CSS 4 (alpha)** – Framework CSS utilitário com suporte a design tokens

### **Gerenciamento de Estado & Dados**
- **TanStack Query v5** – Gerenciamento de estado assíncrono, cache e sincronização
- **Axios** – Cliente HTTP para chamadas de API com interceptors
- **React Hook Form** – Gerenciamento de formulários com performance otimizada
- **Zod** – Validação de esquemas TypeScript-first

### **UI & UX**
- **Radix UI** – Componentes primitivos acessíveis (Dialog, Popover, Select, etc.)
- **Framer Motion** – Biblioteca de animações para React
- **Sonner** – Notificações toast elegantes e customizáveis
- **Tailwind Merge** – Utilidade para combinação inteligente de classes Tailwind
- **React Router Dom v6** – Navegação client-side com rotas aninhadas


## 📁 Estrutura do Projeto

```text
src/
├── assets/         # Imagens e SVGs
├── components/     # Componentes reutilizáveis
├── constants/      # Constantes e dados fixos
├── hooks/          # Hooks personalizados
├── http/           # Configuração de Axios e mocks
├── layout/         # Layout principal e header/footer
├── lib/            # Funções utilitárias
├── queries/        # TanStack Query hooks
├── routers/        # Configuração de rotas
├── schemas/        # Schemas do Zod para validação
├── services/       # Serviços de integração com APIs
├── styles/         # Estilos globais e animações
└── views/          # Páginas principais (Home, Catalog, ScheduleVisit, etc.)
```

## 🚀 Começando

### **Pré-requisitos**
- Node.js >= 20.0.0
- Yarn 4.0.0 ou npm 10.0.0

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/ErickMarllon/semi-new-lions.git

# Acesse o diretório
cd semi-new-lions

# Instale as dependências
yarn install
# ou
npm install
```

### **Ambientes de Execução**

```bash
# Desenvolvimento (hot reload em http://localhost:5173)
yarn dev

# Build de produção
yarn build

# Preview do build de produção
yarn preview
```

## 🧪 Funcionalidades Principais

### Catálogo de Veículos

- Listagem paginada de veículos
- Filtros dinâmicos (marca, modelo, ano, preço)

### Agendamento de Visitas

- Formulário com validação
- Seleção de data/hora com calendário interativo
- Confirmação com notificação
- Validação em tempo real com Zod

### Mock de API

- Simulação de endpoints RESTful
- Delay configurável para simular latência
- Estados de loading, error e success

### Feedback ao Usuário

- Notificações toast
- Animações sutis entre transições
- Estados de loading, error e success


## 📄 Licença
Este projeto foi desenvolvido como teste técnico para a vaga de Desenvolvedor Frontend na Lions Semi Novos.

## 👨‍💻 Autor
Erick Marllon – Desenvolvedor Full Stack / Frontend



[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin)](https://www.linkedin.com/in/erickmarllon/) ou https://www.linkedin.com/in/erickmarllon

📧 Email: erick.marllon@outlook.com.br
📍 Localização: Rio de Janeiro, Brasil








