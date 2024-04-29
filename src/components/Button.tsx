interface ButtonProps {
  type?: 'primary' | 'secondary' | 'big'
  textButton: string
  href: string
  size?: 'big' | 'small'
}
export function Button({
  type = 'primary',
  size = 'small',
  textButton,
  href,
}: ButtonProps) {
  return (
    <a
      target="_blank"
      href={href}
      className={` border-white border-2 px-4 py-2 rounded-lg font-medium font-poppins text-sm ${type === 'primary' ? 'bg-white text-black' : 'bg-black text-white'} ${size === 'big' ? 'bg-black px-12 py-4 border-2 border-gray-200 rounded-full text-base' : ''}`}
      rel="noreferrer"
    >
      {textButton}
    </a>
  )
}
