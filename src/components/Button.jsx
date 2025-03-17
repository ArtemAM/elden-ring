import clsx from 'clsx'

function Button({ classContainer, title, id, leftIcon, rightIcon, link }) {
  return (
    <a
      id={id}
      href={link}
      target="_blank"
      className={clsx(
        'group relative text-black justify-self-start flex justify-between items-center rounded-full px-7 py-3 bg-gold overflow-hidden cursor-pointer',
        classContainer,
      )}
    >
      {leftIcon}
      <span className="realtive inline-flex uppercase text-xs overflow-hidden">
        <div className="translate-y-0 skew-y-0 transition-all duration-500 group-hover:translate-y-[-250%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[250%] skew-y-12 transition-all duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </a>
  )
}

export default Button
