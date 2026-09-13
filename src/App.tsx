import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/Layout/AppShell'
import { WheelProvider } from './hooks/useWheelStore'
import { HomePage } from './pages/Home/HomePage'
import { AboutPage, ContactPage, HowToUsePage, PrivacyPage, TermsPage } from './pages/Info/ContentPages'
import { RandomNamePickerPage, RandomWheelPage, WheelSpinnerPage } from './pages/Tools/ToolPages'

export default function App() {
  return (
    <WheelProvider>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/random-wheel" element={<RandomWheelPage />} />
          <Route path="/random-name-picker" element={<RandomNamePickerPage />} />
          <Route path="/wheel-spinner" element={<WheelSpinnerPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </WheelProvider>
  )
}
