interface SkillCardProps {
  skill: string
  skillUrl: string
}
export default function SkillCard({ skill, skillUrl = '/' }: SkillCardProps) {
  return (
    <a
      href={skillUrl}
      target="_blank"
      className="flex items-center justify-center px-3 py-1 rounded-full border-2 border-white hover:bg-blue-500/40 hover:border-blue-500/40 transition-all"
      rel="noreferrer"
    >
      <span className="font-inter text-xs">{skill}</span>
    </a>
  )
}
