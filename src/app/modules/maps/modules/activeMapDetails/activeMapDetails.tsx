'use client'
import { ListMapProps } from '@/types'
import { useActiveMapDetails } from './useActiveMapDetails'
import { Button } from '@/components'

interface ActiveMapDetailsProps {
  listMaps: ListMapProps
}

export function ActiveMapDetails({ listMaps }: ActiveMapDetailsProps) {
  const { activeMap, handleChangeActiveMap } = useActiveMapDetails({ listMaps })
  return (
    <div
      className={`w-full  bg-fixed bg-center flex items-center justify-center flex-col gap-4 p-4`}
      style={{
        backgroundImage: `url(${activeMap.stylizedBackgroundImage})`,
      }}
    >
      <img
        className="w-full max-w-[600px] h-full object-contain"
        src={activeMap.displayIcon}
        alt={`Mapa ${activeMap.displayName}`}
      />

      <div className="flex max-w-screen-xl w-full m-auto">
        <img
          className="w-full h-60 object-cover max-w-[200px] rounded-l-md hidden sm:block"
          src={activeMap.listViewIconTall}
          alt={`Mapa ${activeMap.displayName}`}
        />

        <div className="p-4 text-white bg-gray-800  w-full flex flex-col justify-between rounded-md lg:rounded-r-none sm:rounded-l-none">
          <div className="w-full items-center justify-center flex flex-col gap-4">
            <h2 className="text-4xl">{activeMap.displayName}</h2>
            <p className="bg-gradient-to-r from-red-500 to-red-400 py-2 px-4 rounded text-white w-fit mt-4">
              Cordenadas: {activeMap.coordinates || 'XXXX'}
            </p>
            <Button
              active
              title="Alterar Mapa"
              onClick={handleChangeActiveMap}
            />
          </div>
        </div>
        <img
          className="w-full h-60 max-w-[200px] object-cover rounded-es-sm rounded-r-md hidden lg:block"
          src={activeMap.premierBackgroundImage || ''}
          alt={`Mapa ${activeMap.displayName}`}
        />
      </div>
    </div>
  )
}
