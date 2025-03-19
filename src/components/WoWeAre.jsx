import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import clsx from 'clsx'
import AnimatedSubtitle from './AnimatedSubtitle'

gsap.registerPlugin(ScrollTrigger)

function WhoWeAre() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.set(containerRef.current, {
      transform:
        'translate3d(-110px, 52px, -60px) rotateY(50deg) rotateX(-20deg)',
      transformOrigin: '-50% -50% -150px',
    })
    const revealContainerTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        toggleActions: 'restart none none reverse',
      },
    })
    revealContainerTl.to(containerRef.current, {
      transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)',
      duration: 1.3,
    })
  })

  return (
    <section id="who-we-are" className="w-dvw bg-white">
      <div
        ref={containerRef}
        className="flex-center relative py-20 px-5 tablet:py-32"
      >
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

function DotImage({ imageIndex, classContainer }) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const tlRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        toggleActions: 'restart none none none',
      },
    })
    tl.to(containerRef.current, {
      scale: 1.2,
      duration: 1.2,
      yoyo: true,
      repeat: 10,
      ease: 'sine.inOut',
    })
    tlRef.current = tl
  })

  const handleMouseEnter = () => {
    if (tlRef.current) tlRef.current.pause()
    gsap.to(containerRef.current, {
      width: '12rem',
      height: '12rem',
      duration: 0.8,
    })
    gsap.to(imageRef.current, {
      opacity: 1,
      duration: 0.2,
      overwrite: true,
    })
  }
  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      width: '50%',
      height: '50%',
      duration: 0.8,
    })
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.8,
      overwrite: true,
    })
  }
  return (
    <div
      className={clsx(
        'h-10 w-10 relative cursor-pointer tablet:h-14 tablet:w-14 laptop:h-24 laptop:w-24',
        classContainer,
      )}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute-center size-1/2 bg-black rounded-md overflow-hidden"
      >
        <img
          ref={imageRef}
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

  useGSAP(
    () => {
      const animatedWordsTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          toggleActions: 'restart none none reverse',
        },
      })
      animatedWordsTl.to('.animated-word', {
        opacity: 1,
        stagger: 0.07,
        duration: 0,
      })
    },
    { scope: containerRef },
  )

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
                classContainer="animated-word"
              />
            )
          }
          return (
            <span
              key={`word-${lineIndex}-${wordIndex}`}
              className="animated-word"
            >
              {word}
            </span>
          )
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
