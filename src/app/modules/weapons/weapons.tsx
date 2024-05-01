import { AboutSection, Container } from '@/components'
import { useWeapons } from './useWeapons'
import { ListWeapons } from './modules'

export async function Weapons() {
  const { listWeapons } = await useWeapons()

  return (
    <Container className="pt-2">
      <AboutSection
        title="Armas"
        description="As armas do Valorant podem ser divididas em sete categorias: pistolas, escopetas, submetralhadoras, rifles, rifles de precisão, metralhadoras pesadas e facas, são elas.."
      />
      <ListWeapons listWeapons={listWeapons} />
    </Container>
  )
}
