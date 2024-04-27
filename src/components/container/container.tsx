import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <main className="bg-gray-900 w-full h-full px-4 pt-16">
      <div className="h-full w-full max-w-screen-2xl m-auto">{children}</div>
    </main>
  )
}
