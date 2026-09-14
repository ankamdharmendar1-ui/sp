export interface WheelTemplate {
  slug: string
  category: string
  categoryName: string
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  defaultOptions: string[]
  faq: Array<{ question: string; answer: string }>
}

export const WHEEL_TEMPLATES: WheelTemplate[] = [
  // Education Category
  {
    slug: 'random-student-generator',
    category: 'education',
    categoryName: 'Education & Classroom',
    title: 'Random Student Name Generator Wheel',
    h1: 'Random Student Name Generator Wheel',
    metaTitle: 'Random Student Generator Wheel | Pick Students Fairly',
    metaDescription: 'Free random student picker wheel for teachers and classrooms. Spin to select students fairly for reading, questions, or group leaders.',
    defaultOptions: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6', 'Student 7', 'Student 8'],
    faq: [
      {
        question: 'How do teachers use the random student picker wheel?',
        answer: 'Teachers can paste their full class roster into the entry list, then spin the wheel to pick students at random for cold calling, group assignments, or line leaders.',
      },
      {
        question: 'Can I save my classroom student list?',
        answer: 'Yes! All student lists are automatically saved locally in your browser storage or shared via custom links.',
      },
    ],
  },
  {
    slug: 'classroom-group-picker',
    category: 'education',
    categoryName: 'Education & Classroom',
    title: 'Classroom Group & Team Picker Wheel',
    h1: 'Classroom Group & Team Picker Wheel',
    metaTitle: 'Classroom Group Picker Wheel | Create Fair Teams',
    metaDescription: 'Randomly assign students to classroom groups and teams with our free interactive spinning wheel.',
    defaultOptions: ['Group A', 'Group B', 'Group C', 'Group D', 'Team Red', 'Team Blue'],
    faq: [
      {
        question: 'Can I remove selected groups after spinning?',
        answer: 'Yes, enable "Remove winner after spin" to assign teams without repetition.',
      },
    ],
  },

  // Food & Lifestyle Category
  {
    slug: 'what-to-eat-wheel',
    category: 'food',
    categoryName: 'Food & Dining',
    title: 'What to Eat Decision Wheel',
    h1: 'What to Eat Decision Wheel',
    metaTitle: 'What to Eat Wheel | Random Food & Dinner Picker',
    metaDescription: 'Can\'t decide what to eat for lunch or dinner? Spin the random food picker wheel to choose pizza, sushi, tacos, burgers, or salads instantly.',
    defaultOptions: ['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Tacos', '🥗 Salad', '🍝 Pasta', '🍜 Ramen', '🥩 Steak'],
    faq: [
      {
        question: 'How does the food decision wheel work?',
        answer: 'Spin the wheel to get a completely unbiased meal recommendation when you or your group can\'t decide where to eat.',
      },
    ],
  },
  {
    slug: 'fast-food-picker',
    category: 'food',
    categoryName: 'Food & Dining',
    title: 'Fast Food Restaurant Picker Wheel',
    h1: 'Fast Food Restaurant Picker Wheel',
    metaTitle: 'Fast Food Picker Wheel | Random Fast Food Generator',
    metaDescription: 'Pick a random fast food spot for lunch or late night snacks. Includes McDonald\'s, Subway, Taco Bell, Wendy\'s and more.',
    defaultOptions: ['McDonald\'s', 'Subway', 'Taco Bell', 'Wendy\'s', 'Burger King', 'Chipotle', 'KFC', 'Domino\'s'],
    faq: [
      {
        question: 'Can I customize the restaurant options?',
        answer: 'Yes, you can edit or add your local favorite restaurants directly in the entry box.',
      },
    ],
  },

  // Gaming Category
  {
    slug: 'fortnite-drop-picker',
    category: 'gaming',
    categoryName: 'Gaming & Esports',
    title: 'Fortnite Random Drop Location Wheel',
    h1: 'Fortnite Random Drop Location Wheel',
    metaTitle: 'Fortnite Drop Picker Wheel | Random POI Landing Generator',
    metaDescription: 'Can\'t decide where to land in Fortnite? Spin the random POI drop picker wheel for intense battle royale landings with your squad.',
    defaultOptions: ['Reckless Railways', 'Snooty Steppes', 'Fencing Fields', 'Lavish Lair', 'Classy Courts', 'Pleasant Piazza', 'Ritzy Riviera', 'Ruined Reels'],
    faq: [
      {
        question: 'Is this drop generator updated for current Fortnite chapters?',
        answer: 'Yes! The POI landing spots are updated for active Fortnite battle royale maps.',
      },
    ],
  },
  {
    slug: 'apex-legends-picker',
    category: 'gaming',
    categoryName: 'Gaming & Esports',
    title: 'Apex Legends Character Picker Wheel',
    h1: 'Apex Legends Character Picker Wheel',
    metaTitle: 'Apex Legends Character Picker | Random Legend Generator',
    metaDescription: 'Randomly pick an Apex Legends character for your next match. Perfect for squad challenges and maining new legends.',
    defaultOptions: ['Wraith', 'Bloodhound', 'Pathfinder', 'Octane', 'Lifeline', 'Gibraltar', 'Bangalore', 'Horizon', 'Valkyrie', 'Revenant'],
    faq: [
      {
        question: 'Why use a random legend picker?',
        answer: 'It forces you to play new legends and keeps battle royale matches fresh and exciting.',
      },
    ],
  },

  // Party & Entertainment Category
  {
    slug: 'truth-or-dare-wheel',
    category: 'games',
    categoryName: 'Party & Games',
    title: 'Truth or Dare Game Wheel',
    h1: 'Truth or Dare Game Wheel',
    metaTitle: 'Truth or Dare Picker Wheel | Fun Party Game Generator',
    metaDescription: 'Spin the Truth or Dare wheel for party games, sleepovers, and game nights. 100% random and fun choices for friends.',
    defaultOptions: ['Truth 💬', 'Dare 😈', 'Truth 💬', 'Dare 😈', 'Double Dare ⚡', 'Pass 🛡️'],
    faq: [
      {
        question: 'How do you play Truth or Dare with the wheel?',
        answer: 'Gather your friends, spin the wheel, and whoever\'s turn it is must answer a Truth question or complete a Dare based on the slice landed.',
      },
    ],
  },
  {
    slug: 'yes-no-picker-wheel',
    category: 'games',
    categoryName: 'Party & Games',
    title: 'Yes or No Random Decision Wheel',
    h1: 'Yes or No Random Decision Wheel',
    metaTitle: 'Yes or No Picker Wheel | Instant Random Choice Generator',
    metaDescription: 'Make instant binary decisions with the 8-slice Yes or No spinning wheel. 100% fair, unbiased 50/50 probability.',
    defaultOptions: ['YES', 'NO', 'YES', 'NO', 'YES', 'NO', 'YES', 'NO'],
    faq: [
      {
        question: 'Is the Yes/No wheel strictly 50/50 fair?',
        answer: 'Yes, the wheel utilizes an unbiased cryptographic random number generator algorithm to land on YES or NO with equal probability.',
      },
    ],
  },
]
