import { api } from '@/services/api'
import { ListAgentsProps } from '@/types'

export async function useListAgents() {
  async function getListAgents(): Promise<ListAgentsProps> {
    const response = await api('/agents', { method: 'GET' })

    const responseJson = await response.json()
    return responseJson.data
  }

  const agents = await getListAgents()

  const filterValidateAgents = agents.filter(
    (agent) => agent.bustPortrait || agent.fullPortrait || agent.fullPortraitV2,
  )

  return { filterValidateAgents }
}
