import { AgentProps } from '@/types'

export function Abilities({ agent }: { agent: AgentProps }) {
  return (
    <div className="w-full p-4" style={{ background: '#ece8e1' }}>
      <div className="w-full max-w-screen-xl m-auto pb-8">
        <div className="flex flex-col gap-4 my-8 xl:hidden">
          <p className="text-xl">{'// FUNÇÃO'}</p>
          <h2 className="text-5xl uppercase font-bold lg:text-7xl ">
            {agent.role.displayName}
          </h2>
          <p>{agent.description}</p>
        </div>

        <h2 className="mb-8 mt-4 text-5xl uppercase font-bold lg:text-7xl ">
          HABILIDADES
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          {agent.abilities.map((abilitie) => (
            <div
              key={abilitie.slot}
              style={{
                background: `url(${abilitie.displayIcon}) no-repeat center center`,
                backgroundSize: 'contain',
              }}
            >
              <h3 className="text-xl font-bold uppercase mb-4">
                {abilitie.displayName}
              </h3>
              <p>{abilitie.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
