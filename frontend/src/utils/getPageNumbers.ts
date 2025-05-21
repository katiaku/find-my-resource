export const getPageNumbers = (totalPages: number, currentPage: number) => {
  const pages: (number | string)[] = []
  const range = 5

  if (totalPages <= range) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    if (currentPage <= range - 2) {
      pages.push(...[1, 2, 3, 4, 5, "...", totalPages])
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        ...[
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ]
      )
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      )
    }
  }

  return pages
}
