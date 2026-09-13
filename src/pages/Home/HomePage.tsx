import { Seo } from '../../components/Seo/Seo'
import { WheelWorkbench } from './WheelWorkbench'

export function HomePage() {
  return (
    <>
      <Seo
        title="Random picker wheel"
        description="Create a random picker wheel, add names or options, and spin to choose fairly. Weighted odds, history, and shareable links — no account needed."
        path="/"
      />
      <WheelWorkbench
        heading="Spin a random picker wheel"
        subheading="Add names, prizes, or choices, then spin. Real Picker Wheel picks one option at random with a smooth, readable wheel — on desktop or phone."
      />
    </>
  )
}
