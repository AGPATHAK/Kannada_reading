const stories = [
  {
    id: 1,
    title: "The Dog and the Biscuits",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ನಾಯಿ ಇತ್ತು.",
        transliteration: "Ondhu naayi itthu.",
        english: "There was a dog."
      },
      {
        kannada: "ನಾಯಿ biscuits ನೋಡಿತು.",
        transliteration: "naayi biscuits noodithu.",
        english: "Dog saw the biscuits."
      },
      {
        kannada: "ನಾಯಿ biscuits ತಿಂದಿತು.",
        transliteration: "naayi biscuits thindhithu.",
        english: "Dog ate biscuits."
      }
    ],
    vocab: [
      { word: "ಒಂದು", transliteration: "Ondhu", meaning: "One / A", pos: "Adjective" },
      { word: "ನಾಯಿ", transliteration: "naayi", meaning: "Dog", pos: "Noun" },
      { word: "ಇತ್ತು", transliteration: "itthu", meaning: "was (neutral/singular)", pos: "Verb" },
      { word: "ನೋಡಿತು", transliteration: "noodithu", meaning: "saw (neutral/singular)", pos: "Verb" },
      { word: "ತಿಂದಿತು", transliteration: "thindhithu", meaning: "ate (neutral/singular)", pos: "Verb" }
    ]
  },
  {
    id: 2,
    title: "The Thirsty Rabbit",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ಮೊಲ ಇತ್ತು.",
        transliteration: "Ondhu moLa itthu.",
        english: "There was a Rabbit."
      },
      {
        kannada: "ಮೊಲ ನೀರು ಕುಡಿಯಿತು.",
        transliteration: "moLa Neeru kudiyithu.",
        english: "The Rabbit drank water."
      },
      {
        kannada: "ಅದು ನಿದ್ದೆ ಮಾಡಿತು.",
        transliteration: "adhu niddhe maadidthu.",
        english: "And it slept."
      }
    ],
    vocab: [
      { word: "ಮೊಲ", transliteration: "moLa", meaning: "Rabbit", pos: "Noun" },
      { word: "ನೀರು", transliteration: "Neeru", meaning: "Water", pos: "Noun" },
      { word: "ಕುಡಿಯಿತು", transliteration: "kudiyithu", meaning: "drank", pos: "Verb" },
      { word: "ಅದು", transliteration: "adhu", meaning: "It / That", pos: "Pronoun" },
      { word: "ನಿದ್ದೆ", transliteration: "niddhe", meaning: "Sleep", pos: "Noun" },
      { word: "ಮಾಡಿತು", transliteration: "maadidthu", meaning: "did / made", pos: "Verb" }
    ]
  },
  {
    id: 3,
    title: "My Sister Vidya",
    category: "Family & Friends",
    lines: [
      {
        kannada: "ನಾನು ಮೇಘ.",
        transliteration: "naanu Megha.",
        english: "I'm Megha."
      },
      {
        kannada: "ಅವಳು ವಿದ್ಯಾ.",
        transliteration: "avaLu Vidhyaa.",
        english: "She is Vidya."
      },
      {
        kannada: "ವಿದ್ಯಾ ನನ್ನ ತಂಗಿ.",
        transliteration: "Vidhyaa nanna thangi.",
        english: "Vidya is my younger sister."
      }
    ],
    vocab: [
      { word: "ನಾನು", transliteration: "naanu", meaning: "I / Myself", pos: "Pronoun" },
      { word: "ಮೇಘ", transliteration: "Megha", meaning: "Megha (Name)", pos: "Noun (Proper)" },
      { word: "ಅವಳು", transliteration: "avaLu", meaning: "She", pos: "Pronoun" },
      { word: "ವಿದ್ಯಾ", transliteration: "Vidhyaa", meaning: "Vidya (Name)", pos: "Noun (Proper)" },
      { word: "ನನ್ನ", transliteration: "nanna", meaning: "My", pos: "Pronoun (Possessive)" },
      { word: "ತಂಗಿ", transliteration: "thangi", meaning: "Younger sister", pos: "Noun" }
    ]
  },
  {
    id: 4,
    title: "The Playful Cat",
    category: "Animals",
    lines: [
      {
        kannada: "ಬೆಕ್ಕು ಹೊರಗೆ ಹೋಯಿತು.",
        transliteration: "Baekku horagae hooyithu.",
        english: "The cat went outside."
      },
      {
        kannada: "ಬೆಕ್ಕು ಆಟ ಆಡಿತು.",
        transliteration: "Baekku aata aadithu.",
        english: "The cat played."
      },
      {
        kannada: "ಬೆಕ್ಕು ಒಳಗೆ ಬಂದಿತು.",
        transliteration: "Baekku oLagae bandhithu.",
        english: "The cat came inside."
      }
    ],
    vocab: [
      { word: "ಬೆಕ್ಕು", transliteration: "Baekku", meaning: "Cat", pos: "Noun" },
      { word: "ಹೊರಗೆ", transliteration: "horagae", meaning: "Outside", pos: "Adverb" },
      { word: "ಹೋಯಿತು", transliteration: "hooyithu", meaning: "went", pos: "Verb" },
      { word: "ಆಟ", transliteration: "aata", meaning: "Game / Play", pos: "Noun" },
      { word: "ಆಡಿತು", transliteration: "aadithu", meaning: "played", pos: "Verb" },
      { word: "ಒಳಗೆ", transliteration: "oLagae", meaning: "Inside", pos: "Adverb" },
      { word: "ಬಂದಿತು", transliteration: "bandhithu", meaning: "came", pos: "Verb" }
    ]
  },
  {
    id: 5,
    title: "Babu from Bangalore",
    category: "School & Home",
    lines: [
      {
        kannada: "ನನ್ನ ಹೆಸರು ಬಾಬು.",
        transliteration: "Nanna hesaru Baabu.",
        english: "My name is Babu."
      },
      {
        kannada: "ನಾನು ಬೆಂಗಳೂರಿನವನು.",
        transliteration: "Naanu bengalurina vanu.",
        english: "I'm from Bangalore."
      },
      {
        kannada: "ನಾನು National school ನಲ್ಲಿ ಓದುತ್ತಿದ್ದೇನೆ.",
        transliteration: "naanu National School nalli oodhutthiddhaEnae.",
        english: "I'm studying in National School."
      }
    ],
    vocab: [
      { word: "ಹೆಸರು", transliteration: "hesaru", meaning: "Name", pos: "Noun" },
      { word: "ಬಾಬು", transliteration: "Baabu", meaning: "Babu (Name)", pos: "Noun (Proper)" },
      { word: "ಬೆಂಗಳೂರಿನವನು", transliteration: "bengalurina vanu", meaning: "Person from Bangalore (male)", pos: "Noun / Demonym" },
      { word: "ನಲ್ಲಿ", transliteration: "nalli", meaning: "In / Inside of", pos: "Suffix (Locative)" },
      { word: "ಓದುತ್ತಿದ್ದೇನೆ", transliteration: "oodhutthiddhaEnae", meaning: "I am studying/reading", pos: "Verb" }
    ]
  },
  {
    id: 6,
    title: "The Jumping Monkey",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ಕೋತಿ ಮರದ ಮೇಲೆ ಕುಳಿತಿತ್ತು.",
        transliteration: "Ondhu kothi maradha maelae kuLithitthu.",
        english: "A Monkey was sitting on a tree."
      },
      {
        kannada: "ಅದು ಹಣ್ಣು ತಿಂದಿತು.",
        transliteration: "Adhu haNNu thindhithu.",
        english: "It ate fruit."
      },
      {
        kannada: "ಅದು ಮರದಿಂದ ಜಿಗಿಯಿತು.",
        transliteration: "Adhu maradhindha jigiyithu.",
        english: "It jumped from the tree."
      }
    ],
    vocab: [
      { word: "ಕೋತಿ", transliteration: "kothi", meaning: "Monkey", pos: "Noun" },
      { word: "ಮರದ", transliteration: "maradha", meaning: "of tree", pos: "Noun (Genitive)" },
      { word: "ಮೇಲೆ", transliteration: "maelae", meaning: "On / Above", pos: "Postposition" },
      { word: "ಕುಳಿತಿತ್ತು", transliteration: "kuLithitthu", meaning: "was sitting", pos: "Verb" },
      { word: "ಹಣ್ಣು", transliteration: "haNNu", meaning: "Fruit", pos: "Noun" },
      { word: "ಮರದಿಂದ", transliteration: "maradhindha", meaning: "from the tree", pos: "Noun (Ablative)" },
      { word: "ಜಿಗಿಯಿತು", transliteration: "jigiyithu", meaning: "jumped", pos: "Verb" }
    ]
  },
  {
    id: 7,
    title: "Amma's Idlis",
    category: "Family & Friends",
    lines: [
      {
        kannada: "ಅಮ್ಮ ಇಡ್ಲಿ ಮಾಡಿದ್ದಾರೆ.",
        transliteration: "Amma Idli maadiddhaarae.",
        english: "Amma has Prepared Idli."
      },
      {
        kannada: "ನಾನು ಎರಡು ಇಡ್ಲಿ ತಿಂದೆ.",
        transliteration: "Naanu aeradu idli thindhae.",
        english: "I had 2 Idli."
      },
      {
        kannada: "ನನ್ನ ತಮ್ಮ ಎರಡು ಇಡ್ಲಿ ತಿಂದ.",
        transliteration: "nanna thamma aeradu idli thindha.",
        english: "My younger brother had 2 Idli."
      }
    ],
    vocab: [
      { word: "ಅಮ್ಮ", transliteration: "Amma", meaning: "Mother", pos: "Noun" },
      { word: "ಇಡ್ಲಿ", transliteration: "Idli", meaning: "Idli (Rice cake)", pos: "Noun" },
      { word: "ಮಾಡಿದ್ದಾರೆ", transliteration: "maadiddhaarae", meaning: "has made (respectful)", pos: "Verb" },
      { word: "ಎರಡು", transliteration: "aeradu", meaning: "Two", pos: "Numeral" },
      { word: "ತಿಂದೆ", transliteration: "thindhae", meaning: "I ate", pos: "Verb" },
      { word: "ತಮ್ಮ", transliteration: "thamma", meaning: "Younger brother", pos: "Noun" },
      { word: "ತಿಂದ", transliteration: "thindha", meaning: "he ate", pos: "Verb" }
    ]
  },
  {
    id: 8,
    title: "Story Books",
    category: "School & Home",
    lines: [
      {
        kannada: "ನಮಗೆ ಕಥೆ ಪುಸ್ತಕ ಇಷ್ಟ.",
        transliteration: "Nanagae kathae pusthaka ishta.",
        english: "I like story book."
      },
      {
        kannada: "ನನ್ನ ಬಳಿ ತುಂಬಾ ಕಥೆ ಪುಸ್ತಕಗಳು ಇವೆ.",
        transliteration: "nanna baLI thumbaa kathae pusthakagaLU ivae.",
        english: "I have many story books."
      },
      {
        kannada: "ನಮಗೆ ಹುಲಿಯ ಕಥೆ ಇಷ್ಟ.",
        transliteration: "nanagae huliya kathae ishta.",
        english: "I like Tiger story."
      }
    ],
    vocab: [
      { word: "ನಮಗೆ", transliteration: "Nanagae / Namagae", meaning: "To me / To us", pos: "Pronoun (Dative)" },
      { word: "ಕಥೆ", transliteration: "kathae", meaning: "Story", pos: "Noun" },
      { word: "ಪುಸ್ತಕ", transliteration: "pusthaka", meaning: "Book", pos: "Noun" },
      { word: "ಇಷ್ಟ", transliteration: "ishta", meaning: "Liked / Favorite", pos: "Adjective" },
      { word: "ಬಳಿ", transliteration: "baLI", meaning: "with / near", pos: "Postposition" },
      { word: "ತುಂಬಾ", transliteration: "thumbaa", meaning: "Many / A lot", pos: "Adverb" },
      { word: "ಪುಸ್ತಕಗಳು", transliteration: "pusthakagaLU", meaning: "Books", pos: "Noun (Plural)" },
      { word: "ಇವೆ", transliteration: "ivae", meaning: "are present / there are", pos: "Verb" },
      { word: "ಹುಲಿಯ", transliteration: "huliya", meaning: "of Tiger", pos: "Noun (Genitive)" }
    ]
  },
  {
    id: 9,
    title: "Orange the Cat",
    category: "Animals",
    lines: [
      {
        kannada: "ನನ್ನ ಬಳಿ ಒಂದು ಬೆಕ್ಕು ಇದೆ.",
        transliteration: "Nanna baLI ondhu baekku idhe.",
        english: "I have a cat."
      },
      {
        kannada: "ನನ್ನ ಬೆಕ್ಕಿನ ಹೆಸರು ಆರೆಂಜ್.",
        transliteration: "nanna baekkina haesaru Orange.",
        english: "My cat's name is Orange."
      },
      {
        kannada: "ಆರೆಂಜ್ ಗೆ Noodles ಎಂದರೆ ತುಂಬಾ ಇಷ್ಟ.",
        transliteration: "Orange gae noodles aendharae thumbaa ishta.",
        english: "Orange loves Noodles."
      }
    ],
    vocab: [
      { word: "ಇದೆ", transliteration: "idhe", meaning: "exists / is there", pos: "Verb" },
      { word: "ಬೆಕ್ಕಿನ", transliteration: "baekkina", meaning: "of cat", pos: "Noun (Genitive)" },
      { word: "ಆರೆಂಜ್", transliteration: "Orange", meaning: "Orange (Proper Name)", pos: "Noun" },
      { word: "ಎಂದರೆ", transliteration: "aendharae", meaning: "means / if said", pos: "Conjunction" }
    ]
  },
  {
    id: 10,
    title: "A Trip to the Park",
    category: "Activities",
    lines: [
      {
        kannada: "ನಾನು ಮತ್ತು ನನ್ನ ತಂಗಿ ಪಾರ್ಕ್ ಗೆ ಹೋದೆವು.",
        transliteration: "Naanu mathu nanna thangi park gae hoodhaevu.",
        english: "Myself and my sister went to the park."
      },
      {
        kannada: "ನಾವಿಬ್ಬರು ಆಟ ಆಡಿದೆವು.",
        transliteration: "Naavibbaru aata aadidhaevu.",
        english: "We both played."
      },
      {
        kannada: "ನಂತರ ಮನೆಗೆ ಬಂದೆವು.",
        transliteration: "Nanthara manaegae bandhaevu.",
        english: "Later we came home."
      }
    ],
    vocab: [
      { word: "ಮತ್ತು", transliteration: "mathu", meaning: "And", pos: "Conjunction" },
      { word: "ಪಾರ್ಕ್", transliteration: "park", meaning: "Park", pos: "Noun" },
      { word: "ಗೆ", transliteration: "gae", meaning: "to (dative suffix)", pos: "Suffix" },
      { word: "ಹೋದೆವು", transliteration: "hoodhaevu", meaning: "we went", pos: "Verb" },
      { word: "ನಾವಿಬ್ಬರು", transliteration: "Naavibbaru", meaning: "Both of us", pos: "Pronoun" },
      { word: "ಆಟವಾಡಿದೆವು", transliteration: "aata aadidhaevu", meaning: "we played", pos: "Verb" },
      { word: "ನಂತರ", transliteration: "Nanthara", meaning: "Afterwards / Later", pos: "Adverb" },
      { word: "ಮನೆಗೆ", transliteration: "manaegae", meaning: "to house/home", pos: "Noun (Dative)" },
      { word: "ಬಂದೆವು", transliteration: "bandhaevu", meaning: "we came", pos: "Verb" }
    ]
  },
  {
    id: 11,
    title: "Borrowing a Pen",
    category: "Family & Friends",
    lines: [
      {
        kannada: "ನನ್ನ ಗೆಳೆಯ ಒಂದು ಪೆನ್ ಕೇಳಿದ.",
        transliteration: "Nanna geLAEya ondhu pen kaELidha.",
        english: "My friend asked for a pen."
      },
      {
        kannada: "ನಾನು ಅವನಿಗೆ ಪೆನ್ ಕೊಟ್ಟೆ.",
        transliteration: "naanu avanigae pen Kottae.",
        english: "I gave him a pen."
      },
      {
        kannada: "ಅವನು ಒಂದು ಕಥೆ ಬರೆದ.",
        transliteration: "avanu ondhu kathe baraedha.",
        english: "He wrote a story."
      }
    ],
    vocab: [
      { word: "ಗೆಳೆಯ", transliteration: "geLAEya", meaning: "Friend (male)", pos: "Noun" },
      { word: "ಕೇಳಿದ", transliteration: "kaELidha", meaning: "asked (male)", pos: "Verb" },
      { word: "ಅವನಿಗೆ", transliteration: "avanigae", meaning: "to him", pos: "Pronoun (Dative)" },
      { word: "ಪೆನ್", transliteration: "pen", meaning: "Pen", pos: "Noun" },
      { word: "ಕೊಟ್ಟೆ", transliteration: "Kottae", meaning: "I gave", pos: "Verb" },
      { word: "ಅವನು", transliteration: "avanu", meaning: "He", pos: "Pronoun" },
      { word: "ಬರೆದ", transliteration: "baraedha", meaning: "wrote (male)", pos: "Verb" }
    ]
  },
  {
    id: 12,
    title: "The Duck and the Kitten",
    category: "Animals",
    lines: [
      {
        kannada: "ಬಾತುಕೋಳಿ ಮತ್ತು ಬೆಕ್ಕಿನ ಮರಿಗಳು ಗೆಳೆಯರು.",
        transliteration: "BaathukoLI mathu baekkina marigaLU gaeLAEyaru.",
        english: "Duck and kitten are friends."
      },
      {
        kannada: "ಅವರು ಒಟ್ಟಿಗೆ ಆಟವಾಡುತ್ತಿದ್ದರು.",
        transliteration: "avaru ottigae aatavaadutthiddharu.",
        english: "They played together."
      },
      {
        kannada: "ಅವರ ಬಳಿ ತುಂಬಾ ಆಟಿಕೆಗಳು ಇದ್ದವು.",
        transliteration: "avara baLI thumbaa aatikaegaLU eddhavu.",
        english: "They had many toys."
      }
    ],
    vocab: [
      { word: "ಬಾತುಕೋಳಿ", transliteration: "BaathukoLI", meaning: "Duck", pos: "Noun" },
      { word: "ಮರಿಗಳು", transliteration: "marigaLU", meaning: "young ones / babies", pos: "Noun (Plural)" },
      { word: "ಗೆಳೆಯರು", transliteration: "gaeLAEyaru", meaning: "Friends (plural)", pos: "Noun" },
      { word: "ಅವರು", transliteration: "avaru", meaning: "They / He/She (respectful)", pos: "Pronoun" },
      { word: "ಒಟ್ಟಿಗೆ", transliteration: "ottigae", meaning: "Together", pos: "Adverb" },
      { word: "ಆಟವಾಡುತ್ತಿದ್ದರು", transliteration: "aatavaadutthiddharu", meaning: "were playing", pos: "Verb" },
      { word: "ಆಟಿಕೆಗಳು", transliteration: "aatikaegaLU", meaning: "Toys", pos: "Noun (Plural)" },
      { word: "ಇದ್ದವು", transliteration: "eddhavu", meaning: "were there (neutral plural)", pos: "Verb" }
    ]
  },
  {
    id: 13,
    title: "The Happy Forest",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ಕಾಡು ಇದೆ.",
        transliteration: "Ondhu kaadu idhae.",
        english: "There is a forest."
      },
      {
        kannada: "ಆ ಕಾಡಿನಲ್ಲಿ ತುಂಬಾ ಪ್ರಾಣಿಗಳು ಇವೆ.",
        transliteration: "aa kaadinalli thumbaa praanigaLU evae.",
        english: "In that forest, there are many animals."
      },
      {
        kannada: "ಎಲ್ಲಾ ಪ್ರಾಣಿಗಳು ಸಂತೋಷವಾಗಿ ಜೀವಿಸುತ್ತಿವೆ.",
        transliteration: "aellaa praanigaLU santhoshavaagi jeevisutthivae.",
        english: "All animals are living happily."
      }
    ],
    vocab: [
      { word: "ಕಾಡು", transliteration: "kaadu", meaning: "Forest / Jungle", pos: "Noun" },
      { word: "ಕಾಡಿನಲ್ಲಿ", transliteration: "kaadinalli", meaning: "in the forest", pos: "Noun (Locative)" },
      { word: "ಪ್ರಾಣಿಗಳು", transliteration: "praanigaLU", meaning: "Animals", pos: "Noun (Plural)" },
      { word: "ಎಲ್ಲಾ", transliteration: "aellaa", meaning: "All", pos: "Adjective" },
      { word: "ಸಂತೋಷವಾಗಿ", transliteration: "santhoshavaagi", meaning: "Happily", pos: "Adverb" },
      { word: "ಜೀವಿಸುತ್ತಿವೆ", transliteration: "jeevisutthivae", meaning: "are living (neutral/plural)", pos: "Verb" }
    ]
  },
  {
    id: 14,
    title: "Sharing Pencils",
    category: "School & Home",
    lines: [
      {
        kannada: "ನನ್ನ ಬಳಿ ನಾಲ್ಕು pencil ಗಳು ಇವೆ.",
        transliteration: "Nanna baLI naalku pencilgaLU ivae.",
        english: "I have 4 pencils."
      },
      {
        kannada: "ನನ್ನ friend pencil ಕೇಳಿದ.",
        transliteration: "Nanna friend pencil KaELidha.",
        english: "My friend asked for a pencil."
      },
      {
        kannada: "ನಾನು ನನ್ನ friend ಗೆ ಒಂದು pencil ಕೊಟ್ಟೆ.",
        transliteration: "Naanu nanna friend gae ondhu pencil kottae.",
        english: "I gave 1 pencil to my friend."
      }
    ],
    vocab: [
      { word: "ನಾಲ್ಕು", transliteration: "naalku", meaning: "Four", pos: "Numeral" },
      { word: "ಗೆ", transliteration: "gae", meaning: "to (suffix)", pos: "Suffix" }
    ]
  },
  {
    id: 15,
    title: "Math Homework Helper",
    category: "School & Home",
    lines: [
      {
        kannada: "ನನಗೆ Math Homework ಇದೆ.",
        transliteration: "Nanagae math homework idhae.",
        english: "I have Math Homework."
      },
      {
        kannada: "ನನಗೆ ಹೇಗೆ ಮಾಡುವುದು ಎಂದು ಗೊತ್ತಿಲ್ಲ.",
        transliteration: "nanagae haegae maaduvudhu aendhu gothilla.",
        english: "I don't know how to do it."
      },
      {
        kannada: "ಅಮ್ಮ ನನಗೆ help ಮಾಡಿದರು.",
        transliteration: "amma nanagae help maadidharu.",
        english: "Amma helped me."
      }
    ],
    vocab: [
      { word: "ಹೇಗೆ", transliteration: "haegae", meaning: "How", pos: "Adverb" },
      { word: "ಮಾಡುವುದು", transliteration: "maaduvudhu", meaning: "to do / doing", pos: "Verb (Gerund)" },
      { word: "ಗೊತ್ತಿಲ್ಲ", transliteration: "gothilla", meaning: "do not know", pos: "Verb" },
      { word: "ಮಾಡಿದರು", transliteration: "maadidharu", meaning: "did (respectful)", pos: "Verb" }
    ]
  },
  {
    id: 16,
    title: "Playing Basketball",
    category: "Activities",
    lines: [
      {
        kannada: "ನಿನ್ನೆ ನಾನು Basket ball ಆಡಲು ಹೋದೆ.",
        transliteration: "Ninnae naanu basket ball aadalu hoodhae.",
        english: "Yesterday I went to play Basketball."
      },
      {
        kannada: "ರಾಜು ಮತ್ತು ಹಂಸ ಕೂಡ ನನ್ನ ಜೊತೆ ಬಂದರು.",
        transliteration: "Raaju matthu Hamsa kUda nanna jothae bandharu.",
        english: "Raju and Hamsa also came with me."
      },
      {
        kannada: "ನಾವು 4 hours ಆಟ ಆಡಿದೆವು.",
        transliteration: "naavu 4 hours aata aadidhaevu.",
        english: "We played for 4 hours."
      }
    ],
    vocab: [
      { word: "ನಿನ್ನೆ", transliteration: "Ninnae", meaning: "Yesterday", pos: "Noun / Adverb" },
      { word: "ஆಡಲು", transliteration: "aadalu", meaning: "to play", pos: "Verb (Infinitive)" },
      { word: "ಕೂಡ", transliteration: "kUda", meaning: "also / along with", pos: "Conjunction" },
      { word: "ಜೊತೆ", transliteration: "jothae", meaning: "with / company", pos: "Postposition" },
      { word: "ಬಂದರು", transliteration: "bandharu", meaning: "came (plural/respectful)", pos: "Verb" },
      { word: "ನಾವು", transliteration: "naavu", meaning: "We", pos: "Pronoun" }
    ]
  },
  {
    id: 17,
    title: "Hungry for Snacks",
    category: "Family & Friends",
    lines: [
      {
        kannada: "ನನಗೆ ತುಂಬಾ ಹಸಿವಾಗಿತ್ತು.",
        transliteration: "Nanagae thumbaa hasivaagitthu.",
        english: "I was very hungry."
      },
      {
        kannada: "ನಾನು ಅಪ್ಪನಿಗೆ ಹೇಳಿದೆ.",
        transliteration: "naanu appanigae haeLidhae.",
        english: "I told Appa."
      },
      {
        kannada: "ಅಪ್ಪ ನನಗೆ snacks ಕೊಟ್ಟರು.",
        transliteration: "Appa nanagae snacks kottaaru.",
        english: "Appa gave me snacks."
      }
    ],
    vocab: [
      { word: "ಹಸಿವಾಗಿತ್ತು", transliteration: "hasivaagitthu", meaning: "was hungry", pos: "Verb" },
      { word: "ಅಪ್ಪನಿಗೆ", transliteration: "appanigae", meaning: "to father", pos: "Noun (Dative)" },
      { word: "ಹೇಳಿದೆ", transliteration: "haeLidhae", meaning: "I said", pos: "Verb" },
      { word: "ಅಪ್ಪ", transliteration: "Appa", meaning: "Father", pos: "Noun" },
      { word: "ಕೊಟ್ಟರು", transliteration: "kottaaru / kottaaru", meaning: "gave (respectful)", pos: "Verb" }
    ]
  },
  {
    id: 18,
    title: "Trip to the Beach",
    category: "Activities",
    lines: [
      {
        kannada: "ನಾನು Beach ಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.",
        transliteration: "Naanu beach gae hogutthidhaEnae.",
        english: "I'm going to the beach."
      },
      {
        kannada: "ಈ trip ಗಾಗಿ ಅಪ್ಪ ನನಗೆ ಹೊಸ Bag ತಂದು ಕೊಟ್ಟರು.",
        transliteration: "Ee trip gaagi appa nanagae hosa bag thandhu kottaru.",
        english: "Appa got me a new bag for the trip."
      },
      {
        kannada: "ಅಮ್ಮ Dress Pack ಮಾಡಿದರು.",
        transliteration: "Amma dress pack maadidharu.",
        english: "Amma packed the dress."
      }
    ],
    vocab: [
      { word: "ಹೋಗುತ್ತಿದ್ದೇನೆ", transliteration: "hogutthidhaEnae", meaning: "I am going", pos: "Verb" },
      { word: "ಗಾಗಿ", transliteration: "gaagi", meaning: "for (suffix)", pos: "Suffix" },
      { word: "ಹೊಸ", transliteration: "hosa", meaning: "New", pos: "Adjective" },
      { word: "ತಂದು", transliteration: "thandhu", meaning: "having brought", pos: "Verb (Participle)" },
      { word: "ಮಾಡಿದರು", transliteration: "maadidharu", meaning: "did (respectful)", pos: "Verb" }
    ]
  },
  {
    id: 19,
    title: "Playing in the Rain",
    category: "Activities",
    lines: [
      {
        kannada: "ನಿನ್ನೆ ಮಳೆ ಬಂದಿತು.",
        transliteration: "Ninnae maLAE bandhithu.",
        english: "It rained yesterday."
      },
      {
        kannada: "ನಾನು ಮಳೆಯಲ್ಲಿ ಆಟ ಆಡಿದೆ.",
        transliteration: "naanu maLAEyalli aata aadidhae.",
        english: "I played in rain."
      },
      {
        kannada: "ಅದು ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು.",
        transliteration: "adhu thumbaa chaennaagitthu.",
        english: "It was very good."
      }
    ],
    vocab: [
      { word: "ಮಳೆ", transliteration: "maLAE", meaning: "Rain", pos: "Noun" },
      { word: "ಬಂದಿತು", transliteration: "bandhithu", meaning: "came", pos: "Verb" },
      { word: "ಮಳೆಯಲ್ಲಿ", transliteration: "maLAEyalli", meaning: "in the rain", pos: "Noun (Locative)" },
      { word: "ಚೆನ್ನಾಗಿತ್ತು", transliteration: "chaennaagitthu", meaning: "was good / nice", pos: "Verb" }
    ]
  },
  {
    id: 20,
    title: "Dog in the Swimming Pool",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ನಾಯಿ swimming pool ಗೆ ಬಂದಿತು.",
        transliteration: "Ondhu naayi swimming pool gae bandhithu.",
        english: "A dog came to Swimming pool."
      },
      {
        kannada: "ಅದು swimming pool ನಲ್ಲಿ ಆಟ ಆಡಿತು.",
        transliteration: "adhu swimming pool nalli aata aadithu.",
        english: "It played in Swimming pool."
      },
      {
        kannada: "ಅದು ವಾಪಸ್ ಹೋಯಿತು.",
        transliteration: "adhu vaapas hooythu.",
        english: "It went back."
      }
    ],
    vocab: [
      { word: "ವಾಪಸ್", transliteration: "vaapas", meaning: "Back / Return", pos: "Adverb" }
    ]
  },
  {
    id: 21,
    title: "Baking a Cake",
    category: "Activities",
    lines: [
      {
        kannada: "ನಾಳೆ ಒಂದು ಗುಬ್ಬಚ್ಚಿ, ಕಾಗೆಯ ಮನೆಗೆ ಹೋಗುವುದು.",
        transliteration: "NaaLAE ondhu gubbacchi, kaagaeya manaegae hooguvudhu.",
        english: "A sparrow will go to crow's home tomorrow."
      },
      {
        kannada: "ಅವರು Cake bake ಮಾಡುವರು.",
        transliteration: "avaru cake bake maaduvaru.",
        english: "They will bake cake."
      },
      {
        kannada: "ಆಮೇಲೆ ಅವರು ನವಿಲಿನ ಮನೆಗೆ ಹೋಗುವರು.",
        transliteration: "aamaelae avaru navilina manaegae hooguvaru.",
        english: "Later they will go to Peacock's home."
      }
    ],
    vocab: [
      { word: "ನಾಳೆ", transliteration: "NaaLAE", meaning: "Tomorrow", pos: "Noun / Adverb" },
      { word: "ಗುಬ್ಬಚ್ಚಿ", transliteration: "gubbacchi", meaning: "Sparrow", pos: "Noun" },
      { word: "ಕಾಗೆಯ", transliteration: "kaagaeya", meaning: "of crow", pos: "Noun (Genitive)" },
      { word: "ಮನೆಗೆ", transliteration: "manaegae", meaning: "to house", pos: "Noun (Dative)" },
      { word: "ಹೋಗುವುದು", transliteration: "hooguvudhu", meaning: "going / will go", pos: "Verb" },
      { word: "ಮಾಡುವರು", transliteration: "maaduvaru", meaning: "they will do", pos: "Verb (Future)" },
      { word: "ಆಮೇಲೆ", transliteration: "aamaelae", meaning: "Afterwards / Then", pos: "Adverb" },
      { word: "ನವಿಲಿನ", transliteration: "navilina", meaning: "of Peacock", pos: "Noun (Genitive)" },
      { word: "ಹೋಗುವರು", transliteration: "hooguvaru", meaning: "they will go", pos: "Verb (Future)" }
    ]
  },
  {
    id: 22,
    title: "The Hungry Mouse",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ಕಾಡಿನಲ್ಲಿ ಒಂದು ಇಲಿ ಇತ್ತು.",
        transliteration: "Ondhu kaadinalli ondu Eli itthu.",
        english: "There was a mouse in a forest."
      },
      {
        kannada: "ಅದು ಒಬ್ಬಂಟಿ ಆಗಿತ್ತು.",
        transliteration: "adhu obbanti aagitthu.",
        english: "It was alone."
      },
      {
        kannada: "ಅದಕ್ಕೆ ಹಸಿವಾಗಿತ್ತು.",
        transliteration: "adakkae hasivaagitthu.",
        english: "It was hungry."
      },
      {
        kannada: "ಅದು ಊಟ ಹುಡುಕಲು ಶುರು ಮಾಡಿತು.",
        transliteration: "adhu Uta hudukalu shuru maadithu.",
        english: "It started searching for food."
      }
    ],
    vocab: [
      { word: "ಇಲಿ", transliteration: "Eli", meaning: "Mouse / Rat", pos: "Noun" },
      { word: "ಒಬ್ಬಂಟಿ", transliteration: "obbanti", meaning: "Alone / Lonely", pos: "Adjective" },
      { word: "ಆಗಿತ್ತು", transliteration: "aagitthu", meaning: "had become", pos: "Verb" },
      { word: "ಅದಕ್ಕೆ", transliteration: "adakkae", meaning: "To it", pos: "Pronoun (Dative)" },
      { word: "ಊಟ", transliteration: "Uta", meaning: "Food / Meal", pos: "Noun" },
      { word: "ಹುಡುಕಲು", transliteration: "hudukalu", meaning: "to search", pos: "Verb (Infinitive)" },
      { word: "ಶುರು", transliteration: "shuru", meaning: "Start / Begin", pos: "Noun" },
      { word: "ಮಾಡಿತು", transliteration: "maadithu", meaning: "did", pos: "Verb" }
    ]
  },
  {
    id: 23,
    title: "Best Friends and Ice Cream",
    category: "Family & Friends",
    lines: [
      {
        kannada: "ಸುಧಾ ನನ್ನ best friend.",
        transliteration: "Sudha nanna best friend.",
        english: "Sudha is my Best friend."
      },
      {
        kannada: "ಪ್ರತಿದಿನ ನಾವು ಒಟ್ಟಿಗೆ ಆಟ ಆಡುತ್ತೇವೆ.",
        transliteration: "Prathidhina naavu ottigae aata aadutthaEvae.",
        english: "Everyday we play together."
      },
      {
        kannada: "ನಮಗೆ Ice-cream ಇಷ್ಟ.",
        transliteration: "namagae Ice-cream ishta.",
        english: "We like Ice cream."
      }
    ],
    vocab: [
      { word: "ಸುಧಾ", transliteration: "Sudha", meaning: "Sudha (Proper Name)", pos: "Noun" },
      { word: "ಪ್ರತಿದಿನ", transliteration: "Prathidhina", meaning: "Every day", pos: "Adverb" },
      { word: "ಆಡುತ್ತೇವೆ", transliteration: "aadutthaEvae", meaning: "we play", pos: "Verb" }
    ]
  },
  {
    id: 24,
    title: "Football Till 4 PM",
    category: "Activities",
    lines: [
      {
        kannada: "ರಹೀಮ್ football ಆಡುತ್ತಿದ್ದ.",
        transliteration: "Raheem football aaduttiddha.",
        english: "Raheem was playing football."
      },
      {
        kannada: "ಅವನ friend ರಾಜು ಸಹ join ಆದ.",
        transliteration: "avana friend Raaju saha join aadha.",
        english: "His friend Raju also joined."
      },
      {
        kannada: "ಅವರು 4pm ವರೆಗೂ ಆಟ ಆಡಿದರು.",
        transliteration: "avaru 4pm varaegU aata aadidharu.",
        english: "They played till 4pm."
      }
    ],
    vocab: [
      { word: "ಆಡುತ್ತಿದ್ದ", transliteration: "aaduttiddha", meaning: "was playing (male)", pos: "Verb" },
      { word: "ಸಹ", transliteration: "saha", meaning: "Also / Too", pos: "Conjunction" },
      { word: "ಆದ", transliteration: "aadha", meaning: "became", pos: "Verb" },
      { word: "ವರೆಗೂ", transliteration: "varaegU", meaning: "Until / Up to", pos: "Suffix" }
    ]
  },
  {
    id: 25,
    title: "I Love Colouring",
    category: "Activities",
    lines: [
      {
        kannada: "ನಮಗೆ colouring ಇಷ್ಟ.",
        transliteration: "Nanagae colouring ishta.",
        english: "I love colouring."
      },
      {
        kannada: "ನನ್ನ favourite colour Red.",
        transliteration: "Nanna favourite colour Red.",
        english: "Red is my favourite colour."
      },
      {
        kannada: "ನಾನು ಇವತ್ತು ಹೊಸ colouring book buy ಮಾಡುತ್ತೇನೆ.",
        transliteration: "Naanu evatthu hosa colouring book buy maadutthaenae.",
        english: "I will buy a new colouring book today."
      }
    ],
    vocab: [
      { word: "ಇವತ್ತು", transliteration: "evatthu", meaning: "Today", pos: "Noun / Adverb" },
      { word: "ಮಾಡುತ್ತೇನೆ", transliteration: "maadutthaenae", meaning: "I will do", pos: "Verb (Future)" }
    ]
  },
  {
    id: 26,
    title: "The Crow on the Balcony",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ದಿನ, ಒಂದು ಕಾಗೆ ನಮ್ಮ ಮನೆಗೆ ಬಂದಿತು.",
        transliteration: "Ondhu dhina ondhu kaagae namma manaegae bandhithu.",
        english: "One day, a crow came to my home."
      },
      {
        kannada: "ಕಾಗೆ ನಮ್ಮ balcony ಯಲ್ಲಿ ಕುಳಿತುಕೊಂಡಿತು.",
        transliteration: "Kaagae namma balcony yalli kuLithukondithu.",
        english: "Crow sat in our balcony."
      },
      {
        kannada: "ನಾನು ಅದಕ್ಕೆ ಊಟ ಕೊಟ್ಟೆ.",
        transliteration: "naanu adhakkae Uta kottae.",
        english: "I gave food to it."
      }
    ],
    vocab: [
      { word: "ದಿನ", transliteration: "dhina", meaning: "Day", pos: "Noun" },
      { word: "ಕಾಗೆ", transliteration: "kaagae", meaning: "Crow", pos: "Noun" },
      { word: "ನಮ್ಮ", transliteration: "namma", meaning: "Our", pos: "Pronoun (Possessive)" },
      { word: "ಕುಳಿತುಕೊಂಡಿತು", transliteration: "kuLithukondithu", meaning: "sat down", pos: "Verb" },
      { word: "ಅದಕ್ಕೆ", transliteration: "adhakkae", meaning: "to it", pos: "Pronoun" },
      { word: "ಕೊಟ್ಟೆ", transliteration: "kottae", meaning: "I gave", pos: "Verb" }
    ]
  },
  {
    id: 27,
    title: "The Huge Snake in the Forest",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ದೊಡ್ಡ ಕಾಡು ಇತ್ತು.",
        transliteration: "Ondhu dodda kaadu itthu.",
        english: "There was a big forest."
      },
      {
        kannada: "ಆ ಕಾಡಿನಲ್ಲಿ ಒಂದು ದೊಡ್ಡ ಹಾವು ಇತ್ತು.",
        transliteration: "aa kaadinalli ondhu dodda haavu itthu.",
        english: "In that forest, there was a huge snake."
      },
      {
        kannada: "ಆದ್ದರಿಂದ ಆ ಕಾಡಿಗೆ ಯಾರೂ ಹೋಗುವುದಿಲ್ಲ.",
        transliteration: "aaddharindha aa kaadigae yaarU hooguvudhilla.",
        english: "So no one goes to that forest."
      }
    ],
    vocab: [
      { word: "ದೊಡ್ಡ", transliteration: "dodda", meaning: "Big / Large", pos: "Adjective" },
      { word: "ಹಾವು", transliteration: "haavu", meaning: "Snake", pos: "Noun" },
      { word: "ಆದ್ದರಿಂದ", transliteration: "aaddharindha", meaning: "Therefore / So", pos: "Conjunction" },
      { word: "ಯಾರೂ", transliteration: "yaarU", meaning: "Anyone (negative context: no one)", pos: "Pronoun" },
      { word: "ಹೋಗುವುದಿಲ್ಲ", transliteration: "hooguvudhilla", meaning: "does not go", pos: "Verb (Negative)" }
    ]
  },
  {
    id: 28,
    title: "The Hungry Fox",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ಕಾಡಿನಲ್ಲಿ ಒಂದು ನರಿ ಇತ್ತು.",
        transliteration: "Ondhu kaadinalli ondhu nari itthu.",
        english: "There was a fox in a jungle."
      },
      {
        kannada: "ನರಿ ಕಾಡಿನಲ್ಲಿ ಊಟ ಹುಡುಕುತ್ತಿತ್ತು.",
        transliteration: "nari kaadinalli Uta hudukutthitthu.",
        english: "Fox was searching food in the jungle."
      },
      {
        kannada: "ಅದಕ್ಕೆ ಊಟ ಸಿಗಲಿಲ್ಲ.",
        transliteration: "adhakkae Uta sigalilla.",
        english: "It didn't find food."
      }
    ],
    vocab: [
      { word: "ನರಿ", transliteration: "nari", meaning: "Fox", pos: "Noun" },
      { word: "ಹುಡುಕುತ್ತಿತ್ತು", transliteration: "hudukutthitthu", meaning: "was searching", pos: "Verb" },
      { word: "ಸಿಗಲಿಲ್ಲ", transliteration: "sigalilla", meaning: "was not obtained / did not find", pos: "Verb" }
    ]
  },
  {
    id: 29,
    title: "The Playful Pig",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ಹಂದಿ ಅದರ friends ಜೊತೆ ಆಟ ಆಡುತ್ತಿತ್ತು.",
        transliteration: "Ondhu handhi adhara friends jothae aata aadutthitthu.",
        english: "A pig was playing with its friends."
      },
      {
        kannada: "ಅವರು Football, Cricket, Hockey ಆಡಿದರು.",
        transliteration: "Avaru Football, Cricket, Hockey aadidharu.",
        english: "They played Football, Cricket and Hockey."
      },
      {
        kannada: "ಆಟ ಆಡಿದ ಮೇಲೆ, ಅವರು Ice cream ತಿನ್ನಲು ಹೋದರು.",
        transliteration: "Aata aadidha maelae avaru Ice cream thinnalu hoodharu.",
        english: "After playing, they went to eat Ice Cream."
      }
    ],
    vocab: [
      { word: "ಹಂದಿ", transliteration: "handhi", meaning: "Pig", pos: "Noun" },
      { word: "ಅದರ", transliteration: "adhara", meaning: "its", pos: "Pronoun (Possessive)" },
      { word: "ಆಡುತ್ತಿತ್ತು", transliteration: "aadutthitthu", meaning: "was playing (neutral singular)", pos: "Verb" },
      { word: "ಆಡಿದರು", transliteration: "aadidharu", meaning: "they played", pos: "Verb" },
      { word: "ಮೇಲೆ", transliteration: "maelae", meaning: "after (time context)", pos: "Postposition" },
      { word: "ತಿನ್ನಲು", transliteration: "thinnalu", meaning: "to eat", pos: "Verb (Infinitive)" },
      { word: "ಹೋದರು", transliteration: "hoodharu", meaning: "they went", pos: "Verb" }
    ]
  },
  {
    id: 30,
    title: "Fishes in the Pond",
    category: "Animals",
    lines: [
      {
        kannada: "ಒಂದು ಚಿಕ್ಕ pond ಇದೆ.",
        transliteration: "Ondhu chikka pond edhae.",
        english: "There is a small pond."
      },
      {
        kannada: "Pond ತುಂಬಾ ಸುಂದರವಾಗಿದೆ.",
        transliteration: "pond thumbaa sundharavaagidhae.",
        english: "The pond is very beautiful."
      },
      {
        kannada: "Pond ಅಲ್ಲಿ ತುಂಬಾ ಮೀನುಗಳು ಇವೆ.",
        transliteration: "pond alli thumbaa meenugaLU evae.",
        english: "There are many fishes in the pond."
      }
    ],
    vocab: [
      { word: "ಚಿಕ್ಕ", transliteration: "chikka", meaning: "Small / Tiny", pos: "Adjective" },
      { word: "ಸುಂದರವಾಗಿದೆ", transliteration: "sundharavaagidhae", meaning: "is beautiful", pos: "Verb / Adj" },
      { word: "ಅಲ್ಲಿ", transliteration: "alli", meaning: "There / Suffix for inside", pos: "Locative" },
      { word: "ಮೀನುಗಳು", transliteration: "meenugaLU", meaning: "Fishes", pos: "Noun (Plural)" }
    ]
  },
  {
    id: 31,
    title: "Raining in the Playground",
    category: "Activities",
    lines: [
      {
        kannada: "ನಾವು ground ಗೆ ಹೋದೆವು.",
        transliteration: "Naavu ground gae hoodhaevu.",
        english: "We went to the ground."
      },
      {
        kannada: "ನಾವು ಆಟ ಆಡಲು ಶುರು ಮಾಡಿದೆವು.",
        transliteration: "naavu aata aadalu shuru maadidhaevu.",
        english: "We started playing."
      },
      {
        kannada: "ಆದರೆ ಮಳೆ ಶುರು ಆಯಿತು.",
        transliteration: "aadharae maLAE shuru aayithu.",
        english: "But it started raining."
      }
    ],
    vocab: [
      { word: "ಆದರೆ", transliteration: "aadharae", meaning: "But / However", pos: "Conjunction" },
      { word: "ಆಯಿತು", transliteration: "aayithu", meaning: "became / happened", pos: "Verb" }
    ]
  },
  {
    id: 32,
    title: "My Beautiful School",
    category: "School & Home",
    lines: [
      {
        kannada: "ನನಗೆ ನನ್ನ school ಇಷ್ಟ.",
        transliteration: "Nanagae nanna school ishta.",
        english: "I love my school."
      },
      {
        kannada: "ನನ್ನ school ಅಲ್ಲಿ ತುಂಬಾ ಮರಗಳು ಇವೆ.",
        transliteration: "nanna school alli thumbaa maragaLU evae.",
        english: "There are so many trees in my school."
      },
      {
        kannada: "ಒಂದು ದೊಡ್ಡ playground ಇದೆ.",
        transliteration: "ondhu dodda playground idhae.",
        english: "There is a big playground."
      }
    ],
    vocab: [
      { word: "ಮರಗಳು", transliteration: "maragaLU", meaning: "Trees", pos: "Noun (Plural)" }
    ]
  }
];

export default stories;
