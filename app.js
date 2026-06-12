import stories from './stories.js';

// Application State
const state = {
  currentView: 'dashboard',
  activeStoryId: 1,
  xp: 0,
  streak: 1,
  completedStories: [],
  vocabLearned: new Set(),
  quizCurrentQuestion: 0,
  quizQuestions: [],
  quizScore: 0,
  chatPartner: null,
  chatStep: 'start',
  chatHistory: []
};

// Branching Conversation Dialogue Configs — adult-focused scenarios
const conversationFlows = {
  priya: {
    name: 'Priya',
    avatar: '👩',
    start: {
      text: "Namaskara! Naanu Priya. Neevu Bengalurige hosadaagi bandiira? (Hello! I'm Priya. Did you move to Bangalore recently?)",
      choices: [
        { text: "Haudhu, mooru tingaLu aayithu. Naanu IT company nalli keLasa maaDuttiddheene. (Yes, three months ago. I work at an IT company.)", next: "work_intro" },
        { text: "Alla, naanu iLLige eraDu varshadinda iddheene. (No, I've been here two years.)", next: "settled" }
      ]
    },
    work_intro: {
      text: "Oh, channide! Bengaluru howdaagi ideyaa? Traffic tumba kashTa alla? (Oh nice! Are you settling in? The traffic must be tough?)",
      choices: [
        { text: "Haudhu, traffic kaShTa. Aadre naanu metro use maaDuttiddheene. (Yes, the traffic is hard. But I use the metro.)", next: "metro" },
        { text: "Houdhu, kashTa. Naanu Kannada kaLiyuttiddheene — adakkae thumba santhosha. (Yes it's tough. But I'm learning Kannada — that makes me happy.)", next: "learning" }
      ]
    },
    settled: {
      text: "Eradu varsha! Adre Kannada channagi gothittu! Yellinda bandiira — Bengaluru yaavud area? (Two years! Then your Kannada must be good! Which area of Bangalore are you from?)",
      choices: [
        { text: "Naanu Koramangala nalli iddheene. Channada jagavu. (I'm in Koramangala. It's a nice area.)", next: "area" },
        { text: "Whitefield nalli iddheene — office hattira idhe. (I'm in Whitefield — it's close to the office.)", next: "area" }
      ]
    },
    metro: {
      text: "Metro tumba channide! Namma nela station Purple Line mele idhe. Neevu yellige hoguttira saayangaala? (The metro is great! Our station is on the Purple Line. Where do you go in the evening?)",
      choices: [
        { text: "Naanu Indiranagar coffee shops ishTa padutteene. (I love the coffee shops in Indiranagar.)", next: "coffee" },
        { text: "Naanu MG Road hatra walk maaDuttiddheene. (I walk near MG Road.)", next: "coffee" }
      ]
    },
    learning: {
      text: "Tumba channide! Kannada kaLiyuvudu kadina alla — biDi biDi. Neevu chennagi maataaDuttiddheera! (That's wonderful! Learning Kannada isn't that hard — keep going. You're already speaking well!)",
      choices: [
        { text: "Dhanyavaadagalu! Aadre verb endings tumba kadina. (Thank you! But the verb endings are difficult.)", next: "verbs" },
        { text: "Naanu pratidina practice maaDuttiddheene. (I practice every day.)", next: "coffee" }
      ]
    },
    area: {
      text: "Channada jagavu! Naanu Jayanagar nalli iddheene. Naavu kaafeege hogona enadhovele? (Nice area! I'm in Jayanagar. Shall we go for coffee sometime?)",
      choices: [
        { text: "Haudhu, tumba channaagtide! Yaavaga? (Yes, that would be great! When?)", next: "coffee" }
      ]
    },
    verbs: {
      text: "Ha, verbs kaShTa! Aadre ond trick — animals always -ithu/-itu use maaDtave, yaake gottaa? Neuter gender! (Yes, verbs are hard! But one trick — animals always use -ithu/-itu, do you know why? Neuter gender!)",
      choices: [
        { text: "Oh interesting! Adu Grammar Guide nalli ideyaa? (Oh interesting! Is that in the Grammar Guide?)", next: "coffee" },
        { text: "Dhanyavaadagalu, idu tumba useful! (Thank you, that's very useful!)", next: "coffee" }
      ]
    },
    coffee: {
      text: "Summane maataaDuvudu tumba channaagittu! Ond kaafi kudiyona — nanna hattira channada filter coffee gottide. (This conversation was great! Let's have a coffee — I know a place with great filter coffee.)",
      choices: [
        { text: "Khande! Yellide aa jagavu? (Definitely! Where is that place?)", next: "end" },
        { text: "Sure! Shanivaara channaagtaa? (Sure! Would Saturday work?)", next: "end" }
      ]
    },
    end: {
      text: "Tumba channaaythu! Neevu chennagi Kannada maataaDuttira — munde innu channaagtide. Shubhashayagalu! (It was wonderful! You speak Kannada well — you'll get even better. Best wishes!)",
      choices: [],
      xpEarned: 25
    }
  },

  ravi: {
    name: 'Ravi',
    avatar: '👨‍💼',
    start: {
      text: "Namaskara! Naanu Ravi, HR nalli keLasa maaDuttiddheene. Neevu ee vaara join aagidheera tane? (Hello! I'm Ravi, I work in HR. You joined this week, right?)",
      choices: [
        { text: "Haudhu, Somavaara join maaDide. Tumba santoshaagide. (Yes, I joined on Monday. Very happy.)", next: "first_week" },
        { text: "Haudhu. Ondu prashne — team meeting yellide? (Yes. One question — where is the team meeting?)", next: "meeting" }
      ]
    },
    first_week: {
      text: "Channide! Office howdaagi ideyaa? KeLasa eshTu aayitu? (Good! Are you settling in? How's the work going?)",
      choices: [
        { text: "Houdhu, channagide. Aadre I'm still learning the systems. (Yes it's fine. But I'm still learning the systems.)", next: "systems" },
        { text: "Channagide. Aadre Kannada maataaDuvudu kaShTa aaguttide. (It's fine. But speaking Kannada is getting difficult.)", next: "kannada_work" }
      ]
    },
    meeting: {
      text: "Meeting moorne maaLa, Conference Room B nalli idhe — 3 gante ge. Ninna ID card tagonDu hogabeku. (Meeting is on the 3rd floor, Conference Room B — at 3 o'clock. You need to take your ID card.)",
      choices: [
        { text: "Dhanyavaadagalu! Nanna ID card yaavaga bartade? (Thank you! When will my ID card come?)", next: "id_card" },
        { text: "OK, moorne maaLa Conference Room B. Lift yellide? (OK, 3rd floor Conference Room B. Where is the lift?)", next: "lift" }
      ]
    },
    systems: {
      text: "GabhraaNe paDisabeda! Naavella saha help maaDutteevu. Innu ondu vishaya — lunch yaavade café ge hooguttira? (Don't worry! We'll all help. One more thing — which café do you go to for lunch?)",
      choices: [
        { text: "Naanu canteen use maaDuttiddheene. Channagide. (I use the canteen. It's fine.)", next: "lunch" },
        { text: "Illi channada hotels gothilla nange inna. (I don't know the good restaurants here yet.)", next: "lunch" }
      ]
    },
    kannada_work: {
      text: "Haha, gabhraaNe paDisabeda! Office nalli eshTu janaruu English maataaDuttaare. Aadre Kannada kaLidare, Bengaluru jeevan thumbaa channaagtade! (Haha, don't worry! Many people speak English at office. But if you learn Kannada, Bangalore life becomes great!)",
      choices: [
        { text: "Houdhu, naanu Grammar Guide noDuttiddheene. Tumba useful. (Yes, I'm using the Grammar Guide. Very useful.)", next: "lunch" },
        { text: "Houdhu, naanu pratidina practice maaDuttiddheene. (Yes, I practice every day.)", next: "lunch" }
      ]
    },
    id_card: {
      text: "IT desk eraDane maaLa nalli idhe. Avarige email kaLuhi — form fill maaDabeku. 2 dinada nantara bartade. (IT desk is on the 2nd floor. Email them — you need to fill a form. It comes in 2 days.)",
      choices: [
        { text: "Sari, naanu email kaLusteeene. Lunch yaava café ge hooguttira? (OK I'll email them. Which café do you go to for lunch?)", next: "lunch" }
      ]
    },
    lift: {
      text: "Lift ee door hinde idhe — turn maaDi nimma edagaDe. Meeting mumde 10 nimisha muNche baroo. (Lift is behind this door — turn left. Come 10 minutes before the meeting.)",
      choices: [
        { text: "Sari! Lunch yaava jagadalli maaDuttira? (OK! Where do you have lunch?)", next: "lunch" }
      ]
    },
    lunch: {
      text: "Illi hattira tumba channada South Indian hotel idhe — filter kaafi, idli, vaDe ellavu awesome! Naave haaN — naaDalu bartira? (There's a great South Indian hotel nearby — filter coffee, idli, vaDe, all awesome! Want to join us today?)",
      choices: [
        { text: "Houdhu, khande bartini! Eshtu gante ge? (Yes, definitely coming! What time?)", next: "end" },
        { text: "Tumba channaagtade. NaaDu 1 gante channaagtaa? (That sounds great. Would 1 o'clock work?)", next: "end" }
      ]
    },
    end: {
      text: "Sari! 1 gante ge maaLa keeLage sulabhaagide — biDi, naanu baNNuttini! Bengaluru nalli channagi irabhudu nimige! (Great! 1 o'clock, downstairs is easy — don't worry, I'll show you! May you have a great time in Bangalore!)",
      choices: [],
      xpEarned: 25
    }
  },

  suresh: {
    name: 'Suresh',
    avatar: '🛺',
    start: {
      text: "Namaskara saar! Yellige hoogabeku? Meter haakko, illva share auto? (Hello sir/madam! Where do you need to go? Meter auto, or share auto?)",
      choices: [
        { text: "Koramangala 5th Block ge hoogabeku. Eshtu aagutte? (Need to go to Koramangala 5th Block. How much will it be?)", next: "koramangala" },
        { text: "MG Road metro station ge hogabeku. Meter haaki. (Need to go to MG Road metro station. Put the meter on.)", next: "metro" }
      ]
    },
    koramangala: {
      text: "Koramangala 5th Block — 80 rupaaya aagutte saar. Traffic noDi heeLuttini, thumba rush idhe naaLu. (Koramangala 5th Block — will be 80 rupees. Depends on traffic, it's very crowded today.)",
      choices: [
        { text: "60 aaguttaa? (Will 60 work?)", next: "bargain" },
        { text: "Sari, 80 aagutte. Hogona. (OK, 80 is fine. Let's go.)", next: "onway" }
      ]
    },
    metro: {
      text: "MG Road metro — meter nalli 50-60 aagutte. Edagadigae hogona, traffic kaDime idhe. (MG Road metro — by meter it'll be 50-60. Let's go left side, less traffic.)",
      choices: [
        { text: "Sari, neevu heLida haage hogona. (OK, let's go the way you said.)", next: "onway" },
        { text: "Eshtu time aagutte? (How long will it take?)", next: "time" }
      ]
    },
    bargain: {
      text: "Saar, petrol dhaara nodri — 70 ge barutheeni, idakke kuDi. (Sir, look at petrol prices — I'll come for 70, that's the minimum.)",
      choices: [
        { text: "Sari, 70 aagutte. Hogona. (OK, 70 works. Let's go.)", next: "onway" },
        { text: "Sari saar, 80 koDisteeni. Meter haaki. (OK sir, I'll give 80. Put the meter on.)", next: "onway" }
      ]
    },
    time: {
      text: "Traffic illa andare 15 nimisha. Aadre ee hotu rush — 25-30 aagutte. (Without traffic 15 minutes. But right now it's rush hour — 25-30 minutes.)",
      choices: [
        { text: "Sari, aadru sari. Hogona. (OK, that's fine. Let's go.)", next: "onway" }
      ]
    },
    onway: {
      text: "Sari saar, hogona! Neevu Bengalurina hosabara? Kannada channagi maataaDuttira! (OK sir, let's go! Are you new to Bangalore? You speak Kannada quite well!)",
      choices: [
        { text: "Dhanyavaadagalu! Naanu kaLiyttiddheene. Illi channagide. (Thank you! I'm learning. I like it here.)", next: "chat" },
        { text: "Houdhu, mooru tingaLu aayitu. Kannada kaShTa aadru channagide! (Yes, three months now. Kannada is hard but it's good!)", next: "chat" }
      ]
    },
    chat: {
      text: "Channide saar! Bengalurina eshtu channagide alla? Neevu hege Kannada kaLitri? (Good sir! Isn't Bangalore wonderful? How are you learning Kannada?)",
      choices: [
        { text: "App use maaDuttiddheene, stories oDiguttiddheene. (I use an app, I read stories.)", next: "end" },
        { text: "Auto drivers haage noditu — naavu maataaDuvudare channagi kaLiyokke aagutte! (From auto drivers like you — talking with people is the best way to learn!)", next: "end" }
      ]
    },
    end: {
      text: "Ha ha! Channagide saar! Banda mele illi nam area bandaaga auto hattira siguttini. Safe trip! (Ha ha! Very good sir! Once you arrive, you'll easily get an auto in our area. Safe trip!)",
      choices: [],
      xpEarned: 25
    }
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  setupEventListeners();
  renderDashboard();
  renderStoriesList();
  lucide.createIcons();
});

