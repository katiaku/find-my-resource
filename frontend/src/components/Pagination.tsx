import IconButton from "./IconButton"
import type { PaginationProps } from "../types"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import { getPageNumbers } from "../utils/getPageNumbers"
import Button from "./Button"

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = getPageNumbers(totalPages, currentPage)

  return (
    <div className="mb-8 flex items-center justify-center gap-2 px-4">
      {currentPage > 1 && (
        <IconButton
          icon={<AiOutlineLeft />}
          handleClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className="text-blue-950"
        />
      )}

      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-3 text-blue-950">
            ...
          </span>
        ) : (
          <Button
            key={page}
            name={String(page)}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`max-w-[18px] border px-5 py-2.5 text-xs text-blue-950 ${
              page === currentPage
                ? "border-blue-950 bg-blue-950 text-white"
                : "border-gray-200 bg-gray-200 hover:border-blue-950"
            }`}
          />
        )
      )}

      {currentPage < totalPages && (
        <IconButton
          icon={<AiOutlineRight />}
          handleClick={() =>
            onPageChange(Math.min(currentPage + 1, totalPages))
          }
          className="text-blue-950"
        />
      )}
    </div>
  )
}

export default Pagination
