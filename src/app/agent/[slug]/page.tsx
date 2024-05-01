import { DinamicPageProps } from '@/types'
import { useAgent } from '../useAgent'
import { Abilities, Hero } from '../modules'

export default async function AgentPage({
  params: { slug },
}: DinamicPageProps) {
  const { agent } = await useAgent({ agentUuid: slug })

  return (
    <main>
      <Hero agent={agent} />
      <Abilities agent={agent} />
    </main>
  )
}
