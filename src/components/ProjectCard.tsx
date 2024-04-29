interface ProjectCardProps {
  title: string
  description: string
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="flex items-center justify-center gap-4 ">
      <div className="min-w-[100px] h-[76px] bg-white rounded-lg  md:w-[16px] md:h-[70px]" />
      <div className="flex flex-col items-start justify-center gap-1 md:max-w-[190px]">
        <h3 className="text-base text-white font-extrabold">{title}</h3>
        <p className="max-w-[200px] font-medium text-xs text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}