// Load state from localStorage
function loadProgress() {
  const saved = localStorage.getItem('kalyana_kannada_progress');
  if (saved) {
    const data = JSON.parse(saved);
    state.xp = data.xp || 0;
    state.streak = data.streak || 1;
    state.completedStories = data.completedStories || [];
    state.vocabLearned = new Set(data.vocabLearned || []);
  }
  updateStatsUI();
}

// Save state to localStorage
function saveProgress() {
  const data = {
    xp: state.xp,
    streak: state.streak,
    completedStories: state.completedStories,
    vocabLearned: Array.from(state.vocabLearned)
  };
  localStorage.setItem('kalyana_kannada_progress', JSON.stringify(data));
  updateStatsUI();
  checkBadges();
}

// Update the Navigation / Sidebar Stats
function updateStatsUI() {
  document.getElementById('user-streak').innerText = `${state.streak} Day${state.streak > 1 ? 's' : ''}`;
  document.getElementById('user-xp').innerText = `${state.xp} XP`;
  
  // Calculate Level (100 XP per level)
  const level = Math.floor(state.xp / 100) + 1;
  const currentXpinLevel = state.xp % 100;
  
  document.getElementById('user-level').innerText = `Level ${level} (${level < 3 ? 'Novice' : level < 6 ? 'Intermediate' : 'Expert'})`;
  document.getElementById('xp-progress').style.width = `${currentXpinLevel}%`;
  
  // Dashboard indicators
  const completedCountEl = document.getElementById('stat-completed-stories');
  if (completedCountEl) completedCountEl.innerText = `${state.completedStories.length}/32`;
  
  const vocabCountEl = document.getElementById('stat-vocab-count');
  if (vocabCountEl) vocabCountEl.innerText = state.vocabLearned.size;
}

