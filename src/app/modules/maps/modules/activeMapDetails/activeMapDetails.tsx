import { MapProps } from '@/types'

interface ActiveMapDetailsProps {
  activeMap: MapProps
}

export function ActiveMapDetails({ activeMap }: ActiveMapDetailsProps) {
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
          <div className="w-full">
            <h2 className="text-4xl mb-4">{activeMap.displayName}</h2>
            <p>{activeMap.narrativeDescription}</p>
          </div>
          <p className="bg-gradient-to-r from-red-500 to-red-400 py-2 px-4 rounded text-white mt-4 w-fit">
            Cordenadas: {activeMap.coordinates || 'XXXX'}
          </p>
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
