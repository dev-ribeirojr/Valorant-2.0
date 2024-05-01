import { api } from '@/services/api'
import { ListWeaponsProps } from '@/types'

export async function useWeapons() {
  async function getWeapons(): Promise<ListWeaponsProps> {
    const response = await api('/weapons', { method: 'GET' })
    const responseJson = await response.json()
    return responseJson.data
  }

  const listWeapons = await getWeapons()

  return { listWeapons }
}
