import { api } from '@/services/api'
import { AgentProps } from '@/types'

export async function useAgent({ agentUuid }: { agentUuid: string }) {
  async function getAgentData(): Promise<AgentProps> {
    const response = await api(`/agents/${agentUuid}`, { method: 'GET' })
    const responseJson = await response.json()
    return responseJson.data
  }

  const agent = await getAgentData()

  return { agent }
}
