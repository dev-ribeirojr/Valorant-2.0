import { CardAgent } from './modules'
import { useListAgents } from './useListAgents'

export async function ListAgents() {
  const { filterValidateAgents } = await useListAgents()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-4">
      {filterValidateAgents.map((agent) => (
        <CardAgent agent={agent} key={agent.uuid} />
      ))}
    </div>
  )
}
