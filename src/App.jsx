import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import WhoWeAre from './components/WoWeAre'
import News from './components/News'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <WhoWeAre />
      <News />
      {/* <section className="w-screen h-screen"></section> */}
    </main>
  )
}

export default App
