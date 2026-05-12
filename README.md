# 🛡️ GCM São José de Ribamar — App de Estudos 2026

> Plataforma completa de preparação para o concurso da **Guarda Civil Municipal de São José de Ribamar - MA**.

[![Deploy](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://seuusuario.github.io/gcm-ribamar)
[![PWA](https://img.shields.io/badge/PWA-Instalável-blue?style=flat-square)](https://seuusuario.github.io/gcm-ribamar)

---

## 📱 Funcionalidades

| Módulo | Descrição |
|--------|-----------|
| 📝 **Simulado** | Questões completas por matéria ou mistas, com cronômetro e resultado detalhado |
| 🧠 **Treino IA** | Sistema adaptativo que detecta suas fraquezas e ajusta a dificuldade automaticamente |
| 🃏 **Flashcards** | +100 cartas de memorização rápida organizadas por categoria, com virada 3D |
| 🔁 **Revisão de Erros** | Todas as questões erradas com gabarito comentado para refixação |
| 📋 **Plano IA** | Cronograma personalizado baseado no seu desempenho real |

---

## 📚 Matérias do Edital 2026

| Disciplina | Peso | Questões |
|------------|------|----------|
| ⚖️ Conhecimentos Específicos | **55 pts** | 20 questões × 2,75 |
| 📖 Língua Portuguesa | 15 pts | 10 questões × 1,5 |
| ➕ Matemática | 15 pts | 10 questões × 1,5 |
| 💻 Noções de Informática | 7,5 pts | 5 questões × 1,5 |
| 🌎 Conhecimentos Gerais | 7,5 pts | 5 questões × 1,5 |

### Conhecimentos Específicos cobrem:
- Lei 13.022/2014 (Estatuto GCM) — arts. 1º, 3º, 4º, 5º, 9º, 10º
- CF/88 — arts. 1º, 2º, 3º, 4º, 5º, 37 e 144
- Código Penal — Parte Geral e Crimes contra o Patrimônio e Funcionais
- ECA (Lei 8.069/90)
- Lei Maria da Penha (11.340/06), Estatuto do Idoso (10.741/03)
- Lei de Abuso de Autoridade (13.869/19), CTB (9.503/97)
- Direito Administrativo — LIMPE, Poderes, Atos, Improbidade

---

## 🚀 Como publicar no GitHub Pages

### Passo 1 — Criar repositório
1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"**
3. Nome sugerido: `gcm-ribamar`
4. Marque **"Public"** (necessário para GitHub Pages gratuito)
5. Clique em **"Create repository"**

### Passo 2 — Fazer upload dos arquivos
1. Na página do repositório, clique em **"uploading an existing file"**
2. Arraste **todos os arquivos** desta pasta:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `.nojekyll`
3. Clique em **"Commit changes"**

### Passo 3 — Ativar GitHub Pages
1. No repositório, vá em **Settings** → **Pages**
2. Em **"Branch"**, selecione `main` e pasta `/ (root)`
3. Clique em **"Save"**
4. Aguarde ~2 minutos

### Passo 4 — Acessar o app
Seu app estará disponível em:
```
https://SEU-USUARIO.github.io/gcm-ribamar/
```

---

## 📲 Instalar como App (PWA)

### Android (Chrome)
1. Acesse o link do app no Chrome
2. Toque no menu (⋮) → **"Adicionar à tela inicial"**
3. Confirme a instalação

### iPhone/iPad (Safari)
1. Acesse o link no Safari
2. Toque em **Compartilhar** (□↑) → **"Adicionar à Tela de Início"**
3. Confirme

### Desktop (Chrome/Edge)
1. Acesse o link
2. Clique no ícone 📲 na barra de endereços
3. Clique em **"Instalar"**

> ✅ Após instalado, o app funciona **100% offline**!

---

## 🗂️ Estrutura do Projeto

```
gcm-ribamar/
├── index.html        ← App completo (único arquivo HTML)
├── manifest.json     ← Configuração PWA
├── sw.js             ← Service Worker (cache offline)
├── icon-192.png      ← Ícone do app (192×192)
├── icon-512.png      ← Ícone do app (512×512)
├── .nojekyll         ← Necessário para GitHub Pages
└── README.md         ← Este arquivo
```

---

## 🧠 Como funciona a IA Adaptativa

```
Desempenho por matéria
        │
        ▼
  ≥ 80% acerto  →  questões DIFÍCEIS
  50–79% acerto →  questões MÉDIAS
  < 50% acerto  →  questões FÁCEIS + repete erros anteriores
        │
        ▼
  Plano de estudo gerado automaticamente
```

---

## 💾 Dados Salvos Localmente

O app salva automaticamente no navegador:
- Histórico de todas as questões respondidas
- Lista de erros para revisão
- Desempenho por matéria
- Sequência de acertos (streak)

> Os dados ficam no dispositivo e **não são enviados a nenhum servidor**.

---

## 📊 Banco de Questões

| Matéria | Questões | Flashcards |
|---------|----------|------------|
| Conhecimentos Específicos | 35 | 40+ |
| Língua Portuguesa | 8 | 10 |
| Matemática | 8 | 10 |
| Noções de Informática | 7 | 11 |
| Conhecimentos Gerais | 7 | 15+ |
| **Total** | **60+** | **100+** |

---

## ✏️ Como adicionar mais questões

No arquivo `index.html`, localize o array `QUESTOES` e adicione:

```javascript
{
  id: 61,                              // ID único
  materia: "Matemática",               // Matéria principal
  sub: "Geometria",                    // Subtópico
  dif: "medio",                        // "facil" | "medio" | "dificil"
  pergunta: "Texto da pergunta aqui",
  alternativas: [
    "A) Primeira opção",
    "B) Segunda opção",
    "C) Terceira opção",
    "D) Quarta opção"
  ],
  resposta: "B",                        // Letra correta
  comentario: "Explicação detalhada da resposta."
}
```

Para flashcards, localize o array `FC_CARDS`:

```javascript
{
  cat: "Matemática",   // Categoria da sidebar
  f: "Pergunta do flashcard?",
  v: "Resposta completa e explicada."
}
```

---

## 🏅 Sistema de Ranking

| Ranking | Requisito |
|---------|-----------|
| Recruta | Início |
| 🔰 Cadete | 10+ questões respondidas |
| ⭐ Agente | 20+ questões e ≥ 60% de acerto |
| 🥇 Veterano | 50+ questões e ≥ 70% de acerto |
| 🏆 Elite | 100+ questões e ≥ 80% de acerto |

---

## 📄 Licença

Projeto educacional de uso livre para candidatos ao concurso GCM São José de Ribamar.

---

*Desenvolvido com 💛 para os candidatos da GCM São José de Ribamar — MA*
