import { ReactNode } from 'react'

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  )
}
