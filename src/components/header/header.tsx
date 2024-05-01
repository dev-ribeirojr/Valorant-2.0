import LogoRiot from '@/assets/images/riot-logo.svg'
import LogoValorant from '@/assets/images/valorant-logo-text.svg'
import { ButtonHome } from './modules'

export function Header() {
  return (
    <header className="py-2 px-4 bg-gray-800 fixed top-0 right-0 left-0 shadow-sm z-40">
      <div className="flex flex-row items-center justify-between max-w-screen-xl m-auto">
        <div className="flex gap-4">
          <img alt="Logo Riot" className="w-full max-w-16" src={LogoRiot.src} />
          <div className="divider-x-2 bg-white w-1 rounded-full h-8" />
          <img
            alt="Logo Valorant"
            className="w-full max-w-60"
            src={LogoValorant.src}
          />
        </div>

        <div className="flex gap-4 items-center justify-center">
          <ButtonHome />

          <button className="bg-gradient-to-r from-red-500 to-red-400 py-2 px-4 rounded text-white hover:opacity-80">
            Jogar Agora!
          </button>
        </div>
      </div>
    </header>
  )
}
