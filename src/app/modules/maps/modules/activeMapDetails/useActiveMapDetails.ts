'use client'
import { ListMapProps } from '@/types'
import { useEffect, useState } from 'react'

export function useActiveMapDetails({ listMaps }: { listMaps: ListMapProps }) {
  const [indexMapActive, setIndexMapActive] = useState(0)

  useEffect(() => {
    handleChangeActiveMap()
  }, [])

  function handleChangeActiveMap() {
    const randomNumber = Math.floor(
      Math.random() * filterValidateMapActive.length,
    )

    setIndexMapActive(randomNumber)
  }

  const filterValidateMapActive = listMaps.filter(
    (map) =>
      map.premierBackgroundImage && map.coordinates && map.narrativeDescription,
  )

  const activeMap = filterValidateMapActive[indexMapActive]

  return { activeMap, handleChangeActiveMap }
}
