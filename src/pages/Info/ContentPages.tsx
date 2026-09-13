import { Link } from 'react-router-dom'
import { InfoPage } from './InfoPage'

export function HowToUsePage() {
  return (
    <InfoPage
      title="How to use"
      description="How to add entries, spin the random picker wheel, use weights, save wheels locally, and share a link."
      path="/how-to-use"
    >
      <h1 className="text-4xl font-extrabold">How to use Real Picker Wheel</h1>
      <ol className="list-decimal space-y-3 pl-5">
        <li>Add items one at a time, or paste a newline-separated list.</li>
        <li>Press SPIN. The wheel rotates for a few seconds and stops on the selected slice.</li>
        <li>Keep the winner, remove it, or spin again. History stores recent results in this browser.</li>
        <li>Optional: turn on weighted mode and give larger numbers to items that should appear more often.</li>
        <li>Save extra wheels (students, food, activities) and switch between them. Share copies a local link.</li>
      </ol>
      <p>
        Start on the <Link className="font-semibold text-[#1B6B6B]" to="/">home wheel</Link>. Nothing is uploaded; your
        lists stay in this browser unless you export a file or send a share link.
      </p>
    </InfoPage>
  )
}

export function AboutPage() {
  return (
    <InfoPage
      title="About"
      description="About Real Picker Wheel — an original random wheel spinner for names, prizes, and everyday choices."
      path="/about"
    >
      <h1 className="text-4xl font-extrabold">About</h1>
      <p>
        Real Picker Wheel is a fast random selector. The visual stop matches the chosen result: the algorithm picks a
        slice first, then the animation lands on that same slice.
      </p>
      <p>
        The site is built for classrooms, teams, and casual decisions. It is an original product for
        realpickerwheel.com — not a copy of other wheel brands.
      </p>
    </InfoPage>
  )
}

export function ContactPage() {
  return (
    <InfoPage
      title="Contact"
      description="Contact Real Picker Wheel about the random wheel spinner at realpickerwheel.com."
      path="/contact"
    >
      <h1 className="text-4xl font-extrabold">Contact</h1>
      <p>
        Questions about the wheel, privacy, or a bug? Email{' '}
        <a className="font-semibold text-[#1B6B6B]" href="mailto:hello@realpickerwheel.com">
          hello@realpickerwheel.com
        </a>
        .
      </p>
      <p>Include your browser and a short description. Do not send personal class rosters unless you must.</p>
    </InfoPage>
  )
}

export function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      description="Learn how Real Picker Wheel handles data, local storage, analytics, and browser privacy."
      path="/privacy"
    >
      <div className="prose prose-slate max-w-none space-y-6">
        <h1 className="text-4xl font-black text-[#10232b]">Privacy Policy</h1>
        <p className="text-sm font-semibold text-[#5c6a72]">Effective Date: September 13, 2026</p>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">1. Overview</h2>
          <p>
            At Real Picker Wheel, accessible via realpickerwheel.com, we respect your privacy and believe that your data belongs to you. This Privacy Policy explains our practices regarding the collection, storage, and processing of information when you interact with our random decision wheel tool.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">2. Local Browser Storage (Client-Side Storage)</h2>
          <p>
            We operate on a privacy-first model. The lists, custom names, weighted settings, and spin history you create are saved locally inside your web browser using HTML5 Web Storage (<code className="rounded bg-[#f4efe4] px-1 py-0.5 text-xs">localStorage</code>). 
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Your decision lists are never transmitted or stored on remote servers.</li>
            <li>You can clear your stored wheels at any time by clearing your browser cache or site data.</li>
            <li>We do not require user account creation, passwords, or personal profile registration to use our services.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">3. Shareable URL Links</h2>
          <p>
            If you choose to use our "Share" feature, your current list of entries is securely compressed and appended directly into the URL fragment. When you share this link with someone, they open a copy of your wheel locally on their device. We do not store or track the links you generate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">4. Analytics & Technical Logs</h2>
          <p>
            To keep Real Picker Wheel reliable and performant, standard server log files may automatically log non-identifying technical information such as browser type, operating system version, referring page, timestamp, and generalized IP address. This data is aggregated strictly for performance optimization and abuse prevention.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">5. Contacting Us</h2>
          <p>
            If you have questions, feedback, or privacy concerns about this document, feel free to reach out to us at{' '}
            <a className="font-bold text-[#1B6B6B] underline" href="mailto:hello@realpickerwheel.com">
              hello@realpickerwheel.com
            </a>.
          </p>
        </section>
      </div>
    </InfoPage>
  )
}

export function TermsPage() {
  return (
    <InfoPage
      title="Terms of Service"
      description="Terms of service and usage conditions for Real Picker Wheel."
      path="/terms"
    >
      <div className="prose prose-slate max-w-none space-y-6">
        <h1 className="text-4xl font-black text-[#10232b]">Terms of Service</h1>
        <p className="text-sm font-semibold text-[#5c6a72]">Effective Date: September 13, 2026</p>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">1. Acceptance of Terms</h2>
          <p>
            By visiting or using Real Picker Wheel (realpickerwheel.com), you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, please discontinue using the website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">2. Permitted Use & Entertainment Purpose</h2>
          <p>
            Real Picker Wheel provides random selection tools intended for educational activities, classroom name picking, team assignments, gaming, and everyday decision making. 
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>The tool is provided free of charge for personal, commercial, and educational use.</li>
            <li>
              Real Picker Wheel is <strong>not</strong> designed or certified for official state-regulated lotteries, legal sweepstakes, high-stakes raffles, or commercial gambling activities.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">3. User Content & Data Responsibility</h2>
          <p>
            You retain full ownership of any text or names entered into the wheel. You are solely responsible for ensuring that the content you input does not violate third-party rights, privacy regulations, or contain sensitive personally identifiable information when creating share links.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">4. Disclaimer of Warranties</h2>
          <p>
            Real Picker Wheel is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not guarantee uninterrupted availability, error-free operation, or specific outcomes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[#10232b]">5. Modifications to Terms</h2>
          <p>
            We reserve the right to revise or update these terms at any time. Continued use of the website following any changes constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>
    </InfoPage>
  )
}