// Setup Event Listeners
function setupEventListeners() {
  // Sidebar Navigation
  document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', (e) => {
      const view = e.currentTarget.getAttribute('data-view');
      switchView(view);
      
      // Update active nav button
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });

  // Category Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const category = e.currentTarget.getAttribute('data-category');
      renderStoriesList(category);
    });
  });

  // Back from Reader
  document.getElementById('reader-back-btn').addEventListener('click', () => {
    switchView('stories');
  });

  // Reader Prev/Next Navigation
  document.getElementById('reader-prev-btn').addEventListener('click', () => {
    if (state.activeStoryId > 1) {
      loadStory(state.activeStoryId - 1);
    }
  });
  document.getElementById('reader-next-btn').addEventListener('click', () => {
    if (state.activeStoryId < 32) {
      loadStory(state.activeStoryId + 1);
    }
  });

  // Start Quiz from Reader
  document.getElementById('reader-quiz-btn').addEventListener('click', () => {
    startQuizForStory(state.activeStoryId);
  });

  // Quiz Footer Actions
  document.getElementById('quiz-quit-btn').addEventListener('click', () => {
    switchView('stories');
  });
  document.getElementById('quiz-submit-btn').addEventListener('click', checkQuizAnswer);
  document.getElementById('results-finish-btn').addEventListener('click', () => {
    switchView('dashboard');
  });

  // Dictionary Drawer Close
  document.getElementById('close-dict-btn').addEventListener('click', () => {
    document.getElementById('dictionary-pane').classList.add('hidden');
  });

  // Theme Toggle Button
  document.getElementById('toggle-theme-btn').addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') !== 'light';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    
    const icon = document.getElementById('toggle-theme-btn').querySelector('i');
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
  });

  // Dashboard "View All" link
  const viewAllLink = document.getElementById('view-all-stories-link');
  if (viewAllLink) {
    viewAllLink.addEventListener('click', () => {
      switchView('stories');
      document.querySelectorAll('.nav-item').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-view') === 'stories');
      });
    });
  }

  // Conversation Partner Selection Click
  document.querySelectorAll('.partner-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const partner = e.currentTarget.getAttribute('data-partner');
      startConversation(partner);
    });
  });

  // Exit Conversation Chat
  document.getElementById('chat-back-btn').addEventListener('click', () => {
    document.getElementById('chat-interface-screen').classList.add('hidden');
    document.getElementById('chat-selection-screen').classList.remove('hidden');
  });

  // Launch Flashcard Mode
  document.getElementById('launch-flashcards-btn').addEventListener('click', () => {
    startFlashcards();
  });

  // Exit Flashcards
  document.getElementById('flashcard-quit-btn').addEventListener('click', () => {
    document.getElementById('flashcard-card').classList.add('hidden');
    document.getElementById('quiz-selection-menu').classList.remove('hidden');
  });

  // 3D Card Flip on Click
  document.getElementById('active-flashcard').addEventListener('click', () => {
    document.getElementById('active-flashcard').classList.toggle('flipped');
  });

  // Flashcard feedback buttons
  document.getElementById('fc-btn-got-it').addEventListener('click', () => {
    handleFlashcardAction(true);
  });
  document.getElementById('fc-btn-again').addEventListener('click', () => {
    handleFlashcardAction(false);
  });
  document.getElementById('fc-results-finish-btn').addEventListener('click', () => {
    document.getElementById('flashcard-results-card').classList.add('hidden');
    switchView('dashboard');
  });

  // Grammar accordion toggles
  document.querySelectorAll('.grammar-section-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.grammar-section');
      const isOpen = section.classList.contains('open');
      // Close all open sections
      document.querySelectorAll('.grammar-section.open').forEach(s => s.classList.remove('open'));
      // Open clicked one (unless it was already open)
      if (!isOpen) {
        section.classList.add('open');
        lucide.createIcons();
      }
    });
  });
}

