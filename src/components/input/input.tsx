import { iconsApp } from '@/assets/icons'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ placeholder = 'Busca rápida', ...rest }: InputProps) {
  return (
    <label className="flex w-full cursor-pointer">
      <input
        className="w-full py-2 px-4 rounded text-white bg-gray-800 outline-none"
        placeholder={placeholder}
        {...rest}
      />

      <span className="w-12 text-md text-white bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center rounded-r">
        {iconsApp.search}
      </span>
    </label>
  )
}
