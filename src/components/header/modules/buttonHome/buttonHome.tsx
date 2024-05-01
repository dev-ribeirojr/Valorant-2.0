'use client'

import { iconsApp } from '@/assets/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ButtonHome() {
  const pathName = usePathname()

  if (pathName === '/') return <></>

  return (
    <Link
      href={'/'}
      className="bg-gray-700 p-2 rounded text-white text-2xl hover:bg-gradient-to-r from-red-500 to-red-400"
    >
      {iconsApp.home}
    </Link>
  )
}
