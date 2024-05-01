import { Container } from '@/components'
import { AgentProps } from '@/types'

export function Hero({ agent }: { agent: AgentProps }) {
  return (
    <Container>
      <div className="text-white flex items-center pb-8 flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl uppercase font-bold lg:text-7xl ">
            {agent.displayName}
          </h2>
          <p className="text-xl">{'// BIOGRÁFIA'}</p>
          <p>{agent.description}</p>
        </div>
        <img
          src={agent.fullPortrait || ''}
          alt={`Foto do agente ${agent.displayName}`}
          className="max-w-[500px]"
        />
        <div className="flex-col items-end gap-4 hidden xl:flex">
          <p className="text-xl">{'// FUNÇÃO'}</p>
          <h2 className="text-5xl uppercase font-bold lg:text-7xl ">
            {agent.role.displayName}
          </h2>
          <p>{agent.description}</p>
        </div>
      </div>
    </Container>
  )
}
