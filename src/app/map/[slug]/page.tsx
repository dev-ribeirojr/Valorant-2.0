import { DinamicPageProps } from '@/types'

export default async function MapPage({ params: { slug } }: DinamicPageProps) {
  return (
    <main className="bg-red-300">
      <p>agent</p>
      <button className="bg-red-500">MAP {slug}</button>
    </main>
  )
}
