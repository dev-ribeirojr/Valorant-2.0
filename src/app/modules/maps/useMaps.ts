import { api } from '@/services/api'
import { ListMapProps } from '@/types'

export async function useMaps() {
  async function getMaps(): Promise<ListMapProps> {
    const response = await api('/maps', {
      method: 'GET',
    })

    const responseJson = await response.json()
    return responseJson.data
  }

  const listMaps = await getMaps()

  return { listMaps }
}
