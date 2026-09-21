import { useEffect } from 'react'
import { Seo } from '../../components/Seo/Seo'
import { useWheel } from '../../hooks/useWheelStore'
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
  const { activateDefaultWheel } = useWheel()

  useEffect(() => {
    activateDefaultWheel()
  }, [activateDefaultWheel])

  return (
    <>
      <Seo
        title="Real Picker Wheel - Free Random Picker Wheel, Wheel Spinner & Decision Generator"
        description="Real Picker Wheel is the ultimate free online random picker wheel and decision wheel generator. Spin the wheel to pick random names, numbers, lunch choices, or make fair yes/no decisions with 60 FPS animation."
        path="/"
        faq={HOME_FAQS}
      />
      <WheelWorkbench
        heading="Real Picker Wheel - Free Random Picker Wheel"
        subheading="Make quick Yes or No decisions, pick random names, or add your own custom choices and spin the wheel. Real Picker Wheel picks one option at random with smooth 60 FPS animation and 100% fairness."
        showHomeSeo={true}
      />
    </>
  )
}

