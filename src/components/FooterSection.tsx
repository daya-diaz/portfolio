import linkedinLogo from '../assets/linkedin.svg'
import githubLogo from '../assets/github.svg'
import logo from '../assets/logo.png'
export default function FooterSection() {
  return (
    <div className="w-full flex items-center justify-center py-9 md:justify-between md:px-24 lg:px-56">
      <a href="/">
        <img
          className="w-24 h-10"
          src={logo}
          alt="logo com nome 'Dayane' em negrito e na linha de baixo no canto direito o nome 'Santos' em regular."
        />
      </a>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li className="flex items-center justify-center p-1.5 rounded cursor-pointer hover:bg-blue-950/35 transition-all">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dayane-santos-melo/"
              rel="noreferrer"
            >
              <img
                className="w-6 h-6"
                src={linkedinLogo}
                alt="Icone do LinkedIn para o perfil de Dayane Santos de Melo"
              />
            </a>
          </li>
          <li className="flex items-center justify-center p-1.5 rounded cursor-pointer hover:bg-blue-950/35 transition-all">
            <a
              target="_blank"
              href="https://www.github.com/daya-diaz/"
              rel="noreferrer"
            >
              <img
                className="w-6 h-6"
                src={githubLogo}
                alt="Icone do LinkedIn para o perfil de Dayane Santos de Melo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
