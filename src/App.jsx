import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Benefits />
      <RegistrationForm />
      <Footer />
    </div>
  )
}
