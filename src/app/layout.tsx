import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import Favicon from '@/assets/images/favicon.png'
import './globals.css'
import { Header } from '@/components'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['700', '800', '900', '400'],
})

export const metadata: Metadata = {
  title: 'Valorant 2.0',
  description:
    'Explore informações detalhadas sobre os agentes, habilidades e estratégias do jogo Valorant. Fique por dentro das últimas atualizações e notícias do mundo competitivo.',
  icons: [
    {
      rel: 'icon',
      url: Favicon.src,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
