function Features() {
  return (
    <section id="features" className="bg-black">
      <div className="relative px-5 tablet:px-8 laptop:container laptop:mx-auto">
        <div className="font-circular-web leading-5 text-sm pt-16 max-w-md laptop:pt-32">
          <p className="text-white">Explore the Elden Ring Universe</p>
          <p className="text-gray-500">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
      </div>
    </section>
  )
}

function CardFeature({ title, description, src }) {
  return (
    <div className="relative size-full">
      <div className="relative p-5 size-full border-hsla rounded-xl overflow-hidden cursor-pointer">
        <div className="relative z-10 grid gap-3">
          <h1 className="card-title special-font">{title}</h1>
          <p className="max-w-xs text-xs md:text-base font-circular-web text-white">
            {description}
          </p>
        </div>
        <video
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
