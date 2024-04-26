import { DinamicPageProps } from '@/types'

export default function AgentPage({ params: { slug } }: DinamicPageProps) {
  return (
    <main className="bg-red-300">
      <p>agent</p>
      <button className="bg-red-500">teste button {slug}</button>
    </main>
  )
}
