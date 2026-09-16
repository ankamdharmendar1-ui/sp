import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Seo } from '../../components/Seo/Seo'
import { WHEEL_TEMPLATES } from '../../data/templates'
import { useWheel } from '../../hooks/useWheelStore'
import { WheelWorkbench } from '../Home/WheelWorkbench'

export function DynamicWheelPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>()
  const { loadTemplateWheel } = useWheel()

  const template = WHEEL_TEMPLATES.find(
    (t) => t.category === category && t.slug === slug
  )

  useEffect(() => {
    if (template) {
      loadTemplateWheel(template.title, template.defaultOptions)
    }
  }, [template, loadTemplateWheel])

  if (!template) {
    return <Navigate to="/" replace />
  }

  const relatedTools = WHEEL_TEMPLATES.filter(
    (t) => t.category === template.category && t.slug !== template.slug
  ).slice(0, 3)

  const toolContent = (
    <article className="mt-16 border-t border-[#e4d9c8] pt-12 text-[#10232b]">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-semibold text-[#5c6a72]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-[#1B6B6B] transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/random-wheel" className="hover:text-[#1B6B6B] transition-colors">Tools</Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-[#3e4c59]">{template.categoryName}</span>
            </li>
            <li>/</li>
            <li className="font-bold text-[#10232b] truncate max-w-[200px] sm:max-w-none">
              {template.title}
            </li>
          </ol>
        </nav>

        {/* Section 1: About This Tool */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            About {template.title}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            {template.metaDescription}
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#3e4c59]">
            Powered by <strong>Real Picker Wheel</strong>, this tool guarantees 100% fair and unbiased results with every spin using a cryptographic pseudo-random number generator algorithm. All options are processed purely in your browser for absolute privacy and zero lag.
          </p>
        </section>

        {/* Section 2: How to Use */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
            How to Use This Wheel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1B6B6B] text-white text-sm font-bold">1</span>
              <h3 className="text-sm font-bold text-[#10232b]">Review or Edit Choices</h3>
              <p className="text-xs text-[#5c6a72] leading-relaxed">
                Use the pre-filled options or type/paste your own items into the entries panel on the right.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1B6B6B] text-white text-sm font-bold">2</span>
              <h3 className="text-sm font-bold text-[#10232b]">Spin the Wheel</h3>
              <p className="text-xs text-[#5c6a72] leading-relaxed">
                Click anywhere on the wheel or press the center SPIN hub to start the 60 FPS spinning animation.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1B6B6B] text-white text-sm font-bold">3</span>
              <h3 className="text-sm font-bold text-[#10232b]">Instant Fair Result</h3>
              <p className="text-xs text-[#5c6a72] leading-relaxed">
                View the selected winner popup, review spin history, or choose to eliminate the winner for no-repeat draws.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Tool FAQs */}
        {template.faq && template.faq.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10232b]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {template.faq.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-[#10232b]">{item.question}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#5c6a72]">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Related Wheels */}
        {relatedTools.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#10232b]">
              More {template.categoryName} Wheels
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedTools.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/${rel.category}/${rel.slug}`}
                  className="rounded-2xl border border-[#d7cfc2] bg-white p-4 shadow-sm hover:border-[#1B6B6B] transition-colors group block"
                >
                  <span className="text-2xl" aria-hidden="true">🎯</span>
                  <h3 className="mt-2 text-sm font-bold text-[#10232b] group-hover:text-[#1B6B6B] transition-colors">
                    {rel.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5c6a72] line-clamp-2">
                    {rel.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )

  return (
    <>
      <Seo
        title={template.title}
        description={template.metaDescription}
        path={`/${template.category}/${template.slug}`}
        faq={template.faq}
      />
      <WheelWorkbench
        heading={template.h1}
        subheading={template.metaDescription}
        toolContent={toolContent}
      />
    </>
  )
}

