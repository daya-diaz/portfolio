interface TitleSectionProps {
  title: string
}
export function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-bold tracking-tight font-inter font-extrabold text-5xl uppercase">
        {title}
      </h2>
      <span className="tracking-[.5em] text-xs font-inter font-medium text-blue-500">
        EXPLORE AGORA
      </span>
    </div>
  )
}
