export function refactorCurrencyFromCents(price) {
  const refactoredPrice = (price / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
  return refactoredPrice
}

export function removeEspecialCharacter(word) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}