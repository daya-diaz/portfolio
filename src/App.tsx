import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <main className="absolute w-screen bg-black text-white">
      <div className="bg-pattern w-full h-full relative right-0">
        <Header />
        <Hero />
      </div>
    </main>
  )
}

export default App
