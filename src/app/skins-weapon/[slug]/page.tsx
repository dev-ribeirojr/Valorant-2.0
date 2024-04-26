import { DinamicPageProps } from '@/types'

export default function WeaponSkins({ params: { slug } }: DinamicPageProps) {
  return (
    <main>
      <p> Skins Weapon {slug}</p>
    </main>
  )
}
