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
            <li><a href="#popular-use-cases" className="hover:underline flex items-center gap-2"><span className="text-[#5c6a72]">7.</span> Popular Use Cases</a></li>
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
              Follow this simple 3-step walkthrough to customize, spin, and decide with your wheel:
            </p>
          </div>

          {/* Step 1 */}
          <div id="step-1-inputs" className="scroll-mt-24 space-y-4 rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1B6B6B] text-white text-base font-extrabold shadow-sm">1</span>
              <h3 className="text-xl font-black text-[#10232b]">Step 1: Insert Inputs</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#3e4c59]">
              Locate the <strong>Entries</strong> panel on the page. Enter your choices one by one into the input box or click <strong>Import</strong> to paste a full comma-separated list or Excel/CSV roster.
            </p>

            {/* Visual Step UI Mockup (Screenshot equivalent) */}
            <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-5 shadow-inner" aria-label="Step 1 Inputs Mockup">
              <div className="flex items-center justify-between pb-3 border-b border-[#e4d9c8] text-xs font-bold text-[#5c6a72]">
                <span>ENTRY LIST EDITOR PREVIEW</span>
                <span className="rounded-md bg-[#1B6B6B]/10 px-2 py-0.5 text-[#1B6B6B]">Weighted &amp; Colors Active</span>
              </div>
              <div className="mt-4 space-y-2.5">
                <div className="flex gap-2">
                  <div className="flex-1 rounded-xl border border-[#d7cfc2] bg-white px-3.5 py-2.5 text-xs font-medium text-[#10232b] shadow-xs">
                    Alice, Bob, Charlie, David...
                  </div>
                  <div className="rounded-xl bg-[#1B6B6B] px-4 py-2.5 text-xs font-bold text-white shadow-xs">
                    + Add
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-[#d7cfc2] p-2 text-xs font-bold text-[#10232b]">
                    <span className="h-3 w-3 rounded-full bg-[#e85d4c]" /> YES (Weight: 1)
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-[#d7cfc2] p-2 text-xs font-bold text-[#10232b]">
                    <span className="h-3 w-3 rounded-full bg-[#1B6B6B]" /> NO (Weight: 1)
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-[#d7cfc2] p-2 text-xs font-bold text-[#10232b]">
                    <span className="h-3 w-3 rounded-full bg-[#F2CC8F]" /> MAYBE (Weight: 1)
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-[#d7cfc2] p-2 text-xs font-bold text-[#10232b]">
                    <span className="h-3 w-3 rounded-full bg-[#81B29A]" /> RE-SPIN (Weight: 1)
                  </div>
                </div>
              </div>
              <figcaption className="mt-3 text-center text-xs font-semibold text-[#7a8a92]">
                Figure 1.1: Add, edit, randomize order, or adjust individual slice weights and colors.
              </figcaption>
            </figure>
          </div>

          {/* Step 2 */}
          <div id="step-2-spin" className="scroll-mt-24 space-y-4 rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1B6B6B] text-white text-base font-extrabold shadow-sm">2</span>
              <h3 className="text-xl font-black text-[#10232b]">Step 2: Spin the Wheel</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#3e4c59]">
              Click anywhere directly on the wheel canvas or trigger it from your controls. The wheel accelerates with realistic momentum physics and emits sensory audio feedback while rotating.
            </p>

            {/* Visual Step UI Mockup (Screenshot equivalent) */}
            <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-5 shadow-inner" aria-label="Step 2 Spin Wheel Mockup">
              <div className="flex items-center justify-between pb-3 border-b border-[#e4d9c8] text-xs font-bold text-[#5c6a72]">
                <span>WHEEL ROTATION CANVAS PREVIEW</span>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-emerald-800">60 FPS Hardware-Accelerated</span>
              </div>
              <div className="my-6 flex flex-col items-center justify-center gap-3">
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#10232b] bg-radial from-[#F2CC8F] via-[#e85d4c] to-[#1B6B6B] shadow-lg animate-spin" style={{ animationDuration: '4s' }}>
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-[#10232b] shadow-md flex items-center justify-center text-white text-[10px] font-black">
                    SPIN
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-[14px] border-t-[#e85d4c] filter drop-shadow-sm" />
                </div>
                <p className="text-xs font-bold text-[#10232b]">Clicking anywhere on the wheel starts rotation</p>
              </div>
              <figcaption className="text-center text-xs font-semibold text-[#7a8a92]">
                Figure 1.2: Smooth angular deceleration with Web Audio click ticks and needle pointer.
              </figcaption>
            </figure>
          </div>

          {/* Step 3 */}
          <div id="step-3-result" className="scroll-mt-24 space-y-4 rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1B6B6B] text-white text-base font-extrabold shadow-sm">3</span>
              <h3 className="text-xl font-black text-[#10232b]">Step 3: Get Result &amp; Action Modes</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#3e4c59]">
              The wheel halts cleanly on the winning slice. A celebration dialog opens with full-screen party sparkles and confetti. From here you can copy the result, share it, or eliminate the item.
            </p>

            {/* Visual Step UI Mockup (Screenshot equivalent) */}
            <figure className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-5 shadow-inner" aria-label="Step 3 Winner Result Dialog Mockup">
              <div className="flex items-center justify-between pb-3 border-b border-[#e4d9c8] text-xs font-bold text-[#5c6a72]">
                <span>WINNER POPUP DIALOG PREVIEW</span>
                <span className="rounded-md bg-amber-100 px-2 py-0.5 text-amber-900">Celebration Fanfare Active</span>
              </div>
              <div className="my-4 mx-auto max-w-sm rounded-2xl border-2 border-[#c5b84c] bg-white p-5 text-center shadow-md">
                <span className="text-3xl font-black text-[#10232b]">YES</span>
                <p className="text-xs font-semibold text-[#5c6a72] mt-0.5">Selected Winner</p>
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 rounded-xl bg-[#ffb703] py-2 text-xs font-black text-white shadow-xs">
                    DONE (Keep)
                  </div>
                  <div className="rounded-xl border border-[#d7cfc2] px-3 py-2 text-xs font-bold text-[#3e4c59]">
                    Copy Result
                  </div>
                </div>
              </div>
              <figcaption className="text-center text-xs font-semibold text-[#7a8a92]">
                Figure 1.3: Winner modal with instant clipboard copy, celebration sparkles, and action choices.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Section 3: Key Features */}
        <section id="features" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            3. Key Features &amp; Settings
          </h2>
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

        {/* Section 7: Popular Use Cases */}
        <section id="popular-use-cases" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            7. Popular Use Cases &amp; Category Presets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/education/random-student-generator" className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm hover:border-[#1B6B6B] transition-colors">
              <span className="text-2xl" aria-hidden="true">🎓</span>
              <div>
                <h3 className="font-bold text-[#10232b]">Random Student Name Picker</h3>
                <p className="mt-1 text-xs text-[#5c6a72]">Pick students fairly for reading, cold calling, and classroom questions.</p>
              </div>
            </Link>
            <Link to="/food/what-to-eat-wheel" className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm hover:border-[#1B6B6B] transition-colors">
              <span className="text-2xl" aria-hidden="true">🍕</span>
              <div>
                <h3 className="font-bold text-[#10232b]">What to Eat Decision Wheel</h3>
                <p className="mt-1 text-xs text-[#5c6a72]">Stop dinner arguments by spinning for pizza, burgers, sushi, or tacos.</p>
              </div>
            </Link>
            <Link to="/gaming/fortnite-drop-picker" className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm hover:border-[#1B6B6B] transition-colors">
              <span className="text-2xl" aria-hidden="true">🎮</span>
              <div>
                <h3 className="font-bold text-[#10232b]">Gaming POI &amp; Character Drop Picker</h3>
                <p className="mt-1 text-xs text-[#5c6a72]">Random landing spots and character challenges for Fortnite and Apex.</p>
              </div>
            </Link>
            <Link to="/games/truth-or-dare-wheel" className="flex items-start gap-3.5 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm hover:border-[#1B6B6B] transition-colors">
              <span className="text-2xl" aria-hidden="true">🎲</span>
              <div>
                <h3 className="font-bold text-[#10232b]">Party Games &amp; Truth or Dare</h3>
                <p className="mt-1 text-xs text-[#5c6a72]">Fun sleepover games, team assignments, and giveaway prize draws.</p>
              </div>
            </Link>
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
