import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'
import AnimatedSubtitle from './AnimatedSubtitle'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const clipContainerRef = useRef(null)
  const maskClipContainerRef = useRef(null)
  const sectionRef = useRef(null)
  useGSAP(() => {
    const revealClipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: clipContainerRef.current,
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
      },
    })
    revealClipAnimation.to(maskClipContainerRef.current, {
      width: '100%',
      height: '100%',
      top: '0%',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    })
  })

  return (
    <section id="about" ref={sectionRef}>
      <div className="container mx-auto grid gap-8 text-center pt-20 tablet:pt-32 laptop:gap-5">
        <AnimatedSubtitle subtitle="Welcome to Elden Ring" />
        <AnimatedTitle title="Disc<b>o</b>ver the world's <br /> largest single <b>a</b>dventure" />
      </div>
      <div ref={clipContainerRef} className="relative w-screen h-screen">
        <div
          ref={maskClipContainerRef}
          className="mask-clip-path-about absolute left-1/2 translate-x-[-50%] top-[15%] z-20 h-[60vh] w-72 overflow-hidden tablet:w-[50vw] laptop:w-96"
        >
          <img
            className="object-cover object-center size-full"
            src="images/about.jpg"
            alt=""
          />
        </div>
        <div className="about-subtext absolute left-1/2 bottom-[6%] translate-x-[-50%] w-full px-5 laptop:w-2/3 desktop:w-1/2">
          <p>The Game of Games begins—your life</p>
          <p className="text-gray-500">
            Elden Ring unites every player from countless games and platforms,
            both digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
