'use client'
import { ListAgentsProps } from '@/types'
import { ChangeEvent, useState } from 'react'

export function useListAgents({ listAgents }: { listAgents: ListAgentsProps }) {
  const [searchAgentName, setSearchAgentName] = useState('')
  const [currentPage, setCurrentPage] = useState(0)

  const itemsPerPage = 8
  const listAgentsPagination: ListAgentsProps = []

  const pages = Math.floor(listAgents.length / 8)
  const filterAgentName = listAgents.filter((agent) =>
    agent.displayName.toUpperCase().includes(searchAgentName.toUpperCase()),
  )

  filterAgentName
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((item) => {
      return listAgentsPagination.push(item)
    })

  function handleChangeSearchAgentName(e: ChangeEvent<HTMLInputElement>) {
    setSearchAgentName(e.target.value)
    handleChangeCurrentPagePagination(0)
  }
  function handleChangeCurrentPagePagination(page: number) {
    setCurrentPage(page)
  }

  return {
    listAgentsPagination,
    searchAgentName,
    filterAgentName,
    currentPage,
    pages,
    handleChangeSearchAgentName,
    handleChangeCurrentPagePagination,
  }
}
