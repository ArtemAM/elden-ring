function About() {
  return (
    <section id="about">
      <div className="container mx-auto grid gap-8 text-center pt-20 tablet:pt-32 laptop:gap-5">
        <p className="font-general text-sm uppercase">Welcome to Elden Ring</p>
        <h2 className="animated-title special-font">
          Disc<b>o</b>ver the world's <br /> largest single <b>a</b>dventure
        </h2>
      </div>
      <div className="relative w-screen h-screen">
        <div className="mask-clip-path-about absolute left-1/2 translate-x-[-50%] top-[10%] z-20 h-[60vh] w-72 overflow-hidden rounded-3xl tablet:w-[50vw] laptop:w-96">
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
