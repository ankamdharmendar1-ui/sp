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
  // Education & Classroom Category
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
        answer: 'Yes, enable "Remove winner after each spin" to assign teams without repetition.',
      },
    ],
  },
  {
    slug: 'letter-picker-wheel',
    category: 'education',
    categoryName: 'Education & Classroom',
    title: 'Letter Picker Wheel (A to Z Alphabet Spinner)',
    h1: 'Random Letter Picker Wheel (A-Z Alphabet Spinner)',
    metaTitle: 'Letter Picker Wheel | Random Alphabet Letter Generator (A-Z)',
    metaDescription: 'Spin the random letter picker wheel from A to Z. Perfect for spelling games, Scrabble, phonics lessons, and vocabulary practice.',
    defaultOptions: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    faq: [
      {
        question: 'Can I choose between vowels and consonants?',
        answer: 'Yes, you can customize the list to only include vowels or specific alphabet letters in the entry editor.',
      },
    ],
  },
  {
    slug: 'number-picker-wheel',
    category: 'education',
    categoryName: 'Education & Classroom',
    title: 'Number Picker Wheel (1-10 Random Number Spinner)',
    h1: 'Random Number Picker Wheel (1 to 10)',
    metaTitle: 'Number Picker Wheel | Random Number Generator 1-10',
    metaDescription: 'Generate random numbers with the spinning number wheel. Great for math games, bingo, raffles, and random probability teaching.',
    defaultOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    faq: [
      {
        question: 'Can I spin numbers up to 100?',
        answer: 'Yes, click the text area and paste numbers 1 to 100 (one per line) to instantly generate a 100-number wheel.',
      },
    ],
  },

  // Teams & Sports Category
  {
    slug: 'team-picker-wheel',
    category: 'teams',
    categoryName: 'Teams & Groups',
    title: 'Team Picker Wheel (Random Team Generator)',
    h1: 'Team Picker Wheel - Generate Random Teams & Groups',
    metaTitle: 'Team Picker Wheel | Random Team & Group Generator',
    metaDescription: 'Randomly split players, students, or coworkers into balanced teams. Free random team generator wheel with instant results.',
    defaultOptions: ['Team Alpha', 'Team Bravo', 'Team Charlie', 'Team Delta', 'Team Echo', 'Team Foxtrot'],
    faq: [
      {
        question: 'How do I divide players into 2 or more teams?',
        answer: 'Spin the team wheel to assign each participant to a team, or put participant names on the wheel and eliminate them into team brackets.',
      },
    ],
  },
  {
    slug: 'nba-picker-wheel',
    category: 'teams',
    categoryName: 'Teams & Groups',
    title: 'NBA Team Picker Wheel',
    h1: 'Random NBA Team Picker Wheel',
    metaTitle: 'NBA Picker Wheel | Random NBA Basketball Team Generator',
    metaDescription: 'Pick a random NBA basketball team for 2K matches, fantasy drafts, or franchise rebuilds. Features top NBA franchises.',
    defaultOptions: ['Lakers', 'Celtics', 'Warriors', 'Bulls', 'Heat', 'Nets', 'Bucks', 'Suns', 'Nuggets', 'Knicks'],
    faq: [
      {
        question: 'Can I add all 30 NBA teams?',
        answer: 'Yes, you can edit or import the full 30-team NBA roster into the entries editor anytime.',
      },
    ],
  },
  {
    slug: 'nfl-picker-wheel',
    category: 'teams',
    categoryName: 'Teams & Groups',
    title: 'NFL Team Picker Wheel',
    h1: 'Random NFL Football Team Picker Wheel',
    metaTitle: 'NFL Picker Wheel | Random NFL Football Team Generator',
    metaDescription: 'Randomly select an NFL team for Madden tournaments, fantasy football pick\'ems, or game day watching.',
    defaultOptions: ['Chiefs', 'Eagles', '49ers', 'Cowboys', 'Bills', 'Packers', 'Patriots', 'Rams', 'Lions', 'Ravens'],
    faq: [
      {
        question: 'Is this wheel updated for current NFL franchises?',
        answer: 'Yes, you can customize any team names or add all 32 NFL franchises in the entry editor.',
      },
    ],
  },

  // Food & Dining Category
  {
    slug: 'what-to-eat-wheel',
    category: 'food',
    categoryName: 'Food & Dining',
    title: 'What to Eat Decision Wheel',
    h1: 'What to Eat Decision Wheel - Random Meal Picker',
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

  // Geography & Trivia Category
  {
    slug: 'country-picker-wheel',
    category: 'geography',
    categoryName: 'Geography & Travel',
    title: 'Country Picker Wheel (Random Country Generator)',
    h1: 'Country Picker Wheel - Pick a Random Country in the World',
    metaTitle: 'Country Picker Wheel | Random Country Generator & Travel Picker',
    metaDescription: 'Spin to pick a random country for geography trivia, GeoGuessr challenges, MUN conferences, or your next vacation destination.',
    defaultOptions: ['United States', 'United Kingdom', 'Canada', 'Japan', 'Germany', 'Australia', 'Brazil', 'India', 'France', 'Mexico'],
    faq: [
      {
        question: 'Can I use this for GeoGuessr and geography games?',
        answer: 'Yes! It is widely used by GeoGuessr streamers and geography teachers for random country quizzes.',
      },
    ],
  },
  {
    slug: 'state-picker-wheel',
    category: 'geography',
    categoryName: 'Geography & Travel',
    title: 'US State Picker Wheel',
    h1: 'US State Picker Wheel - Random 50 States Generator',
    metaTitle: 'US State Picker Wheel | Random 50 States Generator',
    metaDescription: 'Pick a random US state for school geography projects, road trip planning, or state trivia games.',
    defaultOptions: ['California', 'Texas', 'Florida', 'New York', 'Ohio', 'Illinois', 'Georgia', 'North Carolina', 'Pennsylvania', 'Michigan'],
    faq: [
      {
        question: 'Does this wheel support all 50 US states?',
        answer: 'Yes! You can paste the complete 50 US states list into the entry editor with one click.',
      },
    ],
  },

  // Gaming & Esports Category
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
        question: 'Is this drop generator updated for active Fortnite chapters?',
        answer: 'Yes! The POI landing spots reflect active Fortnite battle royale locations.',
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
  {
    slug: 'color-picker-wheel',
    category: 'games',
    categoryName: 'Party & Games',
    title: 'Color Picker Wheel (Random Color Generator)',
    h1: 'Random Color Picker Wheel',
    metaTitle: 'Color Picker Wheel | Random Color Spinner & Palette Generator',
    metaDescription: 'Spin to choose a random color for art challenges, design inspiration, team jerseys, or game boards.',
    defaultOptions: ['Red 🔴', 'Blue 🔵', 'Green 🟢', 'Yellow 🟡', 'Purple 🟣', 'Orange 🟠', 'Pink 🌸', 'Teal 🌊'],
    faq: [
      {
        question: 'Can I use custom hex colors?',
        answer: 'Yes, you can edit labels and choose custom colors in the entries editor.',
      },
    ],
  },
]
