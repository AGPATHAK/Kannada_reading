# ಕನ್ನಡ ಕಲ್ಯಾಣ — Kalyana Kannada

An interactive Kannada learning app for adult learners, built around 32 short stories adapted from Karnataka primary school books. Runs entirely in the browser — no backend, no signup.

![App screenshot placeholder](https://via.placeholder.com/900x480/0D1535/818CF8?text=Kalyana+Kannada)

---

## Features

### 📖 Story Library
32 stories across four categories (Animals, Family & Friends, School & Home, Activities). Each story is presented line-by-line with Kannada script, phonetic transliteration, and English translation — all independently togglable.

### 🔤 Interactive Vocabulary
Click any underlined word in a story to open the Vocabulary Helper: definition, transliteration, part of speech, and a contextual grammar note (e.g. explaining *why* an animal verb ends in -ithu).

### 📚 Grammar Reference
A dedicated Grammar Guide tab with collapsible sections covering:
- SOV word order
- Personal pronouns (including the formal/informal split)
- Past-tense verb conjugation by gender and number
- Case markers (Vibhakti)
- Negation patterns
- High-frequency sentence templates
- Numbers 1–100

### 🎴 Vocabulary Flashcards
Spaced-repetition flashcard deck built from words encountered in completed stories. Cards you mark "Study Again" cycle back to the end of the deck (Leitner-style). Unlocks after completing 5 stories.

### ✍️ Story Quizzes
Each story generates a 3-question practice set:
1. Multiple-choice translation
2. Sentence word-scramble (reassemble Kannada words in correct order)
3. Vocabulary definition match

### 💬 Conversation Simulator
Branching dialogue practice with three adult-relevant scenarios:
- **Priya** — daily social (neighbourhood small talk, settling into Bangalore)
- **Ravi** — work & office (joining a Bangalore tech company, lunch, navigating the building)
- **Suresh** — practical Kannada (auto-rickshaw negotiation, directions, commute chat)

### 🏆 Achievements
Six unlockable badges tracking reading progress, quiz performance, and conversation practice.

---

## Getting Started

No build step required for basic use — just open `index.html` in a browser.

```bash
git clone https://github.com/AGPATHAK/Kannada_reading.git
cd Kannada_reading
open index.html          # macOS
# or: start index.html   # Windows
```

For local development with hot-reload (Vite is already configured):

```bash
npm install
npm run dev
```

---

## Project Structure

```
├── index.html       # App shell and all view sections
├── app.js           # Application logic, state, quiz engine, conversation flows
├── stories.js       # All 32 stories with lines, transliterations, and vocab
├── style.css        # Design system — indigo/violet dark theme + light mode
└── package.json     # Vite dev dependency only
```

---

## Roadmap

- [ ] Audio pronunciation for each story line and vocabulary word
- [ ] Longer stories with progressive difficulty
- [ ] Fill-in-the-blank and free-text sentence construction exercises
- [ ] Expanded conversation flows with more turns and topics
- [ ] LLM-powered open conversation practice

---

## Contributing

Story corrections, vocabulary additions, and grammar note improvements are very welcome. The data lives in `stories.js` — each entry follows this shape:

```js
{
  id: 1,
  title: "The Dog and the Biscuits",
  category: "Animals",
  lines: [
    {
      kannada: "ಒಂದು ನಾಯಿ ಇತ್ತು.",
      transliteration: "Ondhu naayi itthu.",
      english: "There was a dog."
    }
  ],
  vocab: [
    { word: "ನಾಯಿ", transliteration: "naayi", meaning: "Dog", pos: "Noun" }
  ]
}
```

---

## License

MIT
