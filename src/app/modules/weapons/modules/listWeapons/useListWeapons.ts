'use client'
import { ListWeaponsProps } from '@/types'
import { ChangeEvent, useState } from 'react'

export function useListWeapons({
  listWeapons,
}: {
  listWeapons: ListWeaponsProps
}) {
  const [searchWeaponName, setSearchWeaponName] = useState('')
  const [currentPage, setCurrentPage] = useState(0)

  const itemsPerPage = 8
  const listWeaponsPagination: ListWeaponsProps = []

  const filterWeaponsName = listWeapons.filter((item) =>
    item.displayName.toUpperCase().includes(searchWeaponName.toUpperCase()),
  )
  const pages = Math.ceil(listWeapons.length / itemsPerPage)

  filterWeaponsName
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((item) => {
      return listWeaponsPagination.push(item)
    })

  function handleChangeSearchWeaponName(e: ChangeEvent<HTMLInputElement>) {
    setSearchWeaponName(e.target.value)
    setCurrentPage(0)
  }

  function handleChangeCurrentPagePagination(page: number) {
    setCurrentPage(page)
  }

  return {
    searchWeaponName,
    listWeaponsPagination,
    currentPage,
    pages,
    handleChangeSearchWeaponName,
    handleChangeCurrentPagePagination,
  }
}
