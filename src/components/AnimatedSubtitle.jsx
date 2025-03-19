import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function AnimatedSubtitle({ subtitle }) {
  const containerRef = useRef(null)
  const words = subtitle.split(' ').map((word, index) => (
    <span key={`word-${index}`} className="animated-word">
      {word}
    </span>
  ))

  useGSAP(
    () => {
      const animatedSubtitleTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom',
          toggleActions: 'restart none none reverse',
        },
      })
      animatedSubtitleTl.to('.animated-word', {
        opacity: 1,
        stagger: 0.15,
        duration: 0,
      })
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="flex-center gap-2 font-general text-xs uppercase laptop:text-sm"
    >
      {words}
    </div>
  )
}

export default AnimatedSubtitle
