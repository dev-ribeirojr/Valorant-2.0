import { AboutSection, Container } from '@/components'
import { ActiveMapDetails } from './modules'
import { useMaps } from './useMaps'

export async function Maps() {
  const { activeMap } = await useMaps()

  return (
    <div>
      <Container className="pt-4">
        <AboutSection
          title="mapas"
          description="O modo competitivo de Valorant, FPS da Riot Games, atualmente é disputado nos mapas Ascent, Bind, Haven, Icebox e Split. Cada cenário tem uma variedade de pontos estratégicos com nomes de referências, as chamadas call-outs. É importante que os jogadores conheçam esses locais e seus apelidos, pois esses termos são muito usados ao jogar e se comunicar com o time."
        />
      </Container>

      <ActiveMapDetails activeMap={activeMap} />
    </div>
  )
}
