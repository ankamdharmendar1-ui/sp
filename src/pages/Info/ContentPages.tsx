import { InfoPage } from './InfoPage'

export function HowToUsePage() {
  return (
    <InfoPage
      title="How to Use Real Picker Wheel - Complete Guide"
      description="Step-by-step tutorial on how to insert inputs, customize spin speed and duration, use weighted odds, save lists locally, and share random wheels."
      path="/how-to-use"
    >
      <div className="space-y-8 text-[#10232b]">
        <header className="space-y-2 border-b border-[#e4d9c8] pb-6">
          <h1 className="text-3xl font-black sm:text-4xl text-[#10232b]">How to Use Real Picker Wheel</h1>
          <p className="text-sm font-semibold text-[#5c6a72]">
            Comprehensive guide to creating, customizing, and spinning random decision wheels on any device.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#10232b]">Step 1: Adding Your Entries &amp; Choices</h2>
          <p className="text-sm text-[#3e4c59] leading-relaxed">
            There are two quick ways to add options to your wheel:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm text-[#3e4c59]">
            <li><strong>Single Item Entry:</strong> Type your choice into the <em>Add an item</em> bar and press <strong>Add</strong> or hit <code>Enter</code> on your keyboard.</li>
            <li><strong>Bulk Paste / Import:</strong> Paste a multi-line roster or comma-separated list into the text area. You can also import existing <code>.csv</code> or <code>.txt</code> files directly.</li>
            <li><strong>Weighted Odds:</strong> Want higher probability for certain choices? Add a hyphen and number (for example: <code>Alice - 10</code> or <code>Prize - 5</code>) to give that slice larger angular weight on the wheel.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#10232b]">Step 2: Customizing Wheel Behavior &amp; Settings</h2>
          <p className="text-sm text-[#3e4c59] leading-relaxed">
            Scroll to the <strong>Wheel customization</strong> section to configure:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm text-[#3e4c59]">
            <li><strong>Spin Duration:</strong> Slide the duration bar between 1 and 30 seconds for quick draws or extended dramatic suspense.</li>
            <li><strong>Audio Feedback:</strong> Toggle mechanical tick clicks, acceleration whooshes, and victory fanfare chimes.</li>
            <li><strong>Remove Winner Mode (Elimination):</strong> Turn on <em>Remove winner after each spin</em> to eliminate chosen items automatically without repeats.</li>
            <li><strong>Color Themes:</strong> Choose between Aurora, Pastel, Classic, and Neon palettes, or switch between Cream, Slate, and Night background modes.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#10232b]">Step 3: Spinning &amp; Managing Results</h2>
          <p className="text-sm text-[#3e4c59] leading-relaxed">
            Click anywhere directly on the wheel canvas or tap the center <strong>SPIN</strong> hub. The wheel uses a cryptographically secure random number generator algorithm to guarantee 100% fair and unbiased results.
          </p>
          <p className="text-sm text-[#3e4c59] leading-relaxed">
            When the wheel halts, celebratory party papers burst across the screen. From the winner dialog, you can copy the result or keep/remove the winning slice. Previous winners are automatically logged in your <strong>Spin history</strong>.
          </p>
        </section>

        <div className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-5">
          <h3 className="font-bold text-[#10232b] mb-1 text-sm">Need help or have a feature suggestion?</h3>
          <p className="text-xs text-[#5c6a72]">
            Contact our developer team at{' '}
            <a className="font-bold text-[#1B6B6B] underline" href="mailto:contact@realpickerwheel.com">
              contact@realpickerwheel.com
            </a>.
          </p>
        </div>
      </div>
    </InfoPage>
  )
}

export function AboutPage() {
  return (
    <InfoPage
      title="About Real Picker Wheel - Independent Decision Maker"
      description="Learn about Real Picker Wheel, our commitment to 100% client-side data privacy, unbiased random selection algorithms, and fast web technology."
      path="/about"
    >
      <div className="space-y-8 text-[#10232b]">
        <header className="space-y-2 border-b border-[#e4d9c8] pb-6">
          <h1 className="text-3xl font-black sm:text-4xl text-[#10232b]">About Real Picker Wheel</h1>
          <p className="text-sm font-semibold text-[#5c6a72]">
            Built with modern web standards for classroom teachers, event hosts, gamers, and teams worldwide.
          </p>
        </header>

        <section className="space-y-4 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">Our Mission</h2>
          <p>
            <strong>Real Picker Wheel</strong> (realpickerwheel.com) was created to provide an ultra-fast, visually polished, and completely unbiased random decision spinner free of aggressive advertisements, paywalls, and privacy-invasive tracking scripts.
          </p>
          <p>
            Whether selecting students in a crowded classroom, drawing transparent contest winners live on stream, choosing what to eat for dinner, or picking a random game landing zone, our mission is to deliver an authentic 60 FPS spinning wheel experience that works reliably on any phone, tablet, or desktop.
          </p>
        </section>

        <section className="space-y-4 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">100% Client-Side Privacy Architecture</h2>
          <p>
            Most online decision tools upload your private rosters, student names, and meeting notes to remote servers. Real Picker Wheel operates on a strict <strong>client-side architecture</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Your entries and settings are stored strictly in your browser’s local storage (<code>localStorage</code>).</li>
            <li>No student names, raffle tickets, or company data are ever saved on external databases.</li>
            <li>No user accounts, email sign-ups, or passwords are required to unlock any feature.</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">Verified Mathematical Fairness</h2>
          <p>
            Real Picker Wheel uses the browser's native cryptographic pseudo-random number generator (PRNG) via the Web Cryptography API. Every slice has an identical mathematical probability of winning, unless you intentionally configure custom weighted multipliers.
          </p>
        </section>

        <section className="rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-5 space-y-2">
          <h3 className="font-bold text-[#10232b] text-base">Contact &amp; Inquiries</h3>
          <p className="text-xs text-[#5c6a72] leading-relaxed">
            For partnership opportunities, school district inquiries, bug reports, or general feedback, email us directly at{' '}
            <a className="font-bold text-[#1B6B6B] underline" href="mailto:contact@realpickerwheel.com">
              contact@realpickerwheel.com
            </a>.
          </p>
        </section>
      </div>
    </InfoPage>
  )
}

export function ContactPage() {
  return (
    <InfoPage
      title="Contact Us - Real Picker Wheel Support & Feedback"
      description="Contact the Real Picker Wheel team. Send feedback, report bugs, request custom wheel features, or ask privacy questions at contact@realpickerwheel.com."
      path="/contact"
    >
      <div className="space-y-8 text-[#10232b]">
        <header className="space-y-2 border-b border-[#e4d9c8] pb-6">
          <h1 className="text-3xl font-black sm:text-4xl text-[#10232b]">Contact Real Picker Wheel</h1>
          <p className="text-sm font-semibold text-[#5c6a72]">
            We value your feedback and are dedicated to improving Real Picker Wheel for teachers, organizers, and teams.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#d7cfc2] bg-white p-6 shadow-sm space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B6B6B]/10 text-[#1B6B6B] text-xl">
              ✉️
            </div>
            <h2 className="text-lg font-bold text-[#10232b]">Official Support Email</h2>
            <p className="text-xs text-[#5c6a72] leading-relaxed">
              For general inquiries, school implementation, technical bugs, or feedback:
            </p>
            <a
              href="mailto:contact@realpickerwheel.com"
              className="inline-block rounded-xl bg-[#1B6B6B] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#145252] transition-colors"
            >
              contact@realpickerwheel.com
            </a>
          </div>

          <div className="rounded-2xl border border-[#d7cfc2] bg-white p-6 shadow-sm space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffb703]/20 text-[#b38000] text-xl">
              ⚡
            </div>
            <h2 className="text-lg font-bold text-[#10232b]">Response Time</h2>
            <p className="text-xs text-[#5c6a72] leading-relaxed">
              Our engineering and support team reviews all inquiries promptly, typically responding within <strong>24 to 48 business hours</strong>.
            </p>
          </div>
        </div>

        <section className="rounded-3xl border border-[#d7cfc2] bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-[#10232b]">When Reporting a Technical Bug</h2>
          <p className="text-xs sm:text-sm text-[#3e4c59] leading-relaxed">
            To help us resolve issues as fast as possible, please include:
          </p>
          <ul className="list-disc space-y-1.5 pl-6 text-xs sm:text-sm text-[#5c6a72]">
            <li>Your device type and operating system (e.g. Windows 11, macOS, iOS, Android).</li>
            <li>Your browser version (e.g. Chrome, Safari, Edge, Firefox).</li>
            <li>A brief summary of what happened and steps to reproduce the issue.</li>
            <li><em>Note:</em> For student privacy, please do not include real student names or confidential rosters in screenshots.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-[#d7cfc2] bg-[#fbf6ee] p-6 space-y-3">
          <h2 className="text-lg font-bold text-[#10232b]">Follow Us on Social Media</h2>
          <p className="text-xs sm:text-sm text-[#5c6a72]">
            Connect with our community, watch wheel tutorials, and receive feature updates:
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="https://www.instagram.com/realpickerwheel_com?stkn=OGJqNGllMXd0NWxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#d7cfc2] px-3.5 py-2 text-xs font-bold text-[#e1306c] shadow-xs hover:border-[#e1306c] transition-colors"
            >
              Instagram (@realpickerwheel_com)
            </a>
            <a
              href="https://www.facebook.com/share/1GeqhThN2T/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#d7cfc2] px-3.5 py-2 text-xs font-bold text-[#1877f2] shadow-xs hover:border-[#1877f2] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@realpickerwheel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#d7cfc2] px-3.5 py-2 text-xs font-bold text-[#ff0000] shadow-xs hover:border-[#ff0000] transition-colors"
            >
              YouTube (@realpickerwheel)
            </a>
          </div>
        </section>
      </div>
    </InfoPage>
  )
}

export function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy - Real Picker Wheel"
      description="Read the official Privacy Policy for Real Picker Wheel. Understand our zero-server data storage model, local client-side privacy, and COPPA/GDPR compliance."
      path="/privacy"
    >
      <div className="space-y-8 text-[#10232b]">
        <header className="space-y-2 border-b border-[#e4d9c8] pb-6">
          <h1 className="text-3xl font-black sm:text-4xl text-[#10232b]">Privacy Policy</h1>
          <p className="text-xs font-bold uppercase tracking-wider text-[#1B6B6B]">Last Updated: September 15, 2026</p>
        </header>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">1. Introduction &amp; Privacy Commitment</h2>
          <p>
            Real Picker Wheel (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operated via <strong>realpickerwheel.com</strong>, provides online random choice selection and spinning wheel utilities. We firmly believe that your personal data belongs to you. This Privacy Policy details our data minimization practices, our client-side storage architecture, and how we uphold user confidentiality.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">2. Client-Side Data Storage (No Remote Database)</h2>
          <p>
            Unlike cloud-hosted tools that transmit and store user data on remote web servers, Real Picker Wheel is architected around a <strong>zero-knowledge, client-side privacy model</strong>:
          </p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li><strong>Entry Lists &amp; Rosters:</strong> All names, choices, numbers, custom slice colors, weights, and spin histories you create are stored exclusively in your web browser&rsquo;s HTML5 Web Storage (<code>localStorage</code>).</li>
            <li><strong>No Account Required:</strong> You do not need an account, email address, or login credentials to access any feature on our website.</li>
            <li><strong>Data Deletion:</strong> You can completely erase your stored lists at any time by clicking &ldquo;Clear all&rdquo; in the application or by clearing your browser cache/cookies.</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">3. Shareable URLs &amp; Embeds</h2>
          <p>
            When you create a shareable URL or use our Embed builder, your entry parameters are encoded directly into the URL query string. These parameters are parsed locally by the recipient&rsquo;s browser and are never uploaded or saved to any database on our servers.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">4. Children&rsquo;s Privacy &amp; Educational Compliance (COPPA / FERPA)</h2>
          <p>
            Real Picker Wheel is widely used in educational classrooms, elementary schools, and universities. Because we collect zero personally identifiable information (PII) from students and store all classroom rosters locally on the teacher&rsquo;s browser, our platform complies with the Children&rsquo;s Online Privacy Protection Act (COPPA) and Family Educational Rights and Privacy Act (FERPA) standards.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">5. Server Logs &amp; Technical Analytics</h2>
          <p>
            When you access our website, standard web server logs may temporarily log technical, non-personally identifiable diagnostic information such as IP address (anonymized), browser type, referring URL, and page request timestamps. This information is utilized solely to maintain server uptime, mitigate DDoS attacks, and optimize Core Web Vitals performance.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">6. Contact Information &amp; Data Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy, your rights under GDPR/CCPA, or our data handling practices, please contact us at:
          </p>
          <div className="rounded-2xl border border-[#d7cfc2] bg-white p-4">
            <p className="font-bold text-[#10232b]">Real Picker Wheel Privacy Team</p>
            <p className="text-xs text-[#5c6a72] mt-1">Website: <a className="underline text-[#1B6B6B]" href="https://www.realpickerwheel.com">https://www.realpickerwheel.com</a></p>
            <p className="text-xs text-[#5c6a72] mt-1">Direct Contact: <a className="underline font-bold text-[#1B6B6B]" href="mailto:contact@realpickerwheel.com">contact@realpickerwheel.com</a></p>
          </div>
        </section>
      </div>
    </InfoPage>
  )
}

export function TermsPage() {
  return (
    <InfoPage
      title="Terms of Service - Real Picker Wheel"
      description="Read the official Terms of Service and user agreement governing your use of the free random wheel spinner at realpickerwheel.com."
      path="/terms"
    >
      <div className="space-y-8 text-[#10232b]">
        <header className="space-y-2 border-b border-[#e4d9c8] pb-6">
          <h1 className="text-3xl font-black sm:text-4xl text-[#10232b]">Terms of Service</h1>
          <p className="text-xs font-bold uppercase tracking-wider text-[#1B6B6B]">Last Updated: September 15, 2026</p>
        </header>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">1. Acceptance of Terms</h2>
          <p>
            By accessing or using <strong>Real Picker Wheel</strong> (accessible at realpickerwheel.com), you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">2. Permitted Use &amp; Educational Utility</h2>
          <p>
            Real Picker Wheel is a free interactive utility intended for educational activities, classroom management, casual team formation, gaming, and personal decision making.
          </p>
          <ul className="list-disc space-y-1.5 pl-6">
            <li>You may use the wheel for personal, educational, and commercial presentations, live streaming, or content creation.</li>
            <li>You may embed the wheel into websites, learning management systems (Canvas, Google Classroom, Blackboard), and digital slides.</li>
            <li>
              <strong>Non-Gambling Disclaimer:</strong> Real Picker Wheel is <strong>not</strong> a certified gambling device and must not be used for illegal lotteries, commercial gambling, or state-regulated sweepstakes requiring certified gaming hardware.
            </li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">3. Intellectual Property Rights</h2>
          <p>
            The software, visual designs, graphics, sound algorithms, logos, and custom code comprising Real Picker Wheel are the intellectual property of Real Picker Wheel and are protected under international copyright and intellectual property laws. You retain full copyright ownership of any text, names, or list content you enter into the application.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">4. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          <p>
            Real Picker Wheel is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. Under no circumstances shall Real Picker Wheel or its operators be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use this website.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#3e4c59] leading-relaxed">
          <h2 className="text-xl font-bold text-[#10232b]">5. Contact &amp; Legal Notices</h2>
          <p>
            Questions or inquiries regarding these Terms of Service should be directed to:
          </p>
          <div className="rounded-2xl border border-[#d7cfc2] bg-white p-4">
            <p className="font-bold text-[#10232b]">Real Picker Wheel Legal Department</p>
            <p className="text-xs text-[#5c6a72] mt-1">Official Domain: <a className="underline text-[#1B6B6B]" href="https://www.realpickerwheel.com">https://www.realpickerwheel.com</a></p>
            <p className="text-xs text-[#5c6a72] mt-1">Legal Inquiries: <a className="underline font-bold text-[#1B6B6B]" href="mailto:contact@realpickerwheel.com">contact@realpickerwheel.com</a></p>
          </div>
        </section>
      </div>
    </InfoPage>
  )
}
