interface ButtonProps {
  type?: 'primary' | 'secondary' | 'big'
  textButton: string
  size?: 'big' | 'small'
}
export function Button({
  type = 'primary',
  size = 'small',
  textButton,
}: ButtonProps) {
  return (
    <button
      className={` border-white border-2 px-4 py-2 rounded-lg font-medium font-poppins text-sm ${type === 'primary' ? 'bg-white text-black' : 'bg-black text-white'} ${size === 'big' ? 'bg-black px-12 py-4 border-2 border-gray-200 rounded-full text-base' : ''}`}
    >
      {textButton}
    </button>
  )
}
