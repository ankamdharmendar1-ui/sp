import { Link } from 'react-router-dom'

interface HomeSeoContentProps {
  faqs: Array<{ question: string; answer: string }>
}

export function HomeSeoContent({ faqs }: HomeSeoContentProps) {
  return (
    <section className="mt-12 border-t border-[#e4d9c8] pt-12 text-[#10232b]">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Intro Guide */}
        <article className="space-y-4">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            What is Real Picker Wheel & How Does It Work?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            <strong>Real Picker Wheel</strong> is a free, instant online decision-making tool designed to help you pick random names, choices, prizes, or options fairly. Whether you are a teacher looking for a random student name picker, a gamer generating random drop locations, a host holding a giveaway, or simply trying to decide what to eat for dinner, our smooth 60 FPS spinning wheel makes every choice 100% unbiased and engaging.
          </p>
        </article>

        {/* 3 Step Process Grid */}
        <div>
          <h3 className="mb-6 text-xl font-bold sm:text-2xl">3 Easy Steps to Use the Random Spinner</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm">
              <div className="mb-3 text-3xl">📝</div>
              <h4 className="text-base font-bold text-[#10232b]">1. Enter Your Choices</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#5c6a72]">
                Type or paste your names or options into the entry list. You can also import CSV files or text lists with a single click.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm">
              <div className="mb-3 text-3xl">🎯</div>
              <h4 className="text-base font-bold text-[#10232b]">2. Spin the Wheel</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#5c6a72]">
                Click anywhere on the wheel or press the Spin button to trigger a smooth rotation with tick sound effects and whooshes.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm">
              <div className="mb-3 text-3xl">🎉</div>
              <h4 className="text-base font-bold text-[#10232b]">3. Get a Fair Winner</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#5c6a72]">
                The wheel lands on a randomly selected slice with victory fanfare and celebratory full-screen sparkles!
              </p>
            </div>
          </div>
        </div>

        {/* Popular Use Cases */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold sm:text-2xl">Popular Ways to Use the Random Picker Wheel</h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm text-[#3e4c59]">
            <li className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-[#d7cfc2]">
              <span className="text-xl">🎓</span>
              <div>
                <strong className="block font-bold text-[#10232b]">Classrooms & Teachers</strong>
                <span className="text-xs text-[#5c6a72]">Pick students fairly for reading, cold calling, or team leaders.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-[#d7cfc2]">
              <span className="text-xl">🍕</span>
              <div>
                <strong className="block font-bold text-[#10232b]">Food & Meal Decisions</strong>
                <span className="text-xs text-[#5c6a72]">Can't decide what to eat? Spin between pizza, tacos, burgers, or sushi.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5 rounded-xl bg-[#fff] p-3.5 border border-[#d7cfc2]">
              <span className="text-xl">🎁</span>
              <div>
                <strong className="block font-bold text-[#10232b]">Raffles & Giveaways</strong>
                <span className="text-xs text-[#5c6a72]">Draw transparent, fair contest winners live on stream or in person.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-[#d7cfc2]">
              <span className="text-xl">🎮</span>
              <div>
                <strong className="block font-bold text-[#10232b]">Gaming & Challenges</strong>
                <span className="text-xs text-[#5c6a72]">Randomize Fortnite drop spots, Apex legends, or Truth or Dare penalties.</span>
              </div>
            </li>
          </ul>
        </article>

        {/* Visible FAQ Accordions for SEO */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold sm:text-2xl">Frequently Asked Questions (FAQ)</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm">
                <h4 className="text-base font-bold text-[#10232b]">{faq.question}</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5c6a72]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
