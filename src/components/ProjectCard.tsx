interface ProjectCardProps {
  title: string
  description: string
  imgSrc: string
  href: string
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  href,
}: ProjectCardProps) {
  return (
    <a
      target="_blank"
      href={href}
      className="flex items-center justify-center gap-4 hover:bg-blue-500/15 p-2 rounded cursor-pointer transition"
      rel="noreferrer"
    >
      <div className="flex items-center bg-white">
        <img className="w-[110px] h-[70px]" src={imgSrc} alt="" />
      </div>
      <div className="flex flex-col items-start justify-center gap-1 md:max-w-[190px]">
        <h3 className="text-base text-white font-extrabold">{title}</h3>
        <p className="max-w-[200px] font-medium text-xs text-gray-400">
          {description}
        </p>
      </div>
    </a>
  )
}
