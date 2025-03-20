import clsx from 'clsx'
import gsap from 'gsap'
import AnimatedTitle from './AnimatedTitle'
import ContainerTilt from './ContainerTilt'
import { useRef } from 'react'

function News() {
  return (
    <section id="news">
      <div className="flex flex-col justify-between gap-10 py-20 overflow-hidden px-2 tablet:flex-row tablet:py-32 tablet:px-8 tablet:container tablet:mx-auto desktop:px-40">
        <div className="flex flex-col gap-5 basis-1/2">
          <AnimatedTitle
            title="Lat<b>e</b>st <b>u</b>pdates"
            classContainer="!justify-normal !items-start tablet:gap-0 tablet:flex-col leading-[0.8]"
          />
          <p className="font-circular-web text-xs w-2/3 tablet:text-base">
            Stay updated with the latest news, events, and updates in our
            ecosystem. Be part of our universe's growth and evolution.
          </p>
        </div>
        <div className="grid gap-10 tablet:basis-1/2">
          <CardNews
            src="images/whoweare-1.jpg"
            date="09.05.2024"
            description="Metagame Portal Bridging Human & AI in the Global Play
          Economy"
            classContainer="justify-self-end"
          />
          <CardNews
            src="images/whoweare-1.jpg"
            date="09.05.2024"
            description="Metagame Portal Bridging Human & AI in the Global Play
          Economy"
            classContainer="justify-self-end"
          />
        </div>
      </div>
    </section>
  )
}

function CardNews({ src, date, description, classContainer }) {
  const containerImageRef = useRef(null)
  const handleOnMouseEnter = () => {
    if (containerImageRef.current) {
      gsap.to(containerImageRef.current, {
        scale: 0.95,
        duration: 0.6,
      })
    }
  }

  const handeOnMouseLeave = () => {
    if (containerImageRef.current) {
      gsap.to(containerImageRef.current, {
        scale: 1,
        duration: 0.6,
      })
    }
  }
  return (
    <div className={clsx('grid gap-5 w-2/3 tablet:w-full', classContainer)}>
      <ContainerTilt ratioTilt={10} perspective={700}>
        <div
          ref={containerImageRef}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handeOnMouseLeave}
          className="rounded-lg overflow-hidden cursor-pointer"
        >
          <img className="object-cover object-center" src={src} alt="" />
        </div>
      </ContainerTilt>
      <div className="flex flex-row-reverse gap-10 tablet:flex-row">
        <span className="font-general text-sm font-bold">{date}</span>
        <p className="text-sm tablet:text-xl">{description}</p>
      </div>
    </div>
  )
}

export default News
