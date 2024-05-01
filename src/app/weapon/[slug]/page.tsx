import { DinamicPageProps } from '@/types'

export default function WeaponPage({ params: { slug } }: DinamicPageProps) {
  return (
    <main>
      <p> Skins Weapon {slug}</p>
    </main>
  )
}
