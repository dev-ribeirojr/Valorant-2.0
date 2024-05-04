import { Container } from '@/components'
import LogoValorant from '@/assets/images/valorant-logo-text.svg'

export default function Loading() {
  return (
    <Container className="h-full">
      <div className="flex items-center justify-center h-full w-full flex-col gap-4  animate-pulse text-white">
        <img src={LogoValorant.src} alt="Logo Valorant" className="max-w-64" />
        <p>Carregando...</p>
      </div>
    </Container>
  )
}
