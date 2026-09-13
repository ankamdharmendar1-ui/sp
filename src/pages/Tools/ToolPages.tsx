import { Link } from 'react-router-dom'
import { InfoPage } from '../Info/InfoPage'

export function RandomWheelPage() {
  return (
    <InfoPage
      title="Random wheel"
      description="Use a random wheel to choose from a custom list. Spin for a visual pick, or use instant pick when you need a result immediately."
      path="/random-wheel"
    >
      <h1 className="text-4xl font-extrabold">Random wheel</h1>
      <p>
        A random wheel turns a list into slices. Each spin lands on one slice. Use it for classroom names, giveaways,
        chores, or any choice that should feel fair and visible.
      </p>
      <p>
        <Link className="font-semibold text-[#1B6B6B]" to="/">
          Open the wheel
        </Link>
      </p>
    </InfoPage>
  )
}

export function RandomNamePickerPage() {
  return (
    <InfoPage
      title="Random name picker"
      description="Pick a random name from a list with a spinning wheel. Paste a class roster, shuffle, and spin until everyone has had a turn."
      path="/random-name-picker"
    >
      <h1 className="text-4xl font-extrabold">Random name picker</h1>
      <p>
        Paste names one per line, then spin. Duplicate names stay as separate slices. Enable “remove winner after each
        spin” if you want a no-repeat draw.
      </p>
      <p>
        <Link className="font-semibold text-[#1B6B6B]" to="/">
          Open the name picker
        </Link>
      </p>
    </InfoPage>
  )
}

export function WheelSpinnerPage() {
  return (
    <InfoPage
      title="Wheel spinner"
      description="A wheel spinner for random choices. Customize colors, spin duration, sounds, and share a link to your wheel."
      path="/wheel-spinner"
    >
      <h1 className="text-4xl font-extrabold">Wheel spinner</h1>
      <p>
        Spin duration, pointer style, and palettes are in the customization panel. Turn sounds and confetti off anytime.
      </p>
      <p>
        <Link className="font-semibold text-[#1B6B6B]" to="/">
          Open the spinner
        </Link>
      </p>
    </InfoPage>
  )
}
