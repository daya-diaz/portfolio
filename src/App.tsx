import AboutSection from './components/AboutSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <main className="w-screen h-auto bg-black text-white">
      <div className="bg-pattern w-full h-full">
        <Header />
        <Hero />
        <AboutSection />
      </div>
    </main>
  )
}

export default App
