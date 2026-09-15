import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { SITE_NAME, makeWheel } from '../../data/defaults'
import { useWheel } from '../../hooks/useWheelStore'

const links = [
  { to: '/', label: 'Wheel' },
  { to: '/how-to-use', label: 'How to use' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function AppShell() {
  const navigate = useNavigate()
  const { wheels, switchWheel } = useWheel()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  const toolsList = [
    { label: 'Picker Wheel', preset: 'Classroom names', icon: '🎯' },
    { label: 'State Picker Wheel', preset: 'States', icon: '📍', labels: ['California', 'Texas', 'Florida', 'New York', 'Ohio', 'Illinois', 'Georgia', 'North Carolina'] },
    { label: 'NBA Picker Wheel', preset: 'NBA Teams', icon: '🏀', labels: ['Lakers', 'Celtics', 'Warriors', 'Bulls', 'Heat', 'Nets', 'Bucks', 'Suns'] },
    { label: 'Team Picker Wheel', preset: 'Team Generator', icon: '👥', labels: ['Team A', 'Team B', 'Team C', 'Team D'] },
    { label: 'Color Picker Wheel', preset: 'Color Picker', icon: '🎨', labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Teal'] },
    { label: 'NFL Picker Wheel', preset: 'NFL Teams', icon: '🏈', labels: ['Chiefs', 'Eagles', '49ers', 'Cowboys', 'Bills', 'Packers', 'Patriots', 'Rams'] },
    { label: 'Yes No Picker Wheel', preset: 'Yes or No', icon: '💬', labels: ['YES', 'NO', 'YES', 'NO', 'YES', 'NO', 'YES', 'NO'] },
    { label: 'Image Picker Wheel', to: '/wheel-spinner', icon: '🖼️' },
    { label: 'Flag Quiz Picker Wheel', preset: 'Countries', icon: '🚩', labels: ['USA 🇺🇸', 'UK 🇬🇧', 'Canada 🇨🇦', 'Japan 🇯🇵', 'Germany 🇩🇪', 'India 🇮🇳', 'France 🇫🇷', 'Brazil 🇧🇷'] },
    { label: 'Number Picker Wheel', preset: 'Numbers 1-10', icon: '🔢', labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
    { label: 'Date Picker Wheel', preset: 'Days of Week', icon: '📅', labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
    { label: 'Truth or Dare Picker', preset: 'Truth or Dare', icon: '🎲', labels: ['Truth', 'Dare', 'Truth', 'Dare', 'Double Dare', 'Pass'] },
    { label: 'Letter Picker Wheel', preset: 'Alphabet A-H', icon: '🔤', labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] },
    { label: 'Instagram Comment Picker', to: '/random-name-picker', icon: '📷' },
    { label: 'Country Picker Wheel', preset: 'Countries', icon: '🌍', labels: ['United States', 'Canada', 'Mexico', 'United Kingdom', 'Germany', 'Australia', 'Japan', 'Brazil'] },
    { label: 'MLB Picker Wheel', preset: 'MLB Teams', icon: '⚾', labels: ['Yankees', 'Dodgers', 'Red Sox', 'Cubs', 'Braves', 'Astros', 'Mets', 'Phillies'] },
  ]

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to wheel
      </a>
      <header className="sticky top-0 z-40 border-b border-[#e4d9c8] bg-[#fffaf3]/95 backdrop-blur-md">
        {toolsOpen && (
          <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setToolsOpen(false)} />
        )}
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 font-extrabold tracking-tight text-[#10232b]">
            <LogoMark />
            <span>{SITE_NAME}</span>
          </NavLink>
          <nav className="hidden md:flex md:items-center md:gap-5 text-sm font-semibold" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'text-[#1B6B6B]' : 'text-[#3e4c59] hover:text-[#10232b]')}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Tools Dropdown Button */}
            <div className="relative z-50">
              <button
                type="button"
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1.5 text-[#3e4c59] hover:text-[#10232b] font-semibold"
                aria-expanded={toolsOpen}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Tools
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {toolsOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-[680px] rounded-2xl border border-[#d7cfc2] bg-white p-5 shadow-2xl">
                  <div className="grid grid-cols-3 gap-x-4 gap-y-3.5">
                    {toolsList.map((tool, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setToolsOpen(false)
                          if (tool.labels && tool.labels.length) {
                            const existing = wheels.find((w) => w.name === tool.label)
                            if (existing) {
                              switchWheel(existing.id)
                            } else {
                              const newW = makeWheel(tool.label, tool.labels)
                              wheels.push(newW)
                              switchWheel(newW.id)
                            }
                            navigate('/')
                          } else if (tool.to) {
                            navigate(tool.to)
                          }
                        }}
                        className="flex items-center gap-3 rounded-xl p-2.5 text-left text-xs font-bold text-[#10232b] hover:bg-[#f4efe4] transition-colors"
                      >
                        <span className="text-xl shrink-0">{tool.icon}</span>
                        <span className="truncate tracking-normal font-semibold">{tool.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-[#e4d9c8] pt-3 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setToolsOpen(false)
                        navigate('/random-wheel')
                      }}
                      className="inline-block w-full rounded-xl border border-[#d7cfc2] py-2 text-xs font-bold text-[#10232b] hover:bg-[#f4efe4]"
                    >
                      All Tools
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg border border-[#d7cfc2] bg-white px-3 py-1.5 text-xs font-bold text-[#10232b] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 18h16M4 18h16" />
              )}
            </svg>
            Menu
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="border-t border-[#e4d9c8] bg-[#fffaf3] px-4 py-3 md:hidden" aria-label="Mobile Navigation">
            <div className="flex flex-col gap-2 font-semibold">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-[#1B6B6B] text-white' : 'text-[#3e4c59] hover:bg-[#e4d9c8]/40'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>
      <Outlet />
      <footer className="mt-16 border-t border-[#e4d9c8] bg-[#fbf6ee]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Column 1: Brand & Tagline */}
            <div className="space-y-3 md:col-span-1">
              <NavLink to="/" className="flex items-center gap-2.5 font-black tracking-tight text-[#10232b]">
                <LogoMark />
                <span className="text-lg">{SITE_NAME}</span>
              </NavLink>
              <p className="text-xs font-semibold leading-relaxed text-[#5c6a72]">
                Free, instant online decision maker & random wheel generator. 100% fair spins with no signup required.
              </p>
            </div>

            {/* Column 2: Popular Wheels */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#10232b]">Popular Wheels</h4>
              <ul className="space-y-2 text-xs font-semibold text-[#3e4c59]">
                <li><NavLink to="/games/yes-no-picker-wheel" className="hover:text-[#1B6B6B] transition-colors">Yes or No Wheel</NavLink></li>
                <li><NavLink to="/education/random-student-generator" className="hover:text-[#1B6B6B] transition-colors">Student Name Picker</NavLink></li>
                <li><NavLink to="/food/what-to-eat-wheel" className="hover:text-[#1B6B6B] transition-colors">What to Eat Wheel</NavLink></li>
                <li><NavLink to="/gaming/fortnite-drop-picker" className="hover:text-[#1B6B6B] transition-colors">Fortnite Drop Picker</NavLink></li>
                <li><NavLink to="/games/truth-or-dare-wheel" className="hover:text-[#1B6B6B] transition-colors">Truth or Dare Wheel</NavLink></li>
              </ul>
            </div>

            {/* Column 3: Site Links */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#10232b]">Navigation</h4>
              <ul className="space-y-2 text-xs font-semibold text-[#3e4c59]">
                <li><NavLink to="/" className="hover:text-[#1B6B6B] transition-colors">Home</NavLink></li>
                <li><NavLink to="/how-to-use" className="hover:text-[#1B6B6B] transition-colors">How to Use</NavLink></li>
                <li><NavLink to="/about" className="hover:text-[#1B6B6B] transition-colors">About Us</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-[#1B6B6B] transition-colors">Contact Support</NavLink></li>
              </ul>
            </div>

            {/* Column 4: Legal & Community */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#10232b]">Legal & Security</h4>
              <ul className="space-y-2 text-xs font-semibold text-[#3e4c59]">
                <li><NavLink to="/privacy" className="hover:text-[#1B6B6B] transition-colors">Privacy Policy</NavLink></li>
                <li><NavLink to="/terms" className="hover:text-[#1B6B6B] transition-colors">Terms of Service</NavLink></li>
              </ul>
              
              {/* Follow Us / Social Links */}
              <div className="pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#10232b] mb-2">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/realpickerwheel_com?stkn=OGJqNGllMXd0NWxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#d7cfc2] text-[#e1306c] hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c] shadow-xs transition-colors"
                    aria-label="Follow Real Picker Wheel on Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1GeqhThN2T/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#d7cfc2] text-[#1877f2] hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] shadow-xs transition-colors"
                    aria-label="Follow Real Picker Wheel on Facebook"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1B6B6B]/10 px-2.5 py-1 text-[11px] font-bold text-[#1B6B6B]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Client-side Privacy Guaranteed
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#e4d9c8] pt-6 text-center text-xs font-semibold text-[#5c6a72] sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <p className="text-[11px] text-[#7a8a92]">Designed for desktop & mobile devices.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="15" fill="#10232b" />
      <path d="M16 16 L16 3 A13 13 0 0 1 27.3 22.5 Z" fill="#1B6B6B" />
      <path d="M16 16 L27.3 22.5 A13 13 0 0 1 4.7 22.5 Z" fill="#e85d4c" />
      <path d="M16 16 L4.7 22.5 A13 13 0 0 1 16 3 Z" fill="#F2CC8F" />
      <circle cx="16" cy="16" r="4" fill="#fffaf3" />
    </svg>
  )
}
