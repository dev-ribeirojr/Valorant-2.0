import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <main className={twMerge('bg-gray-900 w-full px-4 pt-16', rest.className)}>
      <div className="h-full w-full max-w-screen-xl m-auto">{children}</div>
    </main>
  )
}
