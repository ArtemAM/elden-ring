import { TiLocationArrow } from 'react-icons/ti'
import Button from './Button'

function Hero() {
  return (
    <section id="hero" className="relative w-screen h-screen">
      <div
        id="video-frame"
        className="relative w-screen h-screen overflow-hidden"
      >
        <div className="absolute grid gap-5 left-5 top-20 z-10 tablet:left-10 tablet:top-24">
          <div>
            <h1 className="hero-heading special-font">
              El<b>d</b>en
            </h1>
            <p className="max-w-72 text-sm text-white tablet:text-base desktop:text-2xl desktop:max-w-80">
              Enter the Metagame <br /> Unleash the Play Economy
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
        <video
          className="absolute-center w-screen h-screen object-cover object-center"
          muted
          loop
        />
        <video
          className="absolute-center size-24 rounded-lg object-cover object-center invisible tablet:size-32 desktop:size-64"
          muted
          loop
        />
        <div className="absolute-center size-24 rounded-lg z-50 cursor-pointer overflow-hidden tablet:size-32 desktop:size-64">
          <div className="w-full h-full origin-center rounded-lg overflow-hidden scale-50 opacity-0 duration-500 hover:opacity-100 hover:scale-100">
            <video
              className="w-full h-full object-cover object-center scale-125"
              muted
              loop
            />
          </div>
        </div>
        <h2 className="hero-heading special-font hero-heading-position z-10">
          El<b>d</b>en Ri<b>n</b>g
        </h2>
      </div>
      <h2 className="hero-heading special-font hero-heading-position z-[-1] !text-black">
        El<b>d</b>en Ri<b>n</b>g
      </h2>
    </section>
  )
}

export default Hero
