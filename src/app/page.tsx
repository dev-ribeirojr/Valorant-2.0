import { Agents, Hero, Maps, Weapons } from './modules'

export default function Home() {
  return (
    <main className="bg-gray-900 w-full pb-8">
      <Hero />
      <Maps />
      <Agents />
      <Weapons />
    </main>
  )
}
