import { api } from '@/services/api'
import { WeaponProps } from '@/types'

export async function useWeapon({ weaponUid }: { weaponUid: string }) {
  async function getDataWeapon(): Promise<WeaponProps> {
    const response = await api(`/weapons/${weaponUid}`, { method: 'GET' })
    const responseJson = await response.json()
    return responseJson.data
  }

  const weapon = await getDataWeapon()

  return { weapon }
}
