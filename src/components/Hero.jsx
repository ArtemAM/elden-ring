import { useState, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { TiLocationArrow } from 'react-icons/ti'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Button from './Button'
import getTransformTilt from '../utils/getTransformTilt'
import clsx from 'clsx'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const totalVideos = 4
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`

  const [currentIndex, setCurrentIndex] = useState(1)
  const [isMouseMove, setIsMouseMove] = useState(false)

  return (
    <section id="hero" className="relative w-screen h-screen">
      <VideoFrame
        getVideoSrc={getVideoSrc}
        currentIndex={currentIndex}
        totalVideos={totalVideos}
        setCurrentIndex={setCurrentIndex}
        isMouseMove={isMouseMove}
        setIsMouseMove={setIsMouseMove}
      >
        <HeroIntro />
        <HeroFooterTitle classContainer="!text-gold z-[10]" />
      </VideoFrame>
      <HeroFooterTitle />
    </section>
  )
}

function HeroIntro() {
  return (
    <div className="absolute grid gap-5 left-5 top-20 z-10 tablet:left-10 tablet:top-24">
      <div className="pointer-events-none">
        <h1 className="hero-heading special-font pointer-events-none">
          Be <b>A</b> Part
        </h1>
        <p className="max-w-72 text-sm text-white tablet:text-base desktop:text-2xl desktop:max-w-80 pointer-events-none">
          Enter the Metagame <br /> And become the Elden Lord
        </p>
      </div>
      <Button
        id="watch-trailer"
        classContainer="bg-gold flex-center gap-1"
        title="watch trailer"
        leftIcon={<TiLocationArrow />}
        link="https://www.youtube.com/watch?v=2Q3A4hJ9fHU"
      />
    </div>
  )
}

function HeroFooterTitle({ classContainer }) {
  return (
    <h2
      className={clsx(
        'hero-heading special-font hero-heading-position z-[-1] !text-black',
        classContainer,
      )}
    >
      El<b>d</b>en Ri<b>n</b>g
    </h2>
  )
}

function VideoFrame({
  getVideoSrc,
  currentIndex,
  setCurrentIndex,
  totalVideos,
  isMouseMove,
  setIsMouseMove,
  children,
}) {
  const [transformStyle, setTransformStyle] = useState('')
  const videoFrameRef = useRef(null)

  const handleMouseMove = (event) => {
    setIsMouseMove(true)
    const newTransform = getTransformTilt(
      event,
      videoFrameRef.current,
      60,
      1000,
    )
    setTransformStyle(newTransform)
  }

  useGSAP(() => {
    gsap.set(videoFrameRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoFrameRef.current,
        start: 'center center',
        end: 'bottom top',
        scrub: 0.2,
      },
    })
    tl.to(videoFrameRef.current, {
      clipPath: 'polygon(20% 0%, 80% 0%, 86% 92%, 4% 86%)',
    })
  })

  return (
    <div
      ref={videoFrameRef}
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen overflow-hidden"
    >
      {children}
      <VideoContent
        getVideoSrc={getVideoSrc}
        currentIndex={currentIndex}
        totalVideos={totalVideos}
        setCurrentIndex={setCurrentIndex}
        isMouseMove={isMouseMove}
        setIsMouseMove={setIsMouseMove}
        transform={transformStyle}
      />
    </div>
  )
}

function VideoContent({
  getVideoSrc,
  currentIndex,
  setCurrentIndex,
  totalVideos,
  isMouseMove,
  setIsMouseMove,
  transform,
}) {
  const nextVideoRef = useRef(null)
  const currentVideoRef = useRef(null)
  const prevVideoRef = useRef(null)
  const miniVideoRef = useRef(null)

  const handleMiniVideoClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1)
    currentVideoRef.current.play()
  }

  // Появление miniVideo при движении мыши
  useEffect(() => {
    if (!isMouseMove) return
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      gsap.to(miniVideoRef.current, {
        opacity: 1,
        scale: 1.5,
        duration: 1,
        ease: 'power3.inOut',
      })
      const timeout = setTimeout(() => {
        gsap.to(miniVideoRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: 'power3.inOut',
        })
        setIsMouseMove(false)
      }, 2000)
      return () => clearTimeout(timeout)
    })
  }, [isMouseMove, setIsMouseMove])

  useGSAP(
    () => {
      gsap.set(currentVideoRef.current, { visibility: 'visible' })
      gsap.to(currentVideoRef.current, {
        width: '100%',
        height: '100%',
        borderRadius: '0px',
        duration: 1,
        ease: 'power3.inOut',
        onStart: () => {
          currentVideoRef.current.play()
        },
        onComplete: () => {
          prevVideoRef.current.src = getVideoSrc(currentIndex)
          prevVideoRef.current.currentTime = currentVideoRef.current.currentTime
          prevVideoRef.current.play()
        },
      })
      gsap.from(nextVideoRef.current, {
        scale: 0,
        autoAlpha: 0,
        duration: 1.5,
        ease: 'power3.inOut',
      })

      const mm = gsap.matchMedia()
      mm.add('(max-width: 1023px)', () => {
        gsap.set(miniVideoRef.current, {
          opacity: 1,
        })
        gsap.to(miniVideoRef.current, {
          scale: 0.7,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
        })
      })
    },
    { dependencies: [currentIndex], revertOnUpdate: true },
  )

  return (
    <>
      <video
        ref={prevVideoRef}
        className="absolute-center w-screen h-screen object-cover object-center"
        muted
        loop
      />
      <video
        ref={currentVideoRef}
        className="absolute-center size-24 rounded-lg object-cover object-center invisible tablet:size-32 desktop:size-64"
        src={getVideoSrc(currentIndex)}
        muted
        loop
      />
      <div className="absolute-center size-24 rounded-lg z-50 cursor-pointer overflow-hidden tablet:size-32 desktop:size-64">
        <div
          ref={miniVideoRef}
          onClick={handleMiniVideoClick}
          className="w-full h-full origin-center rounded-lg overflow-hidden scale-50 opacity-0"
        >
          <video
            ref={nextVideoRef}
            style={{ transform }}
            className="w-full h-full object-cover object-center scale-125"
            src={getVideoSrc(
              currentIndex === totalVideos ? 1 : currentIndex + 1,
            )}
            muted
            loop
          />
        </div>
      </div>
    </>
  )
}

export default Hero
