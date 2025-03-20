import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'

function AnimatedTitle({ title, classContainer }) {
  const containerRef = useRef(null)

  const text = (
    <div className="animated-title special-font flex flex-col gap-3">
      {title.split('<br />').map((line, index) => (
        <span
          key={`line-${index}`}
          className={clsx(
            'flex-center max-w-full flex-wrap gap-3',
            classContainer,
          )}
        >
          {line
            .trim()
            .split(' ')
            .map((word, index) => (
              <span
                key={`word-${index}`}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
        </span>
      ))}
    </div>
  )

  useGSAP(
    () => {
      gsap.set(containerRef.current, {
        transform:
          'translate3d(-110px, 52px, -60px) rotateY(50deg) rotateX(-20deg)',
        transformOrigin: '-50% -50% -150px',
      })
      const titleAnimationTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom',
          toggleActions: 'restart none none reverse',
        },
      })

      titleAnimationTl.to(containerRef.current, {
        transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)',
        duration: 1.3,
      })
      titleAnimationTl.to(
        '.animated-word',
        {
          opacity: 1,
          stagger: 0.15,
          duration: 0,
        },
        '<',
      )
    },
    { scope: containerRef },
  )

  return <div ref={containerRef}>{text}</div>
}

export default AnimatedTitle