// Router View Switcher
function switchView(viewName) {
  state.currentView = viewName;
  
  // Hide all panes
  document.querySelectorAll('.view-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  // Show target pane
  const activePane = document.getElementById(`view-${viewName}`);
  if (activePane) {
    activePane.classList.add('active');
  }

  // Update header text title
  const titles = {
    dashboard: 'Dashboard',
    stories: 'Kannada Story Library',
    'story-reader': 'Story Lesson',
    quizzes: 'Practice Quizzes',
    conversation: 'Dialogue Simulator',
    grammar: 'Grammar Reference',
    achievements: 'Achievements & Badges'
  };
  
  document.getElementById('current-view-title').innerText = titles[viewName] || 'Kalyana Kannada';
  
  // Refresh content if switching to dashboard or achievements
  if (viewName === 'dashboard') {
    renderDashboard();
  } else if (viewName === 'stories') {
    renderStoriesList();
  } else if (viewName === 'quizzes') {
    initQuizSelectionMenu();
  } else if (viewName === 'achievements') {
    renderAchievements();
  }
}

// Populate Dashboard Cards
function renderDashboard() {
  const recentStoriesGrid = document.getElementById('recent-stories-grid');
  if (!recentStoriesGrid) return;
  recentStoriesGrid.innerHTML = '';
  
  // Display first 3 stories or uncompleted stories
  const recentList = stories.slice(0, 3);
  
  recentList.forEach(story => {
    const card = createStoryCard(story);
    recentStoriesGrid.appendChild(card);
  });
}

// Render Story Library list
function renderStoriesList(categoryFilter = 'all') {
  const grid = document.getElementById('all-stories-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  stories.forEach(story => {
    if (categoryFilter !== 'all' && story.category !== categoryFilter) {
      return;
    }
    const card = createStoryCard(story);
    grid.appendChild(card);
  });
}

// Build a story card element
function createStoryCard(story) {
  const isCompleted = state.completedStories.includes(story.id);
  const card = document.createElement('div');
  card.className = `story-card ${isCompleted ? 'completed' : ''}`;
  
  // Get snippet text from first line
  const snippet = story.lines[0].transliteration;
  
  card.innerHTML = `
    <div class="story-card-meta">
      <span class="badge">${story.category}</span>
      <span class="status">${isCompleted ? '✓ Completed' : 'Unread'}</span>
    </div>
    <h4>${story.id}. ${story.title}</h4>
    <p class="story-card-snippet">${snippet}</p>
  `;
  
  card.addEventListener('click', () => {
    loadStory(story.id);
  });
  
  return card;
}

// Load individual Story Reader
function loadStory(storyId) {
  state.activeStoryId = storyId;
  const story = stories.find(s => s.id === storyId);
  if (!story) return;

  switchView('story-reader');
  
  document.getElementById('reader-category').innerText = story.category;
  document.getElementById('reader-progress-text').innerText = `Story ${story.id} of 32`;
  document.getElementById('reader-title').innerText = story.title;
  
  // Update disabled states for Prev/Next
  document.getElementById('reader-prev-btn').disabled = (storyId === 1);
  document.getElementById('reader-next-btn').disabled = (storyId === 32);

  // Close dictionary sidebar
  document.getElementById('dictionary-pane').classList.add('hidden');

  // Render Story Lines
  const container = document.getElementById('story-lines');
  container.innerHTML = '';
  
  story.lines.forEach((line, index) => {
    const lineBox = document.createElement('div');
    lineBox.className = 'line-box';
    
    // Parse Kannada words for clickability
    // We split by space but keep track of clean punctuation
    const words = line.kannada.split(/\s+/);
    let clickableKannada = '';
    
    words.forEach(w => {
      // Clean word for matching (e.g. remove fullstops)
      const cleanWord = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
      
      // Check if word exists in our story vocab list
      const matchesVocab = story.vocab.some(v => v.word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"") === cleanWord);
      
      if (matchesVocab) {
        clickableKannada += `<span class="word-clickable" data-word="${cleanWord}">${w}</span> `;
      } else {
        clickableKannada += `<span>${w}</span> `;
      }
    });

    lineBox.innerHTML = `
      <span class="line-number">Line ${index + 1}</span>
      <div class="line-kannada">${clickableKannada}</div>
      <div class="line-translit">${line.transliteration}</div>
      <div class="line-english">${line.english}</div>
    `;
    
    container.appendChild(lineBox);
  });

  // Setup click listeners for interactive vocabulary words
  container.querySelectorAll('.word-clickable').forEach(wordNode => {
    wordNode.addEventListener('click', (e) => {
      const wordText = e.currentTarget.getAttribute('data-word');
      showVocabWord(story, wordText);
    });
  });

  // Toggles visibility of english / transliteration
  updateReaderVisibility();
  
  // Re-bind toggle switch listeners
  document.getElementById('toggle-transliteration').onchange = updateReaderVisibility;
  document.getElementById('toggle-english').onchange = updateReaderVisibility;
}

