import { AboutSection, Container } from '@/components'
import { api } from '@/services/api'
import { ActiveMapDetails } from './modules'
import { ListMapProps } from '@/types'

export async function Maps() {
  async function getMaps(): Promise<ListMapProps> {
    const response = await api('/maps', {
      method: 'GET',
    })

    const responseJson = await response.json()
    return responseJson.data
  }
  const maps = await getMaps()

  const filterValidateMapActive = maps.filter(
    (map) =>
      map.premierBackgroundImage && map.coordinates && map.narrativeDescription,
  )

  const randomNumber = Math.floor(
    Math.random() * filterValidateMapActive.length,
  )

  const activeMap = filterValidateMapActive[randomNumber]

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
