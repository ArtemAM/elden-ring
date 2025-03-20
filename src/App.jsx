import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import WhoWeAre from './components/WoWeAre'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <WhoWeAre />
      <News />
      <Footer />
      {/* <section className="w-screen h-screen"></section> */}
    </main>
  )
}

export default App
