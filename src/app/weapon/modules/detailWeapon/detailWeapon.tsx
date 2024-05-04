import { AboutSection } from '@/components'
import { WeaponProps } from '@/types'

interface DetailWeaponProps {
  weapon: WeaponProps
}

export function DetailWeapon({ weapon }: DetailWeaponProps) {
  return (
    <>
      <AboutSection
        title={weapon.displayName}
        description={`Veja alguns detalhes sobre a ${weapon.displayName}.`}
      />
      <div className="bg-gradient-to-t from-red-500 to-transparent flex flex-col h-70">
        <div className="p-4 h-full flex flex-col items-center justify-between gap-4">
          <img
            src={weapon.displayIcon}
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
      </div>
    </>
  )
}