// Hide/Show reader options
function updateReaderVisibility() {
  const showTranslit = document.getElementById('toggle-transliteration').checked;
  const showEnglish = document.getElementById('toggle-english').checked;
  
  document.querySelectorAll('.line-translit').forEach(el => {
    el.classList.toggle('hidden', !showTranslit);
  });
  document.querySelectorAll('.line-english').forEach(el => {
    el.classList.toggle('hidden', !showEnglish);
  });
}

// Generate contextual grammar note for a vocabulary entry
function getGrammarNote(vocabEntry) {
  const pos = vocabEntry.pos;
  const translit = (vocabEntry.transliteration || '').toLowerCase();

  // Detect past-tense verb endings (neuter: -ithu/-itu; masc: -anu/-danu; fem: -alu/-daLu; plural: -aru/-daru; 1st: -dhe/-de)
  const isPastVerb = /i(thu|tu|ttu|danu|daLu|daru|dhe|de|dhaevu|devu)$/.test(translit);

  if (pos === 'Verb') {
    let tenseHint = '';
    if (isPastVerb) {
      tenseHint = '<strong>Past tense.</strong> ';
      if (/i(thu|tu|ttu)$/.test(translit)) {
        tenseHint += 'The <em>-ithu / -itu</em> ending marks <strong>neuter gender</strong> (animals, objects, abstract subjects). ';
      } else if (/(danu|anu)$/.test(translit)) {
        tenseHint += 'The <em>-anu / -danu</em> ending marks <strong>masculine singular</strong> (he). ';
      } else if (/(daLu|aLu)$/.test(translit)) {
        tenseHint += 'The <em>-aLu / -daLu</em> ending marks <strong>feminine singular</strong> (she). ';
      } else if (/(daru|aru)$/.test(translit)) {
        tenseHint += 'The <em>-aru / -daru</em> ending marks <strong>plural or formal</strong> (they / you formal). ';
      } else if (/(dhe|de)$/.test(translit)) {
        tenseHint += 'The <em>-dhe / -de</em> ending marks <strong>1st person singular</strong> (I). ';
      }
    }
    return `${tenseHint}Kannada verbs come at the <strong>end of the sentence</strong> (SOV order) and change their suffix to agree with the subject's gender and number. → See <em>Verb Conjugation</em> in the Grammar Guide.`;
  }

  if (pos === 'Noun') {
    return `Nouns take <strong>case suffixes</strong> to show their role: add <em>-annu</em> for a direct object, <em>-ge / -kke</em> for "to/for", <em>-alli</em> for "in/at", <em>-inda</em> for "from". The bare form is used as subject. → See <em>Case Markers</em> in the Grammar Guide.`;
  }

  if (pos === 'Pronoun') {
    return `Kannada pronouns change form based on case (subject / object / possessive). Use <strong>ನೀವು (neevu)</strong> as the default "you" in formal or unfamiliar situations. → See <em>Pronouns</em> in the Grammar Guide.`;
  }

  if (pos === 'Adjective') {
    return `Adjectives in Kannada come <strong>before the noun</strong> they modify and do not change form to match gender or number — unlike the verb, which must agree with the subject.`;
  }

  if (pos === 'Adverb') {
    return `Adverbs typically appear <strong>before the verb</strong> in Kannada's SOV structure. They are invariable — no agreement changes.`;
  }

  if (pos === 'Postposition') {
    return `Kannada uses <strong>postpositions</strong>, not prepositions. They come <em>after</em> the noun (e.g., <em>mane-yalli</em> = "house-in" = "in the house"), unlike English where "in" comes before.`;
  }

  return null;
}

// Display vocabulary details inside dictionary side panel
function showVocabWord(story, cleanWord) {
  const vocabDef = story.vocab.find(v => v.word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"") === cleanWord);
  if (!vocabDef) return;

  const pane = document.getElementById('dictionary-pane');
  const content = document.getElementById('dict-content');
  
  pane.classList.remove('hidden');
  
  const grammarNote = getGrammarNote(vocabDef);
  const grammarBlock = grammarNote
    ? `<div class="dict-grammar-note">
        <div class="dict-grammar-label">Grammar Note</div>
        <div class="dict-grammar-text">${grammarNote}</div>
       </div>`
    : '';

  content.innerHTML = `
    <div class="dict-word-card">
      <div class="dict-word">${vocabDef.word}</div>
      <div class="dict-translit">${vocabDef.transliteration}</div>
      <span class="badge" style="width:fit-content; margin-top:0.25rem;">${vocabDef.pos}</span>
      <div class="dict-meaning">${vocabDef.meaning}</div>
      ${grammarBlock}
    </div>
  `;

  // Learn Word
  if (!state.vocabLearned.has(vocabDef.word)) {
    state.vocabLearned.add(vocabDef.word);
    state.xp += 2; // +2 XP for learning a word
    saveProgress();
  }
}

// --- QUIZ ENGINE ---
function startQuizForStory(storyId) {
  const story = stories.find(s => s.id === storyId);
  if (!story) return;

  state.quizCurrentQuestion = 0;
  state.quizScore = 0;
  state.quizQuestions = generateQuizQuestions(story);
  
  switchView('quizzes');
  document.getElementById('quiz-card').classList.remove('hidden');
  document.getElementById('quiz-results-card').classList.add('hidden');
  
  renderQuizQuestion();
}

