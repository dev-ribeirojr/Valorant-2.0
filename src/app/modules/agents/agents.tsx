import { AboutSection, Container } from '@/components'
import { ListAgents } from './modules'

export function Agents() {
  return (
    <Container className="pt-4">
      <AboutSection
        title="Agentes"
        description="Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!"
      />
      <ListAgents />
    </Container>
  )
}
