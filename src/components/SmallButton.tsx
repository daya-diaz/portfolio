interface SmallButtonProps {
  type?: 'primary' | 'secondary'
  textButton: string
}
export function SmallButton({
  type = 'primary',
  textButton,
}: SmallButtonProps) {
  return (
    <button
      className={` border-white border-2 px-4 py-2 rounded-lg font-medium font-poppins text-sm ${type === 'primary' ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      {textButton}
    </button>
  )
}
