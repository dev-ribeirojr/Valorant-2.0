'use client'
import { Grid, Input, Pagination } from '@/components'
import { ListWeaponsProps } from '@/types'
import { CardWeapon } from './modules'
import { useListWeapons } from './useListWeapons'

export function ListWeapons({
  listWeapons,
}: {
  listWeapons: ListWeaponsProps
}) {
  const {
    searchWeaponName,
    listWeaponsPagination,
    pages,
    currentPage,
    handleChangeSearchWeaponName,
    handleChangeCurrentPagePagination,
  } = useListWeapons({ listWeapons })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-col items-center md:flex-row">
        <Pagination
          changePagination={handleChangeCurrentPagePagination}
          pages={pages}
          currentPage={currentPage}
        />
        <Input
          value={searchWeaponName}
          onChange={handleChangeSearchWeaponName}
          placeholder="Busque pelo nome da arma"
        />
      </div>
      <Grid>
        {listWeaponsPagination.map((weapon) => (
          <CardWeapon weapon={weapon} key={weapon.uuid} />
        ))}
      </Grid>
      {listWeaponsPagination.length === 0 && (
        <div className="h-60 bg-gray-800 rounded flex items-center justify-center">
          <p className="text-white text-2xl">
            Nenhuma arma corresponde ao filtro.
          </p>
        </div>
      )}
      <div className="flex items-center justify-center lg:hidden">
        <Pagination
          changePagination={handleChangeCurrentPagePagination}
          pages={pages}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}
