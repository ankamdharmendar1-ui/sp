import { Link } from 'react-router-dom'

export interface HomeSeoContentProps {
  faqs: Array<{ question: string; answer: string }>
}

export function HomeSeoContent({ faqs }: HomeSeoContentProps) {
  return (
    <section className="mt-16 border-t border-[#e4d9c8] pt-12 text-[#10232b]">
      <div className="mx-auto max-w-4xl space-y-12">
        
        {/* Section 1: Overview & Purpose */}
        <article className="space-y-4">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-[#10232b]">
            What is Real Picker Wheel?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            <strong>Real Picker Wheel</strong> is a free, random decision-making spinner tool designed to help you pick a choice randomly from a custom list. Whether you need a random name picker for your classroom, a decision maker for what to eat, a prize wheel for giveaways, or a team generator for games, Real Picker Wheel provides an instant, 100% fair, and visually engaging solution.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            Built with modern web technologies, it features a smooth 60 FPS HTML5 canvas, Web Audio sound effects, custom color palettes, and instant sharing features — all running completely inside your browser without requiring any account sign-up.
          </p>
        </article>

        {/* Section 2: How to Use Picker Wheel (Step-by-Step) */}
        <article className="space-y-6">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-[#10232b]">
            How to Use the Random Picker Wheel
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            Using Real Picker Wheel is quick and simple. Follow these easy steps to create and spin your custom wheel:
          </p>
          <ol className="space-y-4 text-sm sm:text-base text-[#3e4c59]">
            <li className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm">
              <strong className="text-base font-bold text-[#10232b] block mb-1">1. Insert Choices & Inputs</strong>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Enter your names, items, or choices into the entry section on the right side (or below the wheel on mobile). You can add items one by one, edit existing entries, adjust individual weights for custom probabilities, or use the <strong>Import</strong> button to paste a batch list or CSV file.
              </p>
            </li>
            <li className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm">
              <strong className="text-base font-bold text-[#10232b] block mb-1">2. Spin the Wheel</strong>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Click anywhere on the spinning wheel canvas or press the <strong>Spin</strong> button. The wheel will accelerate smoothly with realistic tick sound effects and whooshes before gradually coming to a complete stop on a randomly chosen slice.
              </p>
            </li>
            <li className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm">
              <strong className="text-base font-bold text-[#10232b] block mb-1">3. View the Result & Winner Actions</strong>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                When the spin finishes, a winner pop-up dialog displays the selected choice alongside a full-screen celebration of falling party papers and sparkles. You can choose to keep the winner for future spins or remove the winning item so it isn't picked again.
              </p>
            </li>
          </ol>
        </article>

        {/* Section 3: Modes & Features */}
        <article className="space-y-6">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-[#10232b]">
            Spin Modes & Customization Features
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>🎯</span> Normal vs Elimination Mode
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                In <strong>Normal Mode</strong>, every slice stays on the wheel for every spin. If you need a raffle or student generator without repeats, enable <strong>Remove Winner</strong> mode so chosen items are eliminated automatically after each win.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>⚖️</span> Weighted Odds & Probabilities
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Want certain choices to have a higher or lower chance of landing? Enable <strong>Weighted Mode</strong> in the settings to set custom multipliers for individual slices.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>🎨</span> Sound & Theme Settings
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Customize your wheel's appearance with color palettes like Aurora, Neon, Pastel, and Classic. Toggle tick audio, spin whooshes, and victory fanfare sound effects on or off anytime.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>🔗</span> Share & Embed Options
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Share your wheel configuration with friends or colleagues using custom shareable URLs, or use the <strong>Embed</strong> button to generate lightweight HTML iframe code for blogs and websites.
              </p>
            </div>
          </div>
        </article>

        {/* Section 4: Popular Use Cases Grid */}
        <article className="space-y-6">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-[#10232b]">
            Common Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm">
              <span className="text-2xl">🎓</span>
              <div>
                <h3 className="font-bold text-[#10232b]">Random Student Name Picker</h3>
                <p className="mt-1 text-xs text-[#5c6a72] leading-relaxed">
                  Teachers use Real Picker Wheel to select students fairly for reading, cold-calling questions, assigning classroom chores, or dividing students into groups.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm">
              <span className="text-2xl">🍕</span>
              <div>
                <h3 className="font-bold text-[#10232b]">What to Eat Decision Generator</h3>
                <p className="mt-1 text-xs text-[#5c6a72] leading-relaxed">
                  Can't decide where to go for lunch or dinner? Add your favorite local restaurants or food types (pizza, sushi, tacos, burgers) and let the wheel choose for you.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm">
              <span className="text-2xl">🎁</span>
              <div>
                <h3 className="font-bold text-[#10232b]">Raffles & Contest Giveaways</h3>
                <p className="mt-1 text-xs text-[#5c6a72] leading-relaxed">
                  Streamers and event hosts run transparent, live giveaways by inputting participant names and spinning the wheel in front of their audience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm">
              <span className="text-2xl">🎮</span>
              <div>
                <h3 className="font-bold text-[#10232b]">Gaming & Party Challenges</h3>
                <p className="mt-1 text-xs text-[#5c6a72] leading-relaxed">
                  Gamers spin for Fortnite landing spots, Apex legends, or party games like Truth or Dare, team generators, and prize draws.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Section 5: Specialized Tool Pages Links (Internal Linking for SEO) */}
        <article className="space-y-4 rounded-3xl border border-[#d7cfc2] bg-[#fbf6ee] p-6">
          <h3 className="text-lg font-bold text-[#10232b]">Explore Other Specialized Wheel Tools</h3>
          <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
            Check out our pre-configured wheel tools for popular activities and decision topics:
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <Link to="/education/random-student-generator" className="rounded-xl border border-[#d7cfc2] bg-white px-3 py-2 text-[#10232b] hover:bg-[#1B6B6B] hover:text-white transition-colors">
              🎯 Student Name Generator
            </Link>
            <Link to="/food/what-to-eat-wheel" className="rounded-xl border border-[#d7cfc2] bg-white px-3 py-2 text-[#10232b] hover:bg-[#1B6B6B] hover:text-white transition-colors">
              🍕 What to Eat Wheel
            </Link>
            <Link to="/gaming/fortnite-drop-picker" className="rounded-xl border border-[#d7cfc2] bg-white px-3 py-2 text-[#10232b] hover:bg-[#1B6B6B] hover:text-white transition-colors">
              🎮 Fortnite Drop Picker
            </Link>
            <Link to="/games/truth-or-dare-wheel" className="rounded-xl border border-[#d7cfc2] bg-white px-3 py-2 text-[#10232b] hover:bg-[#1B6B6B] hover:text-white transition-colors">
              🎲 Truth or Dare Wheel
            </Link>
            <Link to="/games/yes-no-picker-wheel" className="rounded-xl border border-[#d7cfc2] bg-white px-3 py-2 text-[#10232b] hover:bg-[#1B6B6B] hover:text-white transition-colors">
              💬 Yes or No Wheel
            </Link>
            <Link to="/random-wheel" className="rounded-xl border border-[#d7cfc2] bg-white px-3 py-2 text-[#10232b] hover:bg-[#1B6B6B] hover:text-white transition-colors">
              ⚡ All Wheel Tools
            </Link>
          </div>
        </article>

        {/* Section 6: Frequently Asked Questions (FAQ) */}
        <article className="space-y-6">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-[#10232b]">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-bold text-[#10232b]">{faq.question}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">{faq.answer}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b]">Is Real Picker Wheel completely random and fair?</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">
                Yes! Real Picker Wheel uses a cryptographically secure pseudo-random number generator (PRNG) algorithm to calculate angles and determine winning slices with 100% mathematical fairness.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b]">Are my lists and wheel entries kept private?</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">
                Yes. All your custom entries, settings, and spin histories are saved locally inside your device's browser local storage. No names or private lists are transmitted to external servers.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}
