import { useRef } from 'react'
import AnimatedSubtitle from './AnimatedSubtitle'

function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-dvw bg-white">
      <div className="flex-center relative py-20 px-5 tablet:py-32">
        <div className="text-black">
          <div className="grid justify-items-center gap-10 text-center">
            <AnimatedSubtitle subtitle="who we are" />
            <InteractiveTitle
              title="We're building
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
              to . thrive"
            />
            <p className="font-general w-full tablet:w-1/2">
              The Lands Between foresee a future where Tarnished, ancient
              sorceries, and a newfound order unite at the convergence of
              destiny and fate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function DotImage({ imageIndex }) {
  return (
    <div className="h-10 w-10 relative cursor-pointer tablet:h-14 tablet:w-14 laptop:h-24 laptop:w-24">
      <div className="absolute-center size-1/2 bg-black rounded-md overflow-hidden">
        <img
          className="absolute-center object-cover object-center size-full opacity-0"
          src={`images/whoweare-${imageIndex}.jpg`}
          alt=""
        />
      </div>
    </div>
  )
}

function InteractiveTitle({ title }) {
  const containerRef = useRef(null)
  let dotCounter = 0

  const content = title.split('<br />').map((line, lineIndex) => (
    <span
      key={`line-${lineIndex}`}
      className="flex justify-center items-center gap-x-3"
    >
      {line
        .trim()
        .split(' ')
        .map((word, wordIndex) => {
          if (word === '.') {
            dotCounter++
            return (
              <DotImage
                key={`dot-${lineIndex}-${wordIndex}`}
                imageIndex={dotCounter}
              />
            )
          }
          return <span key={`word-${lineIndex}-${wordIndex}`}>{word}</span>
        })}
    </span>
  ))

  return (
    <div ref={containerRef} className="animated-title font-zentry">
      {content}
    </div>
  )
}

export default WhoWeAre