// Compile a customized 3-question deck for the active story
function generateQuizQuestions(story) {
  const questions = [];
  
  // Q1: Multiple choice matching sentence translation
  const lineToTest = story.lines[0];
  const distractors = stories
    .filter(s => s.id !== story.id)
    .map(s => s.lines[0].english)
    .slice(0, 3);
  
  const q1Options = [...distractors, lineToTest.english].sort(() => Math.random() - 0.5);
  
  questions.push({
    type: 'mcq',
    prompt: `What is the correct English translation of:<br><strong style="font-size:1.5rem; color:var(--primary-gold);">${lineToTest.kannada}</strong>`,
    options: q1Options,
    correctIndex: q1Options.indexOf(lineToTest.english)
  });

  // Q2: Scrambled words ordering puzzle
  const lineToScramble = story.lines[1]; // Use line 2
  // We use Kannada script words for the puzzle
  const correctOrder = lineToScramble.kannada.replace(/[.]/g, "").trim().split(/\s+/);
  const scrambledWords = [...correctOrder].sort(() => Math.random() - 0.5);

  questions.push({
    type: 'scramble',
    prompt: `Arrange the Kannada script words in the correct order to translate:<br><strong>"${lineToScramble.english}"</strong>`,
    scrambled: scrambledWords,
    correctOrder: correctOrder
  });

  // Q3: Vocab test matching
  if (story.vocab && story.vocab.length > 0) {
    const vocabTest = story.vocab[0];
    const vocabDistractors = ['Cat', 'Tree', 'School', 'Water', 'Biscuits', 'Milk']
      .filter(item => item.toLowerCase() !== vocabTest.meaning.toLowerCase())
      .slice(0, 3);
    const q3Options = [...vocabDistractors, vocabTest.meaning].sort(() => Math.random() - 0.5);
    
    questions.push({
      type: 'mcq',
      prompt: `What does the Kannada word <strong>"${vocabTest.word}"</strong> (${vocabTest.transliteration}) mean?`,
      options: q3Options,
      correctIndex: q3Options.indexOf(vocabTest.meaning)
    });
  } else {
    // Fallback MCQ if no vocab
    const lineToTest3 = story.lines[2];
    const distractors3 = stories
      .filter(s => s.id !== story.id)
      .map(s => s.lines[2].english)
      .slice(0, 3);
    const q3Options = [...distractors3, lineToTest3.english].sort(() => Math.random() - 0.5);
    
    questions.push({
      type: 'mcq',
      prompt: `Translate: <strong>"${lineToTest3.kannada}"</strong>`,
      options: q3Options,
      correctIndex: q3Options.indexOf(lineToTest3.english)
    });
  }

  return questions;
}

// Render the active quiz card interface
function renderQuizQuestion() {
  const currentQ = state.quizQuestions[state.quizCurrentQuestion];
  const qNumText = document.getElementById('quiz-question-number');
  const progressBar = document.getElementById('quiz-progress-bar');
  const questionBody = document.getElementById('quiz-question-body');
  const submitBtn = document.getElementById('quiz-submit-btn');

  // Update Progress bars
  qNumText.innerText = `Question ${state.quizCurrentQuestion + 1} of ${state.quizQuestions.length}`;
  progressBar.style.width = `${((state.quizCurrentQuestion + 1) / state.quizQuestions.length) * 100}%`;
  
  submitBtn.disabled = true;
  submitBtn.innerText = "Check Answer";
  submitBtn.dataset.state = "check";

  if (currentQ.type === 'mcq') {
    questionBody.innerHTML = `
      <p class="quiz-prompt">${currentQ.prompt}</p>
      <div class="options-stack" id="mcq-options-stack">
        ${currentQ.options.map((opt, idx) => `
          <button class="option-btn" data-index="${idx}">${opt}</button>
        `).join('')}
      </div>
    `;

    // Setup select click event
    const options = questionBody.querySelectorAll('.option-btn');
    options.forEach(btn => {
      btn.addEventListener('click', (e) => {
        options.forEach(b => b.classList.remove('selected'));
        e.currentTarget.classList.add('selected');
        submitBtn.disabled = false;
        state.selectedAnswerIndex = parseInt(e.currentTarget.getAttribute('data-index'));
      });
    });

  } else if (currentQ.type === 'scramble') {
    state.scrambleWorkspace = [];
    questionBody.innerHTML = `
      <p class="quiz-prompt">${currentQ.prompt}</p>
      <div class="scrambled-sentence-box">
        <div class="scramble-slots" id="scramble-slots-area">
          <span style="color:var(--text-secondary); font-size:0.9rem;">Click words below to assemble your answer...</span>
        </div>
        <div class="scramble-options" id="scramble-options-area">
          ${currentQ.scrambled.map((word, idx) => `
            <button class="scramble-word-btn" data-word="${word}" data-index="${idx}">${word}</button>
          `).join('')}
        </div>
      </div>
    `;

    const wordButtons = questionBody.querySelectorAll('.scramble-word-btn');
    const slotsArea = document.getElementById('scramble-slots-area');

    wordButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const word = e.currentTarget.getAttribute('data-word');
        
        // Remove empty state label
        if (state.scrambleWorkspace.length === 0) {
          slotsArea.innerHTML = '';
        }
        
        // Push word to workspace
        state.scrambleWorkspace.push(word);
        e.currentTarget.classList.add('used');
        
        // Render word pill in slot area
        const pill = document.createElement('button');
        pill.className = 'scramble-word-btn';
        pill.innerText = word;
        
        // clicking the pill removes it
        pill.addEventListener('click', () => {
          state.scrambleWorkspace = state.scrambleWorkspace.filter(w => w !== word);
          btn.classList.remove('used');
          pill.remove();
          
          if (state.scrambleWorkspace.length === 0) {
            slotsArea.innerHTML = '<span style="color:var(--text-secondary); font-size:0.9rem;">Click words below to assemble...</span>';
            submitBtn.disabled = true;
          }
        });

        slotsArea.appendChild(pill);
        submitBtn.disabled = false;
      });
    });
  }
}

