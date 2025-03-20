import clsx from 'clsx'
import AnimatedTitle from './AnimatedTitle'

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
  return (
    <div className={clsx('grid gap-5 w-2/3 tablet:w-full', classContainer)}>
      <div className="rounded-lg overflow-hidden">
        <img className="object-cover object-center" src={src} alt="" />
      </div>
      <div className="flex flex-row-reverse gap-10 tablet:flex-row">
        <span className="font-general text-sm font-bold">{date}</span>
        <p className="text-sm tablet:text-xl">{description}</p>
      </div>
    </div>
  )
}

export default News
