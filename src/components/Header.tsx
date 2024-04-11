import logo from '../assets/logo.png'
import { SmallButton } from './SmallButton'

export function Header() {
  return (
    <header className="w-full flex items-center justify-center py-9 md:justify-between md:px-24 lg:px-56">
      <div className="w-24 h-10">
        <img
          src={logo}
          alt="logo com nome 'Dayane' em negrito e na linha de baixo no canto direito o nome 'Santos' em regular."
        />
      </div>
      <div className="hidden md:flex gap-3">
        <SmallButton textButton="Sobre mim" type="secondary" />
        <SmallButton textButton="Contato" />
      </div>
    </header>
  )
}
