import { Link } from 'react-router-dom'

export interface HomeSeoContentProps {
  faqs: Array<{ question: string; answer: string }>
}

export function HomeSeoContent({ faqs }: HomeSeoContentProps) {
  return (
    <article className="mt-16 border-t border-[#e4d9c8] pt-12 text-[#10232b]">
      <div className="mx-auto max-w-4xl space-y-12">

        {/* Table of Contents - exactly like pickerwheel.com */}
        <nav
          aria-label="Table of contents"
          className="rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-2.5 pb-4 border-b border-[#e4d9c8]">
            <span className="text-xl" aria-hidden="true">📋</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#10232b]">Table of Contents</h2>
          </div>
          <ol className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-[#1B6B6B]">
            <li><a href="#what-is-picker-wheel" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">1.</span> What is Real Picker Wheel?</a></li>
            <li><a href="#how-to-use" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">2.</span> How to Use the Picker Wheel?</a></li>
            <li><a href="#step-1-inputs" className="hover:underline flex items-center gap-2 pl-4 text-xs text-[#3e4c59]">↳ Step 1: Insert Inputs</a></li>
            <li><a href="#step-2-spin" className="hover:underline flex items-center gap-2 pl-4 text-xs text-[#3e4c59]">↳ Step 2: Spin the Wheel</a></li>
            <li><a href="#step-3-result" className="hover:underline flex items-center gap-2 pl-4 text-xs text-[#3e4c59]">↳ Step 3: Get Result & Action</a></li>
            <li><a href="#features" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">3.</span> Key Features & Settings</a></li>
            <li><a href="#action-modes" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">4.</span> Action Modes (Normal vs Elimination)</a></li>
            <li><a href="#file-storage" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">5.</span> File Storage & Local Privacy</a></li>
            <li><a href="#share-embed" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">6.</span> Share & Embed Options</a></li>
            <li><a href="#popular-use-cases" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">7.</span> Real-World Use Cases &amp; Stories</a></li>
            <li><a href="#faq" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">8.</span> Frequently Asked Questions (FAQ)</a></li>
          </ol>
        </nav>

        {/* Section 1: What is Picker Wheel? */}
        <section id="what-is-picker-wheel" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            1. What is Real Picker Wheel?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            <strong>Real Picker Wheel</strong> is a modern, stylish, and free online random decision-making spinner tool designed to help individuals, teachers, gamers, and teams make decisions easily and impartially. By inserting choices or names into the wheel, our cryptographically secure pseudo-random number generator (PRNG) picks an unbiased winner with a smooth 60 FPS HTML5 canvas animation and authentic mechanical tick sound effects.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            Unlike traditional spinners, Real Picker Wheel runs entirely on client-side technology. That means zero ads blocking your wheel, ultra-fast sub-second loading speeds, and 100% privacy because your lists and participant names are never uploaded or sold to external servers.
          </p>
        </section>

        {/* Section 2: How to Use Picker Wheel? (With UI Step Mockups / Diagrams) */}
        <section id="how-to-use" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
              2. How to Use the Picker Wheel?
            </h2>
            <p className="text-sm sm:text-base text-[#5c6a72]">
              Follow this simple walkthrough to set up your entries, spin the wheel, and review your decision:
            </p>
          </div>

          {/* Step 1 */}
          <div id="step-1-inputs" className="scroll-mt-24 space-y-5 rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1B6B6B] text-white text-base font-extrabold shadow-sm">1</span>
              <h3 className="text-xl font-black text-[#10232b]">Step 1: Insert Your Inputs &amp; Entries</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#3e4c59]">
              Start by typing your choices into the <strong>Entries</strong> field. You can type names one by one into the input bar and click <strong>Add</strong>, or paste multiple choices directly into the multi-line text area (one entry per line). If you want certain options to appear more frequently, you can assign optional weights (for example: <code>Alice - 10</code>).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 shadow-xs">
                <img
                  src="/step-inputs.png"
                  alt="Adding single and multi-line inputs with optional weights in Real Picker Wheel"
                  className="rounded-xl border border-[#e4d9c8] w-full object-contain bg-white"
                  loading="lazy"
                  width="500"
                  height="260"
                />
                <figcaption className="mt-2 text-center text-xs font-semibold text-[#5c6a72]">
                  Type single items or paste an entire roster at once.
                </figcaption>
              </figure>

              <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 shadow-xs">
                <img
                  src="/step-entries.png"
                  alt="Managing active entries list with color indicators and delete buttons"
                  className="rounded-xl border border-[#e4d9c8] w-full object-contain bg-white"
                  loading="lazy"
                  width="500"
                  height="260"
                />
                <figcaption className="mt-2 text-center text-xs font-semibold text-[#5c6a72]">
                  View active entries with colored slice indicators or delete items.
                </figcaption>
              </figure>
            </div>

            <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
              Use the toolbar buttons below your list to manage your choices in bulk. You can randomize the order, clear all entries, copy items to your clipboard, or export and import your lists as CSV and TXT files.
            </p>

            <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 shadow-xs max-w-lg mx-auto">
              <img
                src="/step-controls.png"
                alt="Entry toolbar with Add list, Clear all, Randomize order, and Import/Export options"
                className="rounded-xl border border-[#e4d9c8] w-full object-contain bg-white"
                loading="lazy"
                width="500"
                height="220"
              />
              <figcaption className="mt-2 text-center text-xs font-semibold text-[#5c6a72]">
                Quick-action toolbar for list randomization, bulk copy, and CSV imports.
              </figcaption>
            </figure>
          </div>

          {/* Step 2 */}
          <div id="step-2-spin" className="scroll-mt-24 space-y-5 rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1B6B6B] text-white text-base font-extrabold shadow-sm">2</span>
              <h3 className="text-xl font-black text-[#10232b]">Step 2: Spin the Wheel</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#3e4c59]">
              Once your choices are entered, simply tap anywhere on the wheel or click the center <strong>SPIN</strong> hub. The wheel accelerates smoothly with dynamic audio click ticks, creating anticipation before slowing down to land on a fair winner.
            </p>

            <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 shadow-xs max-w-md mx-auto">
              <img
                src="/step-wheel.png"
                alt="Interactive 60 FPS spinning canvas wheel with central SPIN hub and needle pointer"
                className="rounded-xl border border-[#e4d9c8] w-full object-contain bg-white"
                loading="lazy"
                width="450"
                height="480"
              />
              <figcaption className="mt-2 text-center text-xs font-semibold text-[#5c6a72]">
                Smooth 60 FPS canvas with pointer needle and quick controls (Reset, Names, Embed).
              </figcaption>
            </figure>
          </div>

          {/* Step 3 */}
          <div id="step-3-result" className="scroll-mt-24 space-y-5 rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1B6B6B] text-white text-base font-extrabold shadow-sm">3</span>
              <h3 className="text-xl font-black text-[#10232b]">Step 3: Review Results &amp; Spin History</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#3e4c59]">
              After the wheel stops, a celebratory winner modal dialog highlights the selected option with vibrant party sparkles. Every spin result is automatically logged in your <strong>Spin history</strong> section so you can keep track of past winners during games, classroom drawings, or multi-round raffles.
            </p>

            <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 shadow-xs max-w-lg mx-auto">
              <img
                src="/step-history.png"
                alt="Spin history tracker showing sequential list of previous spin winners"
                className="rounded-xl border border-[#e4d9c8] w-full object-contain bg-white"
                loading="lazy"
                width="500"
                height="150"
              />
              <figcaption className="mt-2 text-center text-xs font-semibold text-[#5c6a72]">
                Automatic spin history tracks previous winners and lets you clear records anytime.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Section 3: Key Features */}
        <section id="features" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            3. Key Features &amp; Settings
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            Customize every visual and auditory aspect of your wheel in the <strong>Wheel customization</strong> panel. Adjust spin timing, colors, font scaling, and celebratory behavior to fit your exact activity:
          </p>

          <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 shadow-xs max-w-md mx-auto">
            <img
              src="/step-customization.png"
              alt="Wheel customization panel showing background options, text size, spin duration slider, and sound toggles"
              className="rounded-xl border border-[#e4d9c8] w-full object-contain bg-white"
              loading="lazy"
              width="450"
              height="450"
            />
            <figcaption className="mt-2 text-center text-xs font-semibold text-[#5c6a72]">
              Wheel customization: change backgrounds, text size, spin duration, audio, confetti, and elimination mode.
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>⚡</span> Zero Gatekeeping &amp; No Signup
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Start spinning immediately upon landing on the page. No email, account creation, or subscription required.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>🔊</span> Realistic Web Audio Sound Engine
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Includes synthesizer tick clicks synced to slice crossings, accelerating whoosh sounds, and victory fanfare chimes.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>⚖️</span> Custom Weighted Odds
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Assign customized weights to individual slices to reflect custom probabilities for complex giveaways or game balancing.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b] flex items-center gap-2">
                <span>🎨</span> Vibrant Color Palettes &amp; Dark Modes
              </h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Pick from professionally designed palettes (Aurora, Classic, Pastel, Neon) and background themes (Cream, Slate, Night).
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Action Modes */}
        <section id="action-modes" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            4. Action Modes (Normal vs Elimination Mode)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-[#d7cfc2] bg-white p-6 shadow-sm space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1B6B6B]/10 px-3 py-1 text-xs font-bold text-[#1B6B6B]">
                Mode A
              </div>
              <h3 className="text-lg font-bold text-[#10232b]">Normal Mode (Standard Decision)</h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Every slice remains permanently on the wheel after every spin. Perfect for repetitive decision making, such as daily lunch picks, yes/no coin flips, or truth or dare rounds.
              </p>
            </div>
            <div className="rounded-3xl border border-[#d7cfc2] bg-white p-6 shadow-sm space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e85d4c]/10 px-3 py-1 text-xs font-bold text-[#e85d4c]">
                Mode B
              </div>
              <h3 className="text-lg font-bold text-[#10232b]">Elimination Mode (No Repeats)</h3>
              <p className="text-xs sm:text-sm text-[#5c6a72] leading-relaxed">
                Once an option or student is picked, that slice is automatically eliminated from subsequent rounds. Ideal for raffle giveaways, secret santa draws, and classroom student turns.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: File Storage */}
        <section id="file-storage" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            5. File Storage &amp; Local Privacy Guarantee
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            We take your privacy seriously. Unlike cloud-stored alternatives, all your custom entry lists, themes, and spin histories are stored exclusively inside your web browser’s local storage (<code>localStorage</code>).
          </p>
          <div className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-4 text-xs sm:text-sm text-[#3e4c59] flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">🔒</span>
            <span><strong>100% Client-Side Guarantee:</strong> No student names, contest entries, or corporate lists are ever tracked or uploaded to any server.</span>
          </div>
        </section>

        {/* Section 6: Share & Embed */}
        <section id="share-embed" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            6. Share &amp; Embed Options
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            Real Picker Wheel makes it effortless to distribute your custom wheels:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#3e4c59]">
            <li><strong>Shareable URLs:</strong> Generate a unique, encoded URL containing all your custom entries so colleagues and students can open the exact same wheel on their devices.</li>
            <li><strong>Iframe Embed Code:</strong> Use our <strong>Embed</strong> button to copy a lightweight HTML snippet to display a live wheel directly inside your blog, Notion document, WordPress site, or PowerPoint.</li>
          </ul>
        </section>

        {/* Section 7: Popular Use Cases & Real-World Stories */}
        <section id="popular-use-cases" className="scroll-mt-24 space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
              7. Real-World Use Cases: How People Use Real Picker Wheel
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
              Every single day, thousands of teachers, team leads, gamers, and friends use <strong>Real Picker Wheel</strong> to cut through decision fatigue and bring fairness to daily choices. Whether you need an ad-free <strong>wheel of names</strong> for school, a quick <strong>wheel spinner</strong> for party night, or an unbiased <strong>random wheel</strong> to pick lunch, here is how people put our interactive spinner to work in real life:
            </p>
          </div>

          <div className="space-y-6">
            {/* Story 1: Classroom & Education */}
            <div className="rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-7 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1B6B6B]/10 text-2xl">🎓</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#10232b]">The Classroom Favorite: Fair Student Cold-Calling</h3>
                  <span className="text-xs font-semibold text-[#1B6B6B]">Used by Teachers &amp; Educators</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                Teachers used to rely on popsicle sticks in jars or handwritten flashcards to call on students during morning reading or pop quizzes. Today, educators project our <Link to="/education/random-student-generator" className="font-semibold text-[#1B6B6B] hover:underline">random student generator</Link> directly onto the classroom smartboard. When students watch the <strong>random name picker</strong> accelerate with authentic mechanical clicks, nervousness turns into genuine excitement.
              </p>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                Many teachers switch to <strong>Real Picker Wheel</strong> as a lightweight, clean alternative to a traditional <strong>wheel of names</strong> because there are zero intrusive banner ads and zero trackers. When it is time for group work, educators tap into our <Link to="/education/classroom-group-picker" className="font-semibold text-[#1B6B6B] hover:underline">classroom group picker</Link> to divide the entire roster into balanced teams with just one spin.
              </p>
            </div>

            {/* Story 2: Daily Lunch & Workplace Deadlocks */}
            <div className="rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-7 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F2CC8F]/30 text-2xl">🥪</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#10232b]">Ending Decision Paralysis: The 12:30 PM Lunch Debate</h3>
                  <span className="text-xs font-semibold text-[#B36B00]">Used by Coworkers &amp; Busy Professionals</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                Almost every office experiences that classic lunchtime deadlock: <em>"Where should we go today?"</em> followed by ten minutes of <em>"I don't know, anything is fine."</em> Coworkers open our dedicated <Link to="/food/what-should-i-eat-for-lunch" className="font-semibold text-[#1B6B6B] hover:underline">what should i eat for lunch randomizer</Link> on their phone, tap to <strong>spin the wheel</strong>, and settle the debate instantly between deli sandwiches, ramen bowls, fresh sushi, or burritos.
              </p>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                For simpler dilemmas—like who pays for coffee, which project to tackle first, or whether to go to the gym—the <Link to="/games/yes-no-picker-wheel" className="font-semibold text-[#1B6B6B] hover:underline">yes no picker wheel</Link> acts as a modernized digital coin toss with strict 50/50 mathematical fairness.
              </p>
            </div>

            {/* Story 3: Streamers & Giveaways */}
            <div className="rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-7 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e85d4c]/10 text-2xl">🎁</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#10232b]">Transparent Raffles &amp; Stream Giveaways</h3>
                  <span className="text-xs font-semibold text-[#e85d4c]">Used by Streamers, Creators &amp; Event Organizers</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                Nothing builds community trust like verifiable transparency. When content creators host live raffles on Twitch, YouTube, or Discord, they paste subscriber usernames into our <strong>picker wheel</strong> and spin live on stream. The smooth 60 FPS canvas motion and dynamic tick deceleration prove to viewers that no backend rigging is taking place.
              </p>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                With our built-in <strong>Elimination Mode</strong>, winners are automatically removed after each draw, allowing hosts to award 1st, 2nd, and 3rd place prizes without duplicate spins or accidental repeats.
              </p>
            </div>

            {/* Story 4: Game Nights & Social Fun */}
            <div className="rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-7 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1B6B6B]/10 text-2xl">🎲</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#10232b]">Parties &amp; Game Nights: Keeping the Momentum Going</h3>
                  <span className="text-xs font-semibold text-[#1B6B6B]">Used by Friends, Families &amp; Gamers</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                Whether you are gathering around the living room for a sleepover or hosting virtual trivia with distant friends, an interactive <strong>wheel spinner</strong> brings infectious energy. Jump right into our <Link to="/games/truth-or-dare-wheel" className="font-semibold text-[#1B6B6B] hover:underline">truth or dare wheel</Link> for spontaneous party challenges, or spin the <Link to="/games/color-picker-wheel" className="font-semibold text-[#1B6B6B] hover:underline">color picker wheel</Link> for drawing and pictionary prompts.
              </p>
              <p className="text-sm leading-relaxed text-[#3e4c59]">
                Competitive gamers also use our <Link to="/gaming/fortnite-drop-picker" className="font-semibold text-[#1B6B6B] hover:underline">Fortnite drop picker</Link> and <Link to="/teams/team-picker-wheel" className="font-semibold text-[#1B6B6B] hover:underline">team picker wheel</Link> to eliminate squad arguments about landing spots and balanced squad captains.
              </p>
            </div>
          </div>

          {/* Quick-Access Grid to Popular Wheels */}
          <div className="pt-2">
            <h3 className="text-base font-bold text-[#10232b] mb-3">Explore Popular Specialized Wheels:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-semibold">
              <Link to="/games/yes-no-picker-wheel" className="flex items-center gap-2 rounded-xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 hover:border-[#1B6B6B] hover:bg-white transition-colors">
                <span className="text-base">💬</span>
                <span className="truncate">Yes or No Wheel</span>
              </Link>
              <Link to="/food/what-should-i-eat-for-lunch" className="flex items-center gap-2 rounded-xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 hover:border-[#1B6B6B] hover:bg-white transition-colors">
                <span className="text-base">🥪</span>
                <span className="truncate">Lunch Randomizer</span>
              </Link>
              <Link to="/education/random-student-generator" className="flex items-center gap-2 rounded-xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 hover:border-[#1B6B6B] hover:bg-white transition-colors">
                <span className="text-base">🎓</span>
                <span className="truncate">Student Name Picker</span>
              </Link>
              <Link to="/random-wheel" className="flex items-center gap-2 rounded-xl border border-[#1B6B6B] bg-[#1B6B6B]/10 p-3 text-[#1B6B6B] hover:bg-[#1B6B6B] hover:text-white transition-colors">
                <span className="text-base">✨</span>
                <span className="truncate">View All 22+ Tools →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ Section (Matched with FAQPage Schema) */}
        <section id="faq" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            8. Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-bold text-[#10232b]">{faq.question}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">{faq.answer}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b]">Is Real Picker Wheel biased or rigged?</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">
                No. Real Picker Wheel uses JavaScript's cryptographic <code>crypto.getRandomValues()</code> algorithm to determine wheel rotation speed and landing slice. Unless weighted odds are explicitly configured by the user, every entry has an equal mathematical probability.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b]">Is there an entry limit on the wheel?</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">
                Real Picker Wheel effortlessly supports from 2 up to hundreds of entries. The canvas dynamically scales font size to ensure high readability regardless of item count.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#10232b]">Can I embed the wheel on my blog or PowerPoint?</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">
                Yes! Click the <strong>Embed</strong> button located right under the wheel to generate a responsive HTML iframe code snippet ready to paste into any web page or web-enabled slide.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  )
}
