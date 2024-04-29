import { AgentProps } from '@/types'
import Link from 'next/link'

interface CardAgentProps {
  agent: AgentProps
}

export function CardAgent({ agent }: CardAgentProps) {
  const colors = agent.backgroundGradientColors

  return (
    <Link
      href={`/agent/${agent.uuid}`}
      style={{
        backgroundImage: `linear-gradient(to top, #${colors[0]}, #${colors[1]}, #${colors[2]}, #${colors[3]})`,
      }}
      className="child transform transition-transform duration-300 hover:border-2 border-white pt-4 rounded-t-sm h-fit"
    >
      <div
        style={{
          background: `url(${agent.background}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
        className="rounded-b-sm flex flex-col"
      >
        <img
          src={
            agent.bustPortrait ||
            agent.fullPortrait ||
            agent.fullPortraitV2 ||
            ''
          }
          className="child transform transition-transform duration-300 hover:scale-110"
          alt={`Agente ${agent.displayName}`}
        />
        <div className="flex items-center pt-2 bg-gray-800 rounded-b-sm">
          <img
            src={agent.displayIcon || agent.displayIconSmall}
            alt={`Agente ${agent.displayName}`}
            className="w-14"
          />
          <h2 className="font-bold text-white text-2xl text-center flex-1 mr-10">
            {agent.displayName}
          </h2>
        </div>
      </div>
    </Link>
  )
}