// Compare user selection to correct answers
function checkQuizAnswer() {
  const currentQ = state.quizQuestions[state.quizCurrentQuestion];
  const submitBtn = document.getElementById('quiz-submit-btn');
  const buttonState = submitBtn.dataset.state;

  if (buttonState === "check") {
    let isCorrect = false;

    if (currentQ.type === 'mcq') {
      const options = document.querySelectorAll('.option-btn');
      options.forEach(opt => opt.style.pointerEvents = 'none'); // Disable clicking
      
      const selectedBtn = Array.from(options).find(btn => parseInt(btn.getAttribute('data-index')) === state.selectedAnswerIndex);
      const correctBtn = Array.from(options).find(btn => parseInt(btn.getAttribute('data-index')) === currentQ.correctIndex);

      if (state.selectedAnswerIndex === currentQ.correctIndex) {
        isCorrect = true;
        selectedBtn.classList.add('correct');
      } else {
        selectedBtn.classList.add('wrong');
        correctBtn.classList.add('correct');
      }
    } else if (currentQ.type === 'scramble') {
      const correctText = currentQ.correctOrder.join(' ').toLowerCase().replace(/[.,#!$%^&*;:{}=\-_`~()]/g,"").trim();
      const userText = state.scrambleWorkspace.join(' ').toLowerCase().replace(/[.,#!$%^&*;:{}=\-_`~()]/g,"").trim();
      
      const slotsArea = document.getElementById('scramble-slots-area');
      slotsArea.style.pointerEvents = 'none';

      if (correctText === userText) {
        isCorrect = true;
        slotsArea.style.borderColor = "#4CAF50";
        slotsArea.style.background = "rgba(76, 175, 80, 0.05)";
      } else {
        slotsArea.style.borderColor = "#F44336";
        slotsArea.style.background = "rgba(244, 67, 54, 0.05)";
        
        // Show correct sentence below
        const tipEl = document.createElement('div');
        tipEl.style.color = '#F4A261';
        tipEl.style.fontSize = '0.9rem';
        tipEl.style.marginTop = '0.5rem';
        tipEl.innerHTML = `Correct Order: <strong>${currentQ.correctOrder.join(' ')}</strong>`;
        document.querySelector('.scrambled-sentence-box').appendChild(tipEl);
      }
    }

    if (isCorrect) {
      state.quizScore++;
    }

    submitBtn.innerText = (state.quizCurrentQuestion + 1 < state.quizQuestions.length) ? "Next Question" : "View Results";
    submitBtn.dataset.state = "next";
  } else {
    // Advance index
    if (state.quizCurrentQuestion + 1 < state.quizQuestions.length) {
      state.quizCurrentQuestion++;
      renderQuizQuestion();
    } else {
      // Completed! Show Results pane
      finishQuiz();
    }
  }
}

// Complete quiz scoring & XP calculations
function finishQuiz() {
  document.getElementById('quiz-card').classList.add('hidden');
  const resultsCard = document.getElementById('quiz-results-card');
  resultsCard.classList.remove('hidden');

  const correctAnswers = state.quizScore;
  const totalQuestions = state.quizQuestions.length;
  const xpEarned = correctAnswers * 5; // +5 XP per correct answer

  state.xp += xpEarned;
  
  // Add completed story to achievements list
  if (!state.completedStories.includes(state.activeStoryId)) {
    state.completedStories.push(state.activeStoryId);
  }

  document.getElementById('results-score').innerText = `${correctAnswers}/${totalQuestions}`;
  document.getElementById('results-xp').innerText = `+${xpEarned} XP`;
  
  saveProgress();
}

// --- CONVERSATION SIMULATOR ---
function startConversation(partnerId) {
  const config = conversationFlows[partnerId];
  if (!config) return;

  state.chatPartner = partnerId;
  state.chatStep = 'start';
  state.chatHistory = [];

  document.getElementById('chat-selection-screen').classList.add('hidden');
  document.getElementById('chat-interface-screen').classList.remove('hidden');

  // Set header info
  document.getElementById('chat-header-avatar').innerText = config.avatar;
  document.getElementById('chat-header-name').innerText = config.name;

  const thread = document.getElementById('chat-thread');
  thread.innerHTML = '';

  advanceConversation();
}

// Advance chat bubble logic flow
function advanceConversation() {
  const config = conversationFlows[state.chatPartner];
  const stepData = config[state.chatStep];
  if (!stepData) return;

  // Render Bot Response after a small typing delay
  renderBotMessage(stepData.text);

  // Render Choices container
  const choicesContainer = document.getElementById('chat-choices');
  choicesContainer.innerHTML = '';

  if (stepData.choices && stepData.choices.length > 0) {
    stepData.choices.forEach(c => {
      const choiceBtn = document.createElement('button');
      choiceBtn.className = 'chat-choice-btn';
      choiceBtn.innerText = c.text;
      choiceBtn.addEventListener('click', () => {
        // User sends selected message
        renderUserMessage(c.text);
        
        // Go to next step
        state.chatStep = c.next;
        choicesContainer.innerHTML = '';
        setTimeout(advanceConversation, 800);
      });
      choicesContainer.appendChild(choiceBtn);
    });
  } else {
    // End conversation step reached
    if (stepData.xpEarned) {
      state.xp += stepData.xpEarned;
      saveProgress();
      
      // Update achievements badge count
      if (!localStorage.getItem(`chat_done_${state.chatPartner}`)) {
        localStorage.setItem(`chat_done_${state.chatPartner}`, 'true');
      }
    }

    const finishBtn = document.createElement('button');
    finishBtn.className = 'btn btn-primary';
    finishBtn.innerText = 'Complete Session';
    finishBtn.style.marginTop = '0.5rem';
    finishBtn.onclick = () => {
      document.getElementById('chat-interface-screen').classList.add('hidden');
      document.getElementById('chat-selection-screen').classList.remove('hidden');
      switchView('dashboard');
    };
    choicesContainer.appendChild(finishBtn);
  }
}

// Render message bubbles in viewport
function renderBotMessage(text) {
  const thread = document.getElementById('chat-thread');
  const msg = document.createElement('div');
  msg.className = 'chat-message bot';
  
  msg.innerHTML = `
    <div class="chat-bubble">${text}</div>
  `;
  thread.appendChild(msg);
  thread.scrollTop = thread.scrollHeight;
}

function renderUserMessage(text) {
  const thread = document.getElementById('chat-thread');
  const msg = document.createElement('div');
  msg.className = 'chat-message user';
  
  msg.innerHTML = `
    <div class="chat-bubble">${text}</div>
  `;
  thread.appendChild(msg);
  thread.scrollTop = thread.scrollHeight;
}

// --- ACHIEVEMENTS & BADGES ENGINE ---
function renderAchievements() {
  const level = Math.floor(state.xp / 100) + 1;
  document.getElementById('ach-level-badge').innerText = level < 3 ? 'Novice' : level < 6 ? 'Intermediate' : 'Expert';
  
  // Count active badges unlocked
  let count = 0;
  const badgesList = [
    'badge-first-step',
    'badge-animal-whisperer',
    'badge-quiz-wizard',
    'badge-chatterbox',
    'badge-sentence-architect',
    'badge-kannada-ruler'
  ];

  badgesList.forEach(id => {
    const card = document.getElementById(id);
    if (card && !card.classList.contains('locked')) {
      count++;
    }
  });

  document.getElementById('ach-badges-count').innerText = `${count}/6`;
}

// Badge eligibility logic checks
function checkBadges() {
  // 1. First Steps: Read your very first story (in completedStories array)
  if (state.completedStories.length >= 1) {
    unlockBadge('badge-first-step');
  }

  // 2. Animal Whisperer: Read 5 stories in the Animals category
  const animalStoriesCount = state.completedStories.filter(id => {
    const s = stories.find(item => item.id === id);
    return s && s.category === 'Animals';
  }).length;
  if (animalStoriesCount >= 5) {
    unlockBadge('badge-animal-whisperer');
  }

  // 3. Quiz Wizard: score 100% on 3 quizzes (based on XP increment or direct storage)
  if (state.xp >= 60) {
    unlockBadge('badge-quiz-wizard');
  }

  // 4. Chatterbox: completed 2 chats
  const chat1 = localStorage.getItem('chat_done_megha');
  const chat2 = localStorage.getItem('chat_done_babu');
  const chat3 = localStorage.getItem('chat_done_orange');
  let chatsDone = 0;
  if (chat1) chatsDone++;
  if (chat2) chatsDone++;
  if (chat3) chatsDone++;
  
  if (chatsDone >= 2) {
    unlockBadge('badge-chatterbox');
  }

  // 5. Kannada Ruler: unlock all 32 stories in the course
  if (state.completedStories.length >= 32) {
    unlockBadge('badge-kannada-ruler');
  }
}

function unlockBadge(badgeId) {
  const card = document.getElementById(badgeId);
  if (card && card.classList.contains('locked')) {
    card.classList.remove('locked');
    card.classList.add('unlocked');
    const statusLabel = card.querySelector('.badge-status');
    if (statusLabel) {
      statusLabel.innerText = '✓ Unlocked';
    }
  }
}

// --- VOCABULARY FLASHCARDS ENGINE ---

export function initQuizSelectionMenu() {
  const count = state.completedStories.length;
  const optionCard = document.getElementById('vocab-flashcards-option');
  const statusEl = document.getElementById('flashcard-unlock-status');
  const launchBtn = document.getElementById('launch-flashcards-btn');
  
  // Hide all playing screens and show menu
  document.getElementById('quiz-selection-menu').classList.remove('hidden');
  document.getElementById('quiz-card').classList.add('hidden');
  document.getElementById('quiz-results-card').classList.add('hidden');
  document.getElementById('flashcard-card').classList.add('hidden');
  document.getElementById('flashcard-results-card').classList.add('hidden');

  if (count >= 5) {
    optionCard.classList.remove('locked');
    launchBtn.classList.remove('hidden');
    // Calculate how many words are available in completed stories
    let wordCount = 0;
    state.completedStories.forEach(id => {
      const s = stories.find(item => item.id === id);
      if (s && s.vocab) wordCount += s.vocab.length;
    });
    statusEl.innerHTML = `✅ Unlocked (${wordCount} words learned)`;
  } else {
    optionCard.classList.add('locked');
    launchBtn.classList.add('hidden');
    statusEl.innerHTML = `🔒 Complete 5 stories to unlock (Currently ${count}/5 completed)`;
  }
}

function startFlashcards() {
  const activeVocab = [];
  
  // Collect all vocabulary words from completed stories
  state.completedStories.forEach(storyId => {
    const story = stories.find(s => s.id === storyId);
    if (story && story.vocab) {
      story.vocab.forEach(v => {
        if (!activeVocab.some(x => x.word === v.word)) {
          activeVocab.push(v);
        }
      });
    }
  });

  if (activeVocab.length === 0) {
    alert("No vocabulary words found in completed stories. Please complete a story first.");
    return;
  }

  // Shuffle deck
  state.flashcardDeck = [...activeVocab].sort(() => Math.random() - 0.5);
  state.flashcardIndex = 0;
  state.flashcardGotItCount = 0;

  document.getElementById('quiz-selection-menu').classList.add('hidden');
  document.getElementById('flashcard-card').classList.remove('hidden');

  renderFlashcard();
}

function renderFlashcard() {
  const currentCard = state.flashcardDeck[state.flashcardIndex];
  
  document.getElementById('fc-front-word').innerText = currentCard.word;
  document.getElementById('fc-back-translit').innerText = currentCard.transliteration;
  document.getElementById('fc-back-pos').innerText = currentCard.pos;
  document.getElementById('fc-back-meaning').innerText = currentCard.meaning;
  
  document.getElementById('flashcard-progress-text').innerText = `Card ${state.flashcardIndex + 1} of ${state.flashcardDeck.length}`;

  // Make sure card starts unflipped
  document.getElementById('active-flashcard').classList.remove('flipped');
}

function handleFlashcardAction(gotIt) {
  if (gotIt) {
    state.flashcardGotItCount++;
  } else {
    // Leitner repeat: push card to the end of the deck
    const currentCard = state.flashcardDeck[state.flashcardIndex];
    state.flashcardDeck.push(currentCard);
  }

  state.flashcardIndex++;

  if (state.flashcardIndex < state.flashcardDeck.length) {
    renderFlashcard();
  } else {
    finishFlashcards();
  }
}

function finishFlashcards() {
  document.getElementById('flashcard-card').classList.add('hidden');
  document.getElementById('flashcard-results-card').classList.remove('hidden');

  const xpEarned = state.flashcardGotItCount * 2; // +2 XP per word studied successfully
  state.xp += xpEarned;

  document.getElementById('fc-results-count').innerText = state.flashcardGotItCount;
  document.getElementById('fc-results-xp').innerText = `+${xpEarned} XP`;

  // Update achievements tracker badge count if needed
  let chatCount = parseInt(localStorage.getItem('chats_completed') || '0') + 1;
  localStorage.setItem('chats_completed', chatCount);

  saveProgress();
}
