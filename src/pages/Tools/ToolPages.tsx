import { Link } from 'react-router-dom'
import { Seo } from '../../components/Seo/Seo'
import { WHEEL_TEMPLATES } from '../../data/templates'

export function RandomWheelPage() {
  const categories = [
    { title: 'Education & Classroom', templates: WHEEL_TEMPLATES.filter(t => t.category === 'education') },
    { title: 'Teams & Sports', templates: WHEEL_TEMPLATES.filter(t => t.category === 'teams') },
    { title: 'Food & Dining', templates: WHEEL_TEMPLATES.filter(t => t.category === 'food') },
    { title: 'Geography & Travel', templates: WHEEL_TEMPLATES.filter(t => t.category === 'geography') },
    { title: 'Gaming & Esports', templates: WHEEL_TEMPLATES.filter(t => t.category === 'gaming') },
    { title: 'Party & Games', templates: WHEEL_TEMPLATES.filter(t => t.category === 'games') },
    { title: 'Decision & Utility Tools', templates: WHEEL_TEMPLATES.filter(t => t.category === 'tools') },
  ]

  return (
    <>
      <Seo
        title="All Random Picker Wheel Tools"
        description="Browse all random picker wheels, name generators, classroom tools, food pickers, and decision makers."
        path="/random-wheel"
      />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold sm:text-4xl text-[#10232b]">All Picker Wheel Tools</h1>
          <p className="mt-2 text-sm text-[#5c6a72]">
            Explore our complete collection of free online spinning wheels. Click any tool below to load its wheel instantly.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl font-bold border-b border-[#e4d9c8] pb-2 text-[#10232b]">{cat.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.templates.map((tpl) => (
                  <Link
                    key={tpl.slug}
                    to={`/${tpl.category}/${tpl.slug}`}
                    className="flex items-start gap-3 rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm hover:border-[#1B6B6B] hover:shadow-md transition-all group"
                  >
                    <div className="text-3xl shrink-0 p-2 rounded-xl bg-[#fbf6ee]">🎯</div>
                    <div>
                      <h3 className="font-bold text-[#10232b] group-hover:text-[#1B6B6B] transition-colors">{tpl.title}</h3>
                      <p className="mt-1 text-xs text-[#5c6a72] line-clamp-2">{tpl.metaDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

export function RandomNamePickerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Seo
        title="Random Name Picker Wheel"
        description="Pick a random name from a list with a spinning wheel. Paste a class roster, shuffle, and spin until everyone has had a turn."
        path="/random-name-picker"
      />
      <h1 className="text-3xl font-extrabold text-[#10232b]">Random Name Picker</h1>
      <p className="mt-3 leading-relaxed text-[#3e4c59]">
        Paste names one per line, then spin. Duplicate names stay as separate slices. Enable “remove winner after each spin” if you want a no-repeat draw.
      </p>
      <div className="mt-6">
        <Link className="inline-block rounded-xl bg-[#1B6B6B] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#155353]" to="/education/random-student-generator">
          Open Random Name Picker Wheel →
        </Link>
      </div>
    </main>
  )
}

export function WheelSpinnerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Seo
        title="Custom Wheel Spinner"
        description="A wheel spinner for random choices. Customize colors, spin duration, sounds, and share a link to your wheel."
        path="/wheel-spinner"
      />
      <h1 className="text-3xl font-extrabold text-[#10232b]">Wheel Spinner</h1>
      <p className="mt-3 leading-relaxed text-[#3e4c59]">
        Spin duration, pointer style, and palettes are in the customization panel. Turn sounds and confetti off anytime.
      </p>
      <div className="mt-6">
        <Link className="inline-block rounded-xl bg-[#1B6B6B] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#155353]" to="/">
          Open Wheel Spinner →
        </Link>
      </div>
    </main>
  )
}

