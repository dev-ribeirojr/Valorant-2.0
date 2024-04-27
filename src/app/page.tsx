import { Container } from '@/components'
import { Hero } from './modules'

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="pt-4">
        <p>Home</p>
      </Container>
    </>
  )
}
