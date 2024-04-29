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

  const maps = await getMaps()
  const filterValidateMapActive = maps.filter(
    (map) =>
      map.premierBackgroundImage && map.coordinates && map.narrativeDescription,
  )

  const randomNumber = Math.floor(
    Math.random() * filterValidateMapActive.length,
  )

  const activeMap = filterValidateMapActive[randomNumber]

  return { activeMap }
}
