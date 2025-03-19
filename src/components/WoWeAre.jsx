import AnimatedSubtitle from './AnimatedSubtitle'
import AnimatedTitle from './AnimatedTitle'

function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-dvw h-screen bg-white">
      <div className="container mx-auto relative py-20 tablet:py-32">
        <div className="grid justify-items-center text-black">
          <div className="grid justify-items-center gap-10 size-1/2 text-center">
            <AnimatedSubtitle subtitle="who we are" />
            <h2 className="animated-title font-zentry">
              We're building
              <br />
              a new . reality
              <br />
              that rewards
              <br />
              players . and
              <br />
              empowers
              <br />
              humans & AI
              <br />
              to . thrive
            </h2>
            <p className="font-general">
              Zentry envisions a future where players, emerging tech, and a new
              economy unite at the convergence of gaming and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
