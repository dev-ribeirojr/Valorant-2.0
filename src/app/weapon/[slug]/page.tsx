import { DinamicPageProps } from '@/types'
import { useWeapon } from '../useWeapon'
import { Container } from '@/components'
import { DetailWeapon, ListSkins } from '../modules'

export default async function WeaponPage({
  params: { slug },
}: DinamicPageProps) {
  const { weapon } = await useWeapon({ weaponUid: slug })

  return (
    <Container>
      <DetailWeapon weapon={weapon} />
      <ListSkins skins={weapon.skins} />
    </Container>
  )
}
