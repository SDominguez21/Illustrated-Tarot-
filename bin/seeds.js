const mongoose = require("mongoose");
const Card = require("../models/Card");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  // .connect("mongodb://localhost/tarot", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// let cards = [];

// for (let i = 0; i < 78; i++) {
//   let category = "";
//   let suit = "";

//   if (i < 56) {
//     category = "Minor Arcana";
//   } else {
//     category = "Major Arcana";
//   }

//   if (i < 14) {
//     suit = "Wands";
//   } else if (i < 28) {
//     suit = "Pentacles";
//   } else if (i < 42) {
//     suit = "Swords";
//   } else if (i < 56) {
//     suit = "Cups";
//   } else {
//     suit = null;
//   }

//   let newcard = {
//     name: `Card${i}`,
//     category: category,
//     suit: suit,
//     keywords: "Bing bleep",
//     description: "A whole lotta test",
//     img:
//       "https://cdn2.vectorstock.com/i/1000x1000/73/91/poker-playing-card-ace-heart-vector-8697391.png"
//   };

//   cards.push(newcard);
// }

const cards = [
  {
    name: "The Fool",
    category: "Major Arcana",
    suit: "0",
    keywords:
      "beginnings, innocence, spontaneity, a free spirit, unlimited potential",
    description:
      "Embrace the unknown. This is about new experiences, personal growth, development, and adventure.",
    img: "../images/zero.png"
  },
  {
    name: "The Magician",
    category: "Major Arcana",
    suit: "I",
    keywords: "manifestation, resourcefulness, power, inspired action",
    description:
      "Everything you need right now is at your fingertips. You have the spiritual, physical, mental and emotional resources to manifest your desires.",
    img: "../images/one.png"
  },
  {
    name: "The High Priestess",
    category: "Major Arcana",
    suit: "II",
    keywords:
      "intuition, sacred knowledge, divine feminine, the subconscious mind",
    description:
      "She teaches you that the world is not always as it seems and more profound influences are often at play. She asks you to look deep inside. All the answers are already inside of you.",
    img: "../images/two.png"
  },
  {
    name: "The Empress",
    category: "Major Arcana",
    suit: "III",
    keywords: "femininity, beauty, nature, nurturing, abundance",
    description:
      "The Empress calls on you to connect with your feminine energy. Create beauty, comfort, and pleasure.",
    img: "../images/three.png"
  },
  {
    name: "The Emperor",
    category: "Major Arcana",
    suit: "IV",
    keywords: "authority, establishment, structure, a father figure",
    description: "A fatherly role. Providing, defending, and protecting.",
    img: "../images/four.png"
  },
  {
    name: "The Hierophant",
    category: "Major Arcana",
    suit: "V",
    keywords:
      "spiritual wisdom, religious beliefs, conformity, tradition,institutions",
    description:
      "Having to do with study. Honing a craft or refining your knowledge.",
    img: "../images/five.png"
  },
  {
    name: "The Lovers",
    category: "Major Arcana",
    suit: "VI",
    keywords: "love, harmony, relationships, values alignment, choices",
    description:
      "A card of open communication and raw honesty. Deepening a connection with yourself or with another.",
    img: "../images/six.png"
  },
  {
    name: "The Chariot",
    category: "Major Arcana",
    suit: "VII",
    keywords: "control, willpower, success, action, determination",
    description:
      "A sign of encouragement. When you apply discipline, commitment and willpower to achieve your goals, you will succeed.",
    img: "../images/seven.png"
  },
  {
    name: "Justice",
    category: "Major Arcana",
    suit: "VIII",
    keywords: "justice, fairness, truth, cause and effect, law",
    description:
      "If you seek justice, then the Justice card is a positive sign that it will indeed be served. If you are being called to account for your actions, you will be judged accordingly.",
    img: "../images/eight.png"
  },
  {
    name: "The Hermit",
    category: "Major Arcana",
    suit: "IX",
    keywords: "soul-searching, introspection, being alone, inner guidance",
    description:
      "The Hermit invites you to retreat into your private world and experience a deep sense of seclusion and introspection.",
    img: "../images/nine.png"
  },
  {
    name: "The Wheel of Fortune",
    category: "Major Arcana",
    suit: "X",
    keywords: "good luck, karma, life cycles, destiny, a turning point",
    description:
      "What goes around comes around. Have faith that the Universe will take care of your situation in the best way possible.",
    img: "../images/ten.png"
  },
  {
    name: "Strength",
    category: "Major Arcana",
    suit: "XI",
    keywords: "strength, courage, persuasion, influence, compassion",
    description:
      "Speaks to the inner strength and the human spirit's ability to overcome any obstacle. You have great stamina and persistence, balanced with underlying patience and inner calm.",
    img: "../images/eleven.png"
  },
  {
    name: "The Hanged Man",
    category: "Major Arcana",
    suit: "XII",
    keywords: "pause, surrender, letting go, new perspectives",
    description:
      "You may be suspended in a state that's forcing you to adress some patterns or a situations before they expire.",
    img: "../images/twelve.png"
  },
  {
    name: "Death",
    category: "Major Arcana",
    suit: "XIII",
    keywords: "endings, change, transformation, transition",
    description:
      "Death card symbolises the end of a major phase or aspect of your life that you realise is no longer serving you. You must close one door to open another.",
    img: "../images/thirteen.png"
  },
  {
    name: "Temperance",
    category: "Major Arcana",
    suit: "XIV",
    keywords: "balance, moderation, patience, purpose",
    description:
      "You are being invited to stabilise your energy and to allow the life force to flow through you without force or resistance.",
    img: "../images/fourteen.png"
  },
  {
    name: "The Devil",
    category: "Major Arcana",
    suit: "XV",
    keywords:
      "shadow self, attachment, addiction, restriction, instant gratification",
    description:
      "The Devil card represents your shadow (or darker) side and the negative forces that constrain you and hold you back from being the best version of yourself.",
    img: "../images/fifteen.png"
  },
  {
    name: "The Tower",
    category: "Major Arcana",
    suit: "XVI",
    keywords: "sudden change, upheaval, chaos, revelation, awakening",
    description:
      "Expect the unexpected – massive change, upheaval, destruction and chaos.",
    img: "../images/sixteen.png"
  },
  {
    name: "The Star",
    category: "Major Arcana",
    suit: "XVII",
    keywords: "hope, faith, purpose, renewal, spirituality, gratitude",
    description:
      "You have endured many challenges and stripped yourself bare of any limiting beliefs that have previously held you back.",
    img: "../images/seventeen.png"
  },
  {
    name: "The Moon",
    category: "Major Arcana",
    suit: "XVIII",
    keywords: "illusion, fear, anxiety, subconscious, intuition, triggered",
    description:
      "The Moon represents your fears, illusions and uncertainty. Nothing is what it seems.",
    img: "../images/eighteen.png"
  },
  {
    name: "The Sun",
    category: "Major Arcana",
    suit: "XIX",
    keywords: "positivity, fun, warmth, success, vitality",
    description:
      "The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy.",
    img: "../images/nineteen.png"
  },
  {
    name: "Judgement",
    category: "Major Arcana",
    suit: "XX",
    keywords: "judgement, rebirth, inner calling, absolution",
    description:
      "The Judgement card often indicates that you need to make a life-changing decision. Tune in to a higher frequency. Let go of your old self and step into this newest version of who you really are.",
    img: "../images/twenty.png"
  },
  {
    name: "The World",
    category: "Major Arcana",
    suit: "XXI",
    keywords: "completion, integration, accomplishment, travel",
    description:
      "You are glowing with a sense of wholeness, achievement, fulfilment and completion. reflect on your journey, honour your achievements and tune into your spiritual lessons.",
    img: "../images/twenty-one.png"
  }
  // {
  //   name: "Ace of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "inspiration, opportunities, growth, potential",
  //   description:
  //     "The Ace of Wands signifies a spark of creative desire. It enncourages you to follow your heart and live your passion.",
  //   img: ""
  // },
  // {
  //   name: "II of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "planning, decisions, discovery ",
  //   description:
  //     "Creating space for your creativity, and defining what you would like to manifest.",
  //   img: ""
  // },
  // {
  //   name: "III of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "progress, expansion, opportunities",
  //   description:
  //     "Becoming more aware of the opportunities around you, and not feeling discouraged by past limitations. Learning to be patient and kind towards your goals and adapting.",
  //   img: ""
  // },
  // {
  //   name: "IV of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "homecoming, relaxation, inner peace, comfort",
  //   description:
  //     "Recognizing your achievemnts and being statisfied with how far you've come. A card of calm celebration.",
  //   img: ""
  // },
  // {
  //   name: "V of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "conflict, tension, aggressive energy",
  //   description:
  //     "Creative differences. A time of misunderstandings and miscommunicastions. Contradictions like feeling sensitive, all while being insensitive to others sensitivities! Take a moment to adress why you feel angry. Understand yourself, in order to understand other people.",
  //   img: ""
  // },
  // {
  //   name: "VI of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "validation, confidence boost, success",
  //   description:
  //     "Reaping the benefits of having trusted your instincts. Breaking free from old self assigned narratives, and feeling new confidence. Public recognition is nice, but your opinion of yourself is the most important!",
  //   img: ""
  // },
  // {
  //   name: "VII of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "challenged, bruised ego, competition",
  //   description:
  //     "If healthy competition gets unproductive, set boundaries and deflect negative vibes. Be weary of getting roped into ego traps!",
  //   img: ""
  // },
  // {
  //   name: "VIII of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "movement, flow, alignment",
  //   description:
  //     "Feeling the momentum of your drive. Following your instincts, and finding that some structure and discipline helps you get there. ",
  //   img: ""
  // },
  // {
  //   name: "IX of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "exhaustion, finishline",
  //   description:
  //     "Mental and physical exhaustion that comes with realizing a goal. In this state, beware of the energy vampires! Check in with yourself frequently and remember to breathe.",
  //   img: ""
  // },
  // {
  //   name: "X of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "prioritizing, lifestyle, responsibilities",
  //   description:
  //     "You acieved your goal, and beacuse of that new duties and responisibilities have risen. Time to reevaluate how you operate, and ajust to this new way.",
  //   img: ""
  // },
  // {
  //   name: "Page of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "ideas, free spirit, starting",
  //   description:
  //     "Unbridled creative restlessness. Ground your ideas in reality, and get the ball rolling. Baby steps.",
  //   img: ""
  // },
  // {
  //   name: "Knight of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "motivation, enthusiasm, passion",
  //   description:
  //     "Actively manifesting your vision. You are ready and able to tackle obstacles that come your way, becasue your passion burns so strongly.",
  //   img: ""
  // },
  // {
  //   name: "Queen of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "independence, determination, law of attraction, self-aware",
  //   description:
  //     "Positive energy is radiating off of you! Don't be afraid of your power.",
  //   img: ""
  // },
  // {
  //   name: "King of Wands",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "leader, entrepreneur, charisma",
  //   description:
  //     "You have a mature understanding of your purpose. A reminder to be mindful about your intentions.",
  //   img: ""
  // },
  // {
  //   name: "Ace of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "Mental clarity, breakthroughs",
  //   description:
  //     "You have a new clarity on a situation. You're mind is still and sharper than ever.",
  //   img: ""
  // },
  // {
  //   name: "II of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "avoidance, an impasse, difficult decisions",
  //   description:
  //     "An inability to see the problem nor the solution clearly. Weigh and meditate on both sides. ",
  //   img: ""
  // },
  // {
  //   name: "III of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "heartbreak, emotional pain, sorrow, grief, hurt",
  //   description:
  //     "Feeling deep visceral pangs of pain. You can conquer this – all it takes is faith, self-love, forgiveness and time",
  //   img: ""
  // },
  // {
  //   name: "IV of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "rest, relaxation, recuperation, meditation, contemplation",
  //   description:
  //     "Recharge your energy before the next phase begins. Stillness and rest is necessary for growth.",
  //   img: ""
  // },
  // {
  //   name: "V of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "conflict, disagreements, defeat",
  //   description:
  //     "Pick your battles. Protect your vitality, and reflect on the adverse reactions you may had to conflict in the past. Why have left you feeling bad?",
  //   img: ""
  // },
  // {
  //   name: "VI of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "transition, change, rite of passage, releasing baggage",
  //   description:
  //     "You're replacing the things that are holding you back with a renewed acceptance of change.",
  //   img: ""
  // },
  // {
  //   name: "VII of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords:
  //     "betrayal, deception, getting away with something, acting strategically",
  //   description:
  //     "A card relating to deception. Are you playing someone or is someone playing you? This situation is not working for you anymore.",
  //   img: ""
  // },
  // {
  //   name: "VIII of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords:
  //     "negative thoughts, self-imposed restriction, imprisonment, victim mentality",
  //   description:
  //     "You feel trapped and restricted by your circumstances. Please, drop what does not serve you. ",
  //   img: ""
  // },
  // {
  //   name: "IX of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "anxiety, worry, fear, depression, nightmares",
  //   description:
  //     "You are being consumed by darkness. Identify the negative cycles in your life, and ask for help.",
  //   img: ""
  // },
  // {
  //   name: "X of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "painful endings, deep wounds, betrayal, loss, crisis",
  //   description:
  //     "A painful yet inevitable ending. Reflect upon what happened to you and why, and what you can learn from the experience.",
  //   img: ""
  // },
  // {
  //   name: "Page of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords:
  //     "new ideas, curiosity, thirst for knowledge, new ways of communicating",
  //   description:
  //     "You are exploring a different way of communicating your ideas and opinions and expressing yourself.",
  //   img: ""
  // },
  // {
  //   name: "Knight of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "ambitious, driven, fast-thinking",
  //   description:
  //     "You're diving right in! Being assertive and taking initiative. Obviously, be careful. Reasearch and plan a little.",
  //   img: ""
  // },
  // {
  //   name: "Queen of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords:
  //     "independent, unbiased judgement, clear boundaries, direct communication",
  //   description:
  //     "Combines mental clarity and intellectual power. Leading from the head and not the heart.",
  //   img: ""
  // },
  // {
  //   name: "King of Swords",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "mental clarity, intellectual power, authority, truth",
  //   description:
  //     "You are in your power, ruling from a place of authority and respect. You stand firm in your truth and express yourself with deep conviction.",
  //   img: ""
  // },
  // {
  //   name: "Ace of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "manifestation, abundance",
  //   description:
  //     "New beginnings in the material world: finances, wealth, career, physical health and manifestation of your goals.",
  //   img: ""
  // },
  // {
  //   name: "II of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords:
  //     "multiple priorities, time management, prioritisation, adaptability",
  //   description:
  //     "Manage your time and your priorities carefully. It's all about balance.",
  //   img: ""
  // },
  // {
  //   name: "III of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "teamwork, collaboration, learning, implementation.",
  //   description:
  //     "A sign to collaborate with others, creating synergies to achieve big results.",
  //   img: ""
  // },
  // {
  //   name: "IV of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "saving money, security, conservatism, scarcity, control",
  //   description:
  //     "You may be placing too much value on money and material possessions. Take a moment to reevaluate what's truly important to you.",
  //   img: ""
  // },
  // {
  //   name: "V of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "financial loss, poverty, isolation, worry",
  //   description:
  //     "You are sabotaging your ability to create abundance because you only focus on what you lack. Shift your energy and focus on what you do have.",
  //   img: ""
  // },
  // {
  //   name: "VI of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "giving, receiving, sharing wealth, generosity, charity",
  //   description:
  //     "A card representing financial harmony. The amounts flowing in and out are in balance, and a sense of gratitude is present.",
  //   img: ""
  // },
  // {
  //   name: "VII of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "long-term view, sustainable results, perseverance, investment",
  //   description:
  //     "Step back from the day-to-day operations and look at the bigger picture.",
  //   img: ""
  // },
  // {
  //   name: "VIII of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "apprenticeship, repetitive tasks, mastery, skill development",
  //   description: "",
  //   img: ""
  // },
  // {
  //   name: "IX of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "",
  //   description:
  //     "You are working hard to improve your skills and become a master at what you do.",
  //   img: ""
  // },
  // {
  //   name: "X of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords:
  //     "wealth, financial security, family, long-term success, contribution",
  //   description:
  //     "You are surrounded by wealth and blessed with financial abundance.",
  //   img: ""
  // },
  // {
  //   name: "Page of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "manifestation, financial opportunity, skill development",
  //   description:
  //     "You welcome new opportunities to your material life – a new job or a wish to discover how to turn your dreams into reality.",
  //   img: ""
  // },
  // {
  //   name: "Knight of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "hard work, productivity, routine, conservatism",
  //   description: "You are working methodically towards your goals.",
  //   img: ""
  // },
  // {
  //   name: "Queen of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "nurturing, practical, providing financially, a working parent",
  //   description:
  //     "You are embodying the ultimate working parent archetype. You work hard so you can provide for yourself and still nurture others.",
  //   img: ""
  // },
  // {
  //   name: "King of Pentacles",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "wealth, business, leadership, security, discipline, abundance",
  //   description:
  //     "You can translate your vision into something tangible, practical, and often very lucrative.",
  //   img: ""
  // },
  // {
  //   name: "Ace of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "love, new relationships, compassion, creativity",
  //   description:
  //     "You receive love, you give love, you ARE love. Your heart overflows.",
  //   img: ""
  // },
  // {
  //   name: "II of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "unified love, partnership, mutual attraction",
  //   description:
  //     "With this card, you are creating deep connections and partnerships, based on shared values, compassion, and unconditional love.",
  //   img: ""
  // },
  // {
  //   name: "III of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "celebration, friendship, creativity, collaborations",
  //   description:
  //     "You are encouraged to gather with your closest friends and have a good time together, talking, laughing, sharing and creating.",
  //   img: ""
  // },
  // {
  //   name: "IV of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "meditation, contemplation, apathy, reevaluation, stability",
  //   description:
  //     "Use your discernment to decide on what is truly important to you, and don't be afraid to decline new projects that don't align with your future path.",
  //   img: ""
  // },
  // {
  //   name: "V of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "regret, failure, disappointment, pessimism",
  //   description:
  //     "You’re stuck in the past. Forgiveness is vital, both of yourself and others.",
  //   img: ""
  // },
  // {
  //   name: "VI of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "revisiting the past, childhood memories, innocence, joy",
  //   description: "A nostalgic feeling. Connecting to your inner child.",
  //   img: ""
  // },
  // {
  //   name: "VII of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "opportunities, choices, wishful thinking, illusion",
  //   description:
  //     "A card of new opportunities, choices, and at times, illusion.",
  //   img: ""
  // },
  // {
  //   name: "VIII of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "disappointment, abandonment, withdrawal, escapism",
  //   description:
  //     "You may feel compelled to walk away from a disappointing situation",
  //   img: ""
  // },
  // {
  //   name: "IX of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "contentment, satisfaction, gratitude, wish come true",
  //   description:
  //     "You are basking in the abundance of life and experiencing your emotions with such intensity and pleasure.",
  //   img: ""
  // },
  // {
  //   name: "X of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "divine love, blissful relationships, harmony, alignment",
  //   description:
  //     "This card often appears when you are surrounded by your loved ones with whom you share a powerful and deep connection.",
  //   img: ""
  // },
  // {
  //   name: "Page of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords:
  //     "creative opportunities, intuitive messages, curiosity, possibility",
  //   description:
  //     "Be ready to dream the impossible dream, and explore the magic of your fullest potential, even if it seems out of reach.",
  //   img: ""
  // },
  // {
  //   name: "Knight of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "creativity, romance, charm, imagination, beauty",
  //   description: "You intuition guides you in everything you do.",
  //   img: ""
  // },
  // {
  //   name: "Queen of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "inner feelings, self-care, self-love, co-dependency",
  //   description:
  //     "You are highly intuitive, creative, and in flow with the surrounding energies.",
  //   img: ""
  // },
  // {
  //   name: "King of Cups",
  //   category: "Minor Arcana",
  //   suit: "Wands",
  //   keywords: "emotionally balanced, compassionate, diplomatic",
  //   description:
  //     "You have gained control of your feelings and can accept them without allowing them to get the better of you.",
  //   img: ""
  // },
]; //end

Card.create(cards);
