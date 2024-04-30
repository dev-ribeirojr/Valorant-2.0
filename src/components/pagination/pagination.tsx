'use client'
import { Button } from '..'

interface PaginationProps {
  pages: number
  changePagination: (page: number) => void
  currentPage: number
}

export function Pagination({
  pages,
  currentPage,
  changePagination,
}: PaginationProps) {
  return (
    <div className="flex gap-4">
      <Button
        iconLeft="arrowLeft"
        onClick={() => changePagination(currentPage - 1)}
        disabled={currentPage === 0}
      />

      {Array.from({ length: pages }, (_, index) => (
        <Button
          key={index}
          active={index === currentPage}
          title={`${index + 1}`}
          onClick={() => changePagination(index)}
        />
      ))}
      <Button
        iconRight="arrowRight"
        onClick={() => changePagination(currentPage + 1)}
        disabled={pages - 1 === currentPage}
      />
    </div>
  )
}
