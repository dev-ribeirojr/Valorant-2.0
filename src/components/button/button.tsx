import { iconsApp } from '@/assets/icons'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type iconProps = keyof typeof iconsApp

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: iconProps
  iconRight?: iconProps
  title?: string
  active?: boolean
}

export function Button({
  iconLeft,
  iconRight,
  title,
  active,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'text-white rounded py-2 px-4 disabled:opacity-30 flex items-center justify-center',
        active
          ? 'bg-gradient-to-r from-red-500 to-red-400 hover:opacity-80'
          : 'bg-gray-800 hover:bg-gradient-to-r from-red-500 to-red-400 ',
      )}
      {...rest}
    >
      {iconLeft && <span>{iconsApp[iconLeft]}</span>}
      {title && <p>{title}</p>}
      {iconRight && <span>{iconsApp[iconRight]}</span>}
    </button>
  )
}
