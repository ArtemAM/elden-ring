import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import ContainerTilt from './ContainerTilt'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    id: 'card1',
    title: '<b>M</b>oonlit <b>O</b>ath',
    description:
      'The hidden power of the moon guides you through the darkness. Will you learn the secrets of Kariya and Renny?',
    src: 'videos/feature-1.mp4',
    classContainer: 'item1',
  },
  {
    id: 'card2',
    title: 'R<b>a</b>dahns f<b>e</b>sti<b>v</b>al',
    description:
      'A battle of legends beneath the blood-red sky. Warriors from all lands gather to challenge the might of General Radahn. Only the bravest shall stand in the face of his gravity-defying wrath.',
    src: 'videos/feature-2.mp4',
    classContainer: 'item2',
  },
  {
    id: 'card3',
    title: 'T<b>h</b>e grace',
    description:
      'A golden radiance descends upon the Tarnished, guiding them through ruin and despair. But is Grace a blessing… or a chain unseen?',
    src: 'videos/feature-3.mp4',
    classContainer: 'item3',
  },
  {
    id: 'card4',
    title: 'Born o<b>f</b> the ab<b>y</b>ss',
    description:
      'From the darkest depths, a forsaken child of the void emerges. Neither living nor dead, it roams the shattered lands, seeking purpose in an endless night',
    src: 'videos/feature-4.mp4',
    classContainer: 'item4',
  },
]

function Features() {
  return (
    <section id="features" className="bg-black overflow-hidden">
      <div className="relative px-2 tablet:px-8 tablet:container tablet:mx-auto desktop:px-40">
        <div className="font-circular-web leading-5 text-sm pt-16 max-w-md laptop:pt-32">
          <p className="text-white">Explore the Elden Ring Universe</p>
          <p className="text-gray-500">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
        <div className="grid grid-cols-4 grid-area-mobile gap-4 py-16 tablet:grid-cols-2 tablet:gap-8 tablet:grid-area laptop:py-32 laptop:px-10">
          {cards.map((card) => (
            <ContainerTilt
              key={`tilt-${card.id}`}
              classContainer={card.classContainer}
              ratioTilt={10}
              perspective={700}
            >
              <CardFeature
                key={card.id}
                title={card.title}
                description={card.description}
                src={card.src}
              />
            </ContainerTilt>
          ))}
        </div>
      </div>
    </section>
  )
}

function CardFeature({ title, description, src }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  useGSAP(() => {
    gsap.set(containerRef.current, {
      transformPerspective: 1000,
      y: 100,
      rotateX: -40,
      transformOrigin: 'center top',
    })
    const revealAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'top bottom',
        toggleActions: 'restart none none reverse',
      },
    })
    revealAnimation.to(containerRef.current, {
      y: 0,
      rotateX: 0,
      duration: 0.5,
    })
  })

  const handleOnMouseEnter = () => {
    if (videoRef.current) {
      gsap.to(containerRef.current, {
        scale: 0.95,
        duration: 0.8,
      })
      videoRef.current.play()
    }
  }

  const handeOnMouseLeave = () => {
    if (videoRef.current) {
      gsap.to(containerRef.current, {
        scale: 1,
        duration: 0.8,
      })
      videoRef.current.pause()
    }
  }
  return (
    <div
      ref={containerRef}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handeOnMouseLeave}
      className="relative size-full"
    >
      <div className="relative p-5 size-full border-hsla rounded-xl overflow-hidden cursor-pointer">
        <div className="relative z-10 grid gap-3">
          <h1
            className="card-title special-font"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <p className="max-w-xs text-xs font-circular-web text-white laptop:text-base">
            {description}
          </p>
        </div>
        <video
          ref={videoRef}
          className="absolute left-0 top-0 size-full object-cover object-center"
          src={src}
          loop
          muted
        />
      </div>
    </div>
  )
}

export default Features
