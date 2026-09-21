export interface ToolGuide {
  essayTitle: string
  essayParagraphs: string[]
  targetKeywords: string[]
  proTips: Array<{ title: string; description: string }>
}

export const TOOL_GUIDES: Record<string, ToolGuide> = {
  "random-student-generator": {
    "essayTitle": "Why Teachers Are Swapping Popsicle Sticks for a Digital Spinner",
    "essayParagraphs": [
      "If you have ever stood in front of a classroom holding a jar of wooden popsicle sticks, you know the struggle. Names fade over time, sticks end up on the floor, and students will swear you are always picking on the front row. Worst of all, accidentally calling on the same quiet student twice in ten minutes can derail their confidence for the rest of the week.",
      "This wheel changes the whole atmosphere of the room. The moment you project it onto the smartboard, kids instantly sit up and pay attention. The mechanical ticking sound builds real suspense, and because every single student name is clearly visible on screen, nobody can claim favoritism or teacher bias.",
      "If you turn on Elimination Mode, called students are automatically removed from the wheel. That means every pupil gets their turn to read, answer questions, or lead the line before anyone repeats. It keeps the whole class engaged, takes the pressure off your shoulders, and saves you precious instructional minutes every single day."
    ],
    "targetKeywords": [
      "random student generator",
      "student name picker wheel",
      "classroom random name selector",
      "cold calling spinner for teachers",
      "fair classroom name picker",
      "digital popsicle sticks wheel"
    ],
    "proTips": [
      {
        "title": "Use Elimination Mode for Fair Turns",
        "description": "Turn on \"Remove winner after each spin\" in the wheel settings so every child gets called on before names reset."
      },
      {
        "title": "Your Rosters Stay 100% Private",
        "description": "All student lists are saved strictly in your local browser storage—no student names or data are ever uploaded to external servers."
      }
    ]
  },
  "classroom-group-picker": {
    "essayTitle": "Fair Group Projects Without the Social Drama",
    "essayParagraphs": [
      "Letting students pick their own project groups usually leads to two problems: best friends immediately cluster together, and one or two quiet students end up sitting alone wondering where to go. On the flip side, manually creating groups yourself takes forever and leaves you defending your choices against complaints.",
      "The Classroom Group Picker Wheel takes all the awkwardness out of teamwork. By letting a transparent, randomized spinner divide the room, students readily accept their assignments because the computer made the call fairly.",
      "Whether you are running science lab rotations, peer-editing workshops, or quick 5-minute study tables, a couple of spins assigns captains, pairs up study partners, and gets everyone working together with zero fuss."
    ],
    "targetKeywords": [
      "classroom group picker",
      "random team generator for students",
      "group maker wheel",
      "fair student grouping tool",
      "cooperative learning wheel spinner",
      "classroom team generator"
    ],
    "proTips": [
      {
        "title": "Assign Learning Stations in Seconds",
        "description": "Put Station 1 through Station 6 on the wheel to quickly rotate student tables through active learning centers."
      },
      {
        "title": "Rotate Team Roles Effortlessly",
        "description": "Spin to assign project roles like Note Taker, Timekeeper, Presenter, and Lead Researcher."
      }
    ]
  },
  "letter-picker-wheel": {
    "essayTitle": "Bringing Alphabet Games and Spelling Drills to Life",
    "essayParagraphs": [
      "Rolling letter dice or pulling wooden tiles out of a bag sounds easy until half the pieces disappear under the couch. This A-to-Z spinner is a quick, mess-free way to run vocabulary warm-ups, phonics drills, and word games.",
      "Elementary teachers love it for letter-sound recognition. When the wheel stops on B, kids call out the \"buh\" sound and name three animals starting with that letter. For older kids and adults, it is great for speed-spelling warm-ups, Scattergories rounds, and creative writing prompts where every sentence must begin with a certain letter.",
      "Every letter has an identical chance of being picked, so players get plenty of practice with commonly skipped letters like J, Q, X, and Z without any repetition bias."
    ],
    "targetKeywords": [
      "letter picker wheel",
      "alphabet wheel spinner",
      "random letter generator a to z",
      "phonics letter wheel",
      "spelling bee letter selector",
      "wordle letter picker"
    ],
    "proTips": [
      {
        "title": "Focus on Vowels Only",
        "description": "Delete consonants to create a targeted 5-slice Vowel Wheel (A, E, I, O, U) for early reading instruction."
      },
      {
        "title": "Scattergories Game Nights",
        "description": "Spin once at the start of each round to lock in the mandatory starting letter for all categories."
      }
    ]
  },
  "number-picker-wheel": {
    "essayTitle": "A Cleaner, Fairer Way to Pick Random Numbers",
    "essayParagraphs": [
      "Physical dice love to bounce off tables, hide under chairs, and roll numbers that people argue over. The Number Picker Wheel gives you a clean, clear visual draw that scales easily from a quick 1-to-10 roll up to large multi-digit raffle drawings.",
      "In math classes, it is one of the best ways to teach kids about probability in action. Students can track spin results in a notebook, calculate percentages, and see how theoretical odds match up against real-world spins.",
      "Event hosts also use it for door prizes, silent auctions, and casual bingo nights. Every number slice has an exact mathematical chance of winning, backed by cryptographic randomization."
    ],
    "targetKeywords": [
      "number picker wheel 1-10",
      "random number spinner wheel",
      "math game number generator",
      "raffle number picker",
      "dice alternative wheel",
      "probability teaching spinner"
    ],
    "proTips": [
      {
        "title": "Paste Any Number Range",
        "description": "Paste any list of numbers into the entry box—like 1 through 50 or 100—for school raffles and door prizes."
      },
      {
        "title": "Simulate Weighted Odds",
        "description": "Give certain numbers higher weights to demonstrate weighted averages or simulate unfair game mechanics in statistics class."
      }
    ]
  },
  "team-picker-wheel": {
    "essayTitle": "Say Goodbye to Awkward Playground Team Captains",
    "essayParagraphs": [
      "We all remember gym class when two captains picked teams one player at a time. Being picked last feels terrible, and the teams almost never end up balanced anyway. It is awkward, slow, and leads to one-sided games.",
      "The Team Picker Wheel eliminates all that playground politics. Just paste in everyone who showed up to play, spin the wheel, and place players alternately into Team A and Team B. Nobody feels singled out, and the game starts in under a minute.",
      "It works just as well for weekend soccer scrimmages, intramural dodgeball, corporate hackathons, and video game squad nights. Fair teams make for much closer, more exciting games."
    ],
    "targetKeywords": [
      "team picker wheel",
      "random sports team generator",
      "fair squad maker",
      "team generator wheel",
      "unbiased team divider",
      "pickup sports team picker"
    ],
    "proTips": [
      {
        "title": "Turn on Elimination for Rosters",
        "description": "Put all player names on the wheel, spin one by one, and place winners alternately into Team Alpha and Team Bravo."
      },
      {
        "title": "Corporate Team Building",
        "description": "Mix departments by randomly assigning engineers, designers, and marketers into balanced project squads."
      }
    ]
  },
  "nba-picker-wheel": {
    "essayTitle": "Shake Up Your NBA 2K Franchise & Watch Nights",
    "essayParagraphs": [
      "Let us be honest: always playing with the Lakers, Celtics, or Warriors gets old quickly. If you want a genuine challenge in your next NBA 2K franchise save, let the wheel assign your team.",
      "Landing on a young, scrappy roster forces you to actually learn playbooks, manage salary caps, and develop bench talent instead of relying on superstar cheese. You will discover underrated players you never would have used otherwise.",
      "Fantasy basketball commissioners also use the wheel for draft lottery reveals, giving their league group chat the thrill of an authentic NBA Draft Lottery reveal with sound effects and confetti."
    ],
    "targetKeywords": [
      "nba picker wheel",
      "random nba team generator",
      "nba 2k team picker wheel",
      "basketball franchise roulette",
      "nba fantasy team selector",
      "random basketball team wheel"
    ],
    "proTips": [
      {
        "title": "All 30 NBA Franchises",
        "description": "Paste in all 30 Eastern and Western conference teams for a completely unbiased franchise lottery."
      },
      {
        "title": "Weighted Draft Lottery Odds",
        "description": "Give lower-ranked fantasy teams higher weights to run a realistic draft lottery in your league."
      }
    ]
  },
  "nfl-picker-wheel": {
    "essayTitle": "Settling Madden Showdowns & Fantasy League Debates",
    "essayParagraphs": [
      "Football arguments are half the fun of Sunday watch parties, but deciding who plays with which team in Madden can take longer than the first quarter. When friends both claim they can win with any roster, spin the wheel and put that confidence to the test.",
      "The NFL Team Picker Wheel delivers instant fairness. Spin to pick your Madden matchup, choose a bold survivor pool upset of the week, or assign division brackets before week 1 kicks off.",
      "It is also popular for tailgates, touchdown squares drawings, and deciding which game to stream when you have NFL RedZone running on two screens."
    ],
    "targetKeywords": [
      "nfl picker wheel",
      "random nfl football team generator",
      "madden team picker wheel",
      "fantasy football draft spinner",
      "nfl survivor pool decider",
      "game day pickem wheel"
    ],
    "proTips": [
      {
        "title": "Pick Survivor Pool Underdogs",
        "description": "Load this week's slate of underdogs and let the wheel pick your upset prediction without overthinking the spreads."
      },
      {
        "title": "Multi-Season Madden Challenge",
        "description": "Lock into a 5-year rebuild with whichever franchise the needle lands on, no re-rolls allowed."
      }
    ]
  },
  "what-to-eat-wheel": {
    "essayTitle": "How to End the Endless \"What Should We Eat?\" Argument",
    "essayParagraphs": [
      "\"What do you want for dinner?\" \"I don't know, what do you want?\" \"Anything is fine.\" \"How about pizza?\" \"No, not pizza.\" If this conversation sounds familiar, you are not alone. Dinnertime decision paralysis happens to almost every couple, family, and roommate group when everyone is tired and hungry.",
      "This wheel cuts through the stalemate in three seconds flat. Loaded with beloved staples like pizza, ramen, tacos, sushi, burgers, and pasta, one tap settles the question cleanly.",
      "The secret to making it work is simple: agree beforehand that whatever the wheel lands on is the final verdict. You will be surprised by how relieved everyone feels once the decision is out of their hands and dinner is on the way."
    ],
    "targetKeywords": [
      "what to eat decision wheel",
      "random food picker wheel",
      "dinner decider wheel",
      "restaurant roulette wheel",
      "takeout food picker",
      "meal decision generator"
    ],
    "proTips": [
      {
        "title": "Add Your Local Takeout Spots",
        "description": "Replace general food categories with the names of your family's 5 favorite neighborhood restaurants."
      },
      {
        "title": "The Golden \"First Spin\" Rule",
        "description": "Agree as a group before spinning: whatever the wheel lands on first is what you order, no vetoes!"
      }
    ]
  },
  "fast-food-picker": {
    "essayTitle": "Your Quick Highway Exit & Late-Night Food Decider",
    "essayParagraphs": [
      "Picture this: it is 9:30 PM on a road trip, everyone in the car is starving, and the highway sign shows five fast-food spots at the next exit. One person wants tacos, someone wants chicken sandwiches, and someone else wants burgers. If you keep arguing, you will miss the exit entirely.",
      "The Fast Food Picker Wheel solves the dispute before you reach the ramp. Pre-loaded with favorites like McDonald's, Wendy's, Taco Bell, Chick-fil-A, Subway, and KFC, it gives you an immediate, fair tiebreaker.",
      "It is just as handy for college dorms, late-night study sessions, or deciding where to grab a quick bite on a short lunch break when you don't want to think."
    ],
    "targetKeywords": [
      "fast food picker wheel",
      "random fast food restaurant generator",
      "drive thru roulette wheel",
      "cheat day meal decider",
      "late night food spinner",
      "burger and fry picker"
    ],
    "proTips": [
      {
        "title": "Match Your Highway Exit Options",
        "description": "Quickly type in the exact restaurants at your upcoming exit so you pull off with confidence."
      },
      {
        "title": "Cheat Meal Reward",
        "description": "Hit a fitness milestone? Let the wheel decide your weekend cheat meal treat."
      }
    ]
  },
  "what-should-i-eat-for-lunch": {
    "essayTitle": "Escaping the Boring 12:30 PM Work Lunch Routine",
    "essayParagraphs": [
      "When noon rolls around during a busy workday, the last thing your brain wants to do is make another decision. That is why so many of us end up eating the exact same bland turkey sandwich or desk salad four days in a row—pure mental exhaustion.",
      "This lunch randomizer exists to break that cycle. With crisp salads, warm wraps, hearty bento boxes, noodle bowls, and deli specials on the wheel, you get an appetizing suggestion with one click.",
      "Coworkers love opening the wheel on office tablets. It saves 15 minutes of debating, helps you explore nearby food trucks, and turns lunch into something you actually look forward to in the middle of your day."
    ],
    "targetKeywords": [
      "what should i eat for lunch randomizer",
      "lunch decision wheel",
      "office lunch randomizer",
      "quick lunch meal picker",
      "lunch roulette wheel",
      "healthy lunch decision spinner"
    ],
    "proTips": [
      {
        "title": "Weight Nearby Spots Higher",
        "description": "Give higher weights to places within a 5-minute walk when you have a short lunch break window."
      },
      {
        "title": "Keep a Balanced Menu",
        "description": "Alternate slices between healthy salad options and treat meals to keep your eating balanced all week."
      }
    ]
  },
  "country-picker-wheel": {
    "essayTitle": "From GeoGuessr Grinds to International Dinner Nights",
    "essayParagraphs": [
      "With nearly 200 sovereign nations around the globe, Earth is packed with incredible cultures, languages, and foods that most of us rarely think about day to day. This wheel turns global exploration into an interactive game.",
      "GeoGuessr streamers and competitive geography players use it regularly for \"Country Streak Challenges\" where they must identify road signs, landscapes, and landmarks without skipping. It tests your map instincts in a fun, unpredictable way.",
      "Families and dinner clubs also use it for international cooking challenges: spin a country on Sunday, research its staple dishes during the week, and cook that meal together on Friday night with music from that region."
    ],
    "targetKeywords": [
      "country picker wheel",
      "random country generator",
      "geoguessr country picker wheel",
      "geography trivia spinner",
      "world travel destination picker",
      "model un country generator"
    ],
    "proTips": [
      {
        "title": "Study by Continent",
        "description": "Paste in only European or South American countries when studying for a regional geography exam."
      },
      {
        "title": "Spontaneous Travel Bucket List",
        "description": "Spin to pick your next holiday destination and look up flights with an open, adventurous mind."
      }
    ]
  },
  "state-picker-wheel": {
    "essayTitle": "Bringing 50 States Trivia & Road Trips to Life",
    "essayParagraphs": [
      "Memorizing state capitals, abbreviations, and landmark geography out of a dry textbook is nobody's idea of fun. Turning it into a spinner game makes students actually want to volunteer their answers in class.",
      "Spin the wheel, and the student gets 15 seconds to name the capital, point out the state on a blank map, or share one unusual historical fact. It keeps energy high and rewards curious learners.",
      "Road trippers and adventurers also use the 50 states wheel to plan unpredictable summer vacations, map out national park visits, or try regional snacks from states they have never visited."
    ],
    "targetKeywords": [
      "us state picker wheel",
      "random 50 states generator",
      "usa geography quiz wheel",
      "road trip state planner",
      "state trivia spinner",
      "50 states lottery wheel"
    ],
    "proTips": [
      {
        "title": "Quick Flashcard Drills",
        "description": "Spin a state and have students write down the capital city and postal code on whiteboards."
      },
      {
        "title": "Three-State Road Trip Route",
        "description": "Spin 3 states and challenge yourself to map an epic driving route connecting them."
      }
    ]
  },
  "fortnite-drop-picker": {
    "essayTitle": "Stop Dropping at the Same POI Every Match",
    "essayParagraphs": [
      "Every Fortnite squad has that one friend who marks the exact same corner of the map game after game. Sure, it is safe, but playing it safe does not lead to wild clutch moments or hilarious voice-chat memories.",
      "This drop wheel forces your squad out of your comfort zone. Whether it drops you straight into the chaos of a central hot drop or sends you out to a quiet coastline fishing shack, you will become a much better player by learning to fight across every terrain on the island.",
      "Streamers frequently use it for viewer challenges like \"Wheel Decides Our Landings\", giving their community a fun reason to tune in and root for crazy drops."
    ],
    "targetKeywords": [
      "fortnite drop picker wheel",
      "random fortnite landing spot wheel",
      "battle royale drop roulette",
      "fortnite poi landing generator",
      "squad drop challenge wheel",
      "fortnite chapter landing spinner"
    ],
    "proTips": [
      {
        "title": "Hot Drop vs Stealth Lists",
        "description": "Keep two custom lists: one for fast, chaotic hot drops and another for stealthy loot routes."
      },
      {
        "title": "Update with Every New Season",
        "description": "Easily update named POIs in the entries box as Epic Games changes the map each season."
      }
    ]
  },
  "apex-legends-picker": {
    "essayTitle": "Break Out of Your Main & Level Up Your Apex Squad",
    "essayParagraphs": [
      "It is easy to lock into your favorite legend in the lobby and play hundreds of games without touching anyone else. But sticking to one character means you miss out on understanding the strengths and weaknesses of the rest of the roster.",
      "Spinning the legend wheel before you queue forces you and your squadmates to learn new ability timings, defensive utilities, and movement kits. You will understand how enemy legends think because you have played them yourself.",
      "Trios also use it for handicap challenge runs and knocking out daily battle pass character damage goals in casual playlists without overthinking."
    ],
    "targetKeywords": [
      "apex legends picker wheel",
      "random legend selector apex",
      "apex legends squad roulette",
      "character challenge wheel apex",
      "apex battle royale spinner",
      "random main decider apex"
    ],
    "proTips": [
      {
        "title": "Random Trio Comp",
        "description": "Spin three times before queueing to assemble an unpredictable squad composition."
      },
      {
        "title": "Knock Out Battle Pass Challenges",
        "description": "Spin through underused legends to quickly finish weekly character damage challenges."
      }
    ]
  },
  "truth-or-dare-wheel": {
    "essayTitle": "All the Laughs of Truth or Dare Without the Awkwardness",
    "essayParagraphs": [
      "Truth or Dare has been making people laugh around campfires, dorm rooms, and weekend sleepovers for generations. But games often stall when someone freezes up, takes ten minutes to think of a dare, or feels unfairly picked on.",
      "The Truth or Dare Wheel keeps the momentum going and keeps the vibe lighthearted. With options for Truth, Dare, Double Dare, and Pass, every turn feels like a real game-show spin with mechanical ticks and fanfare.",
      "You can easily add your own inside jokes, family-friendly questions, or bold party dares into the entries box, tailoring the game perfectly to the comfort level of your group."
    ],
    "targetKeywords": [
      "truth or dare picker wheel",
      "party game wheel spinner",
      "truth or dare online wheel",
      "sleepover game decider",
      "icebreaker party wheel",
      "truth or dare randomizer"
    ],
    "proTips": [
      {
        "title": "Add Your Group's Inside Jokes",
        "description": "Type in personalized prompts like \"Do an impression of your best friend\" to get everyone laughing."
      },
      {
        "title": "Keep Pass Slices on the Wheel",
        "description": "Include a few \"Pass\" slices so players have an out if a prompt feels a little too personal."
      }
    ]
  },
  "yes-no-picker-wheel": {
    "essayTitle": "The Digital Coin Toss That Clears Your Head",
    "essayParagraphs": [
      "Have you ever noticed what happens right as a flipped coin is in the air? In that split second while it is spinning, your brain suddenly knows what you were secretly hoping for all along.",
      "That is the true beauty of this Yes/No wheel. When you are stuck overthinking something small—like whether to take that weekend day trip, buy that jacket, or finally clean the garage—give it a quick spin. If the answer feels right, you have your answer; if you feel a flash of disappointment, you also have your answer.",
      "Because it uses cryptographic browser randomization across 8 balanced alternating slices, every spin has an exact 50.0% mathematical split with zero bias."
    ],
    "targetKeywords": [
      "yes no picker wheel",
      "yes or no wheel generator",
      "random yes or no decision wheel",
      "50 50 coin flip wheel",
      "binary decision maker",
      "oracle yes no wheel"
    ],
    "proTips": [
      {
        "title": "Trust Your First Reaction",
        "description": "Notice how you feel as the wheel slows down. If you dread the winning slice, your gut already made the choice."
      },
      {
        "title": "Daily To-Do List Tiebreaker",
        "description": "Use the wheel to quickly prioritize between two equally important tasks on your morning list."
      }
    ]
  },
  "color-picker-wheel": {
    "essayTitle": "Curing Creative Block for Artists & Designers",
    "essayParagraphs": [
      "Staring at an empty digital canvas with a color picker containing 16 million possible shades can be genuinely paralyzing. Too much choice often stops creativity in its tracks.",
      "That is why the \"Three Color Art Challenge\" is so popular on YouTube, TikTok, and Instagram. Artists spin the wheel three times, lock in those exact shades, and challenge themselves to finish a whole illustration using only that palette. The constraint forces creative shading, contrast, and clever composition.",
      "It is just as helpful for graphic designers looking for unexpected branding combinations, interior decorators choosing accent pillows, or classroom color theory drills."
    ],
    "targetKeywords": [
      "color picker wheel",
      "random color generator wheel",
      "art challenge color wheel",
      "palette selection spinner",
      "graphic design color roulette",
      "drawing prompt color picker"
    ],
    "proTips": [
      {
        "title": "The 3-Color Drawing Challenge",
        "description": "Spin 3 colors and challenge yourself to paint a complete portrait using only those three hues."
      },
      {
        "title": "Custom Palette Names",
        "description": "Paste in seasonal themes like Autumn Moss, Sunset Coral, or Electric Lime for targeted design work."
      }
    ]
  },
  "flag-quiz-picker-wheel": {
    "essayTitle": "A Fun, Visual Way to Test Your World Flag Smarts",
    "essayParagraphs": [
      "Flags are visual summaries of history, culture, and national pride, but recognizing them quickly takes regular practice. Whether you are hosting trivia night with friends or reviewing for an international relations final, this flag wheel makes testing knowledge feel like a game show.",
      "The wheel displays clean world flag emojis on every slice. When the needle stops, contestants have 15 seconds to shout out the country, name its capital city, or identify which ocean borders it.",
      "You can easily paste in flags from a single continent or create global elimination tournaments where answered flags disappear until the wheel is empty."
    ],
    "targetKeywords": [
      "flag quiz picker wheel",
      "random country flag generator",
      "flag trivia wheel spinner",
      "world flag guessing game",
      "geography flag quizzer",
      "flag emoji roulette wheel"
    ],
    "proTips": [
      {
        "title": "3-Tier Trivia Scoring",
        "description": "Award 1 point for the country name, 2 points for the capital, and 3 points for its currency."
      },
      {
        "title": "Elimination Tournaments",
        "description": "Remove correctly guessed flags after each round until the class has identified every country."
      }
    ]
  },
  "mlb-picker-wheel": {
    "essayTitle": "Take Your Baseball Fandom & Video Games for a Spin",
    "essayParagraphs": [
      "With 162 games in a regular season, baseball is the ultimate marathon. If you are starting a franchise rebuild in MLB The Show or picking a neutral game to watch on MLB.TV, this wheel brings unpredictable fun to your baseball evenings.",
      "Landing on an underdog club forces you to scout minor league prospects, manage bullpen pitch counts, and make tough trades instead of buying expensive free agents. It is how you truly master the game.",
      "Fantasy baseball leagues also use the wheel for draft lottery order reveals and assigning division brackets fairly before opening day."
    ],
    "targetKeywords": [
      "mlb picker wheel",
      "random baseball team generator",
      "mlb the show franchise wheel",
      "major league baseball team spinner",
      "baseball fantasy draft picker",
      "world series team wheel"
    ],
    "proTips": [
      {
        "title": "Postseason Simulation Bracket",
        "description": "Put all division leaders on the wheel to run an exciting simulated October playoff run."
      },
      {
        "title": "Ballpark Road Trip Planner",
        "description": "Spin to pick which Major League stadium you and your friends will travel to see this summer."
      }
    ]
  },
  "image-picker-wheel": {
    "essayTitle": "Visual Storytelling & Quick Drawing Prompts",
    "essayParagraphs": [
      "Words and numbers are great, but the human brain processes visual icons and emojis almost instantly. The Image and Emoji Picker Wheel uses clean unicode emojis to create an intuitive, playful decision experience.",
      "Kids who are not reading fluent English yet can easily spin to pick bedtime stories, afternoon fruit snacks, or clean-up games without feeling left out. In design sprints, UX facilitators use emoji wheels for quick 5-minute mood-boarding exercises.",
      "It also doubles as an instant Pictionary generator: spin an emoji, start a 60-second timer, and see if your team can guess your drawing before time runs out."
    ],
    "targetKeywords": [
      "image picker wheel",
      "visual emoji picker wheel",
      "icon roulette spinner",
      "pictionary prompt wheel",
      "visual decision maker",
      "emoji wheel generator"
    ],
    "proTips": [
      {
        "title": "3-Emoji Story Challenge",
        "description": "Spin 3 random emojis in a row and challenge students to invent a 1-minute creative story linking them together."
      },
      {
        "title": "Visual Kindergarten Chores",
        "description": "Use friendly icons like books, toys, and clothes to turn cleanup time into a fun visual game."
      }
    ]
  },
  "date-picker-wheel": {
    "essayTitle": "No More Endless Text Threads Trying to Pick a Day",
    "essayParagraphs": [
      "\"Are you free Tuesday?\" \"No, how about Thursday?\" \"Thursday is bad, what about Friday?\" Trying to schedule a simple dinner with friends or family should not take three days of back-and-forth group texts.",
      "This date wheel cuts right through the scheduling deadlock. Spin to pick a day, hold everyone to it, and get on with your week. It works just as well for couples planning a spontaneous date night or families dividing up weekly chore duty fairly.",
      "You can also paste in specific calendar dates (like October 14, 21, 28) for project milestone check-ins or drawing dates without anyone suspecting bias."
    ],
    "targetKeywords": [
      "date picker wheel",
      "random day of the week wheel",
      "chore schedule wheel spinner",
      "date night decider wheel",
      "workout day planner wheel",
      "weekly schedule randomizer"
    ],
    "proTips": [
      {
        "title": "Fair Weekly Chore Rotation",
        "description": "Assign family members to days of the week for trash and dish duty without arguments."
      },
      {
        "title": "Spontaneous Date Night",
        "description": "Remove busy workdays and spin between Friday, Saturday, and Sunday to lock in quality time."
      }
    ]
  },
  "instagram-comment-picker": {
    "essayTitle": "Giveaways Your Followers Can Actually Trust",
    "essayParagraphs": [
      "Social media giveaways are one of the fastest ways to grow your followers, but audience trust is fragile. If you simply announce a winner in a text caption, followers naturally wonder if you just picked a friend or an alt account.",
      "The Instagram Comment Picker Wheel makes your drawings 100% transparent. By screen-recording the wheel spinning live in your Instagram Stories, Reels, or Live stream, your community sees the needle land on the winning username in real time with authentic physics and confetti.",
      "Turn on Elimination Mode to easily pick multiple prize tiers (1st place grand prize, 2nd place gift card, 3rd place merchandise) without accidental duplicate drawings."
    ],
    "targetKeywords": [
      "instagram comment picker wheel",
      "social media giveaway winner wheel",
      "free contest winner randomizer",
      "transparent raffle spinner",
      "instagram giveaway picker wheel",
      "live stream drawing wheel"
    ],
    "proTips": [
      {
        "title": "Record Live in Stories for Proof",
        "description": "Screen-record the spin directly on your phone and post it to Instagram Stories to prove total fairness."
      },
      {
        "title": "Elimination for Multiple Prizes",
        "description": "Enable \"Remove winner after each spin\" to award 1st, 2nd, and 3rd place prizes without duplicate entries."
      }
    ]
  }
};
