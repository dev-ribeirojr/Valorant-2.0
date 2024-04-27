import LogoValorant from '@/assets/images/valorant-logo-text.svg'

export function Hero() {
  return (
    <div className="mt-[56px] w-full relative ">
      <video
        autoPlay
        muted
        loop
        className="object-cover w-full min-h-[300px] max-h-[600px]"
      >
        <source src="/videos/Apresentation.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center gap-4 flex-col p-4">
        <img
          src={LogoValorant.src}
          alt="Logo Valorant"
          className="max-w-xs lg:max-w-xl"
        />
        <p className="text-white font-bold text-center">
          Um jogo de tiro tático 5x5 com personagens originais
        </p>
        <div>
          <button className="py-4 px-8 bg-white font-semibold hover:opacity-90 rounded">
            JOGUE GRÁTIS
          </button>
        </div>
      </div>
    </div>
  )
}
