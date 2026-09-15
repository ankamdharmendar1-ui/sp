import { Seo } from '../../components/Seo/Seo'
import { WheelWorkbench } from './WheelWorkbench'

export const HOME_FAQS = [
  {
    question: 'How does the random picker wheel work?',
    answer: 'The random picker wheel uses a cryptographically random number generator algorithm to fairly select a slice on the wheel when spun.',
  },
  {
    question: 'Is Real Picker Wheel free to use?',
    answer: 'Yes, Real Picker Wheel is 100% free to use with no hidden fees, subscriptions, or signups required.',
  },
  {
    question: 'Can I customize the options and slices on the wheel?',
    answer: 'Yes, you can edit entries, adjust weights, change slice colors, toggle sound effects, and choose confetti celebrations.',
  },
  {
    question: 'Are my entry lists saved privately?',
    answer: 'All wheel data and lists are saved strictly in your local browser storage. No data is sent to external servers.',
  },
]

export function HomePage() {
  return (
    <>
      <Seo
        title="Random picker wheel"
        description="Create a random picker wheel, add names or options, and spin to choose fairly. Weighted odds, history, and shareable links — no account needed."
        path="/"
        faq={HOME_FAQS}
      />
      <WheelWorkbench
        heading="Spin a random picker wheel"
        subheading="Add names, prizes, or choices, then spin. Real Picker Wheel picks one option at random with a smooth, readable wheel — on desktop or phone."
      />
    </>
  )
}

