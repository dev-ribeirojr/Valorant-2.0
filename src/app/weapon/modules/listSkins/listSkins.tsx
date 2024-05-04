import { AboutSection, Grid } from '@/components'
import { ListSkinsWeaponProps } from '@/types'

interface ListSkinsProps {
  skins: ListSkinsWeaponProps
}

export function ListSkins({ skins }: ListSkinsProps) {
  return (
    <div className="pb-8">
      <AboutSection
        title="Skins"
        description={`Veja todas as ${skins.length} skins dinsponíveis, são elas...`}
      />
      <Grid>
        {skins.map(
          (skin) =>
            skin.displayIcon &&
            skin.contentTierUuid && (
              <div
                key={skin.uuid}
                className="bg-gradient-to-t from-red-500 to-transparent flex flex-col h-70 hover:border-2 border-white rounded"
              >
                <img
                  src={skin.displayIcon}
                  alt={`skin da arma ${skin.displayName}`}
                  className="h-28  mt-8 object-contain"
                />
                <div className="bg-gray-800 h-full max-h-14  flex items-center justify-center gap-4 p-2 rounded-b">
                  <h2 className="text-white text-xl font-extrabold">
                    {skin.displayName}
                  </h2>
                </div>
              </div>
            ),
        )}
      </Grid>
    </div>
  )
}
