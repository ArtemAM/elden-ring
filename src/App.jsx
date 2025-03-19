import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import WhoWeAre from './components/WoWeAre'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <WhoWeAre />
      {/* <section className="w-screen h-screen"></section> */}
    </main>
  )
}

export default App
