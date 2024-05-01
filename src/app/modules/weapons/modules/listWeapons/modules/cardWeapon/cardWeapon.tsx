import { WeaponProps } from '@/types'
import Link from 'next/link'

export function CardWeapon({ weapon }: { weapon: WeaponProps }) {
  const skinSelected = weapon.skins[0]

  return (
    <Link
      href={`/weapon/${weapon.uuid}`}
      className="bg-gradient-to-t from-red-500 to-transparent flex flex-col h-70 hover:border-2 border-white"
    >
      <div className="p-4 h-full flex flex-col items-center justify-between gap-4">
        <img
          src={skinSelected.displayIcon || weapon.displayIcon}
          alt={`Imagem da ${weapon.displayName}`}
          className="h-28  mt-8 object-contain"
        />

        {weapon.weaponStats && (
          <div className="flex text-white gap-4">
            <div className="text-center">
              <strong>{weapon?.weaponStats?.fireRate}</strong>
              <p className="text-xs">TAXA DE TIRO</p>
            </div>
            <div className="text-center">
              <strong>{weapon.weaponStats?.reloadTimeSeconds}s</strong>
              <p className="text-xs">TEMPO DE RECARGA</p>
            </div>
            <div className="text-center">
              <strong>{weapon.shopData?.cost}</strong>
              <p className="text-xs">CUSTO</p>
            </div>
          </div>
        )}
      </div>
      <div className="bg-gray-800 h-full max-h-14  flex items-center justify-center gap-4 p-2">
        <h2 className="text-white text-xl font-extrabold">
          {weapon.displayName}
        </h2>
      </div>
    </Link>
  )
}
