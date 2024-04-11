import logo from '../assets/logo.png'
import { Button } from './Button'

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
        <Button textButton="Sobre mim" type="secondary" />
        <Button textButton="Contato" />
      </div>
    </header>
  )
}
