import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import FooterSection from './components/FooterSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <main className="w-screen h-auto bg-black text-white">
      <div className="bg-pattern w-full h-full">
        <Header />
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </main>
  )
}

export default App
