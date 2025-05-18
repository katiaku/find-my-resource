export function formatDate(dateToConvert: string) {

  const date = new Date(dateToConvert)

  return date.toLocaleDateString()

}
