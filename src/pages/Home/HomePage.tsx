import { Seo } from '../../components/Seo/Seo'
import { WheelWorkbench } from './WheelWorkbench'

export const HOME_FAQS = [
  {
    question: 'How does the random picker wheel work?',
    answer: 'The random picker wheel uses a cryptographically secure pseudo-random number generator (PRNG) algorithm to calculate angles and determine winning slices with 100% mathematical fairness.',
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
  {
    question: 'Is Real Picker Wheel biased or rigged?',
    answer: 'No. The algorithm guarantees equal probability for every slice unless custom weights are assigned by the user.',
  },
  {
    question: 'Can I embed the wheel on my blog or PowerPoint?',
    answer: 'Yes! Click the Embed button under the wheel to generate a responsive HTML iframe code snippet ready to paste anywhere.',
  },
]

export function HomePage() {
  return (
    <>
      <Seo
        title="Picker Wheel - Spin the Wheel to Decide a Random Choice"
        description="Free random picker wheel to decide a random choice fairly. Insert names, numbers, or choices, spin the wheel with 60 FPS animation and sound effects, and pick a random winner instantly."
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

