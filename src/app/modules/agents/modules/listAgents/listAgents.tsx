'use client'
import { Input, Pagination } from '@/components'
import { CardAgent } from './modules'
import { ListAgentsProps } from '@/types'
import { useListAgents } from './useListAgents'

export function ListAgents({ listAgents }: { listAgents: ListAgentsProps }) {
  const {
    searchAgentName,
    listAgentsPagination,
    currentPage,
    pages,

    handleChangeCurrentPagePagination,
    handleChangeSearchAgentName,
  } = useListAgents({ listAgents })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 flex-col items-center md:flex-row">
        <Pagination
          changePagination={handleChangeCurrentPagePagination}
          pages={pages}
          currentPage={currentPage}
        />
        <Input
          value={searchAgentName}
          onChange={handleChangeSearchAgentName}
          placeholder="Buscar agentes"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {listAgentsPagination.map((agent) => (
          <CardAgent agent={agent} key={agent.uuid} />
        ))}
      </div>

      {listAgentsPagination.length === 0 && (
        <div className="h-60 bg-gray-800 rounded flex items-center justify-center">
          <p className="text-white text-2xl">
            Nenhum agente corresponde ao filtro.
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
