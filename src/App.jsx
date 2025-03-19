import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      {/* <section className="w-screen h-screen"></section> */}
    </main>
  )
}

export default App
